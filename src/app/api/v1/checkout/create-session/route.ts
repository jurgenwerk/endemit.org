import { PrismicProductDocument } from "@/types/prismic";
import { NextResponse } from "next/server";
import {
  getFormattedProduct,
  getVariantSingleProducts,
} from "@/domain/cms/cms.actions";
import { CartItem } from "@/types/cart";
import assert from "node:assert";
import { CustomStripeLineItem, ShippingAddress } from "@/types/checkout";
import { Product, ProductCompositionType } from "@/types/product";
import { stripe } from "@/services/stripe/stripe";
import { prismicClient } from "@/services/prismic/prismic";
import { getOrderWeight } from "@/domain/checkout/checkout.actions";
import shippingService from "@/domain/shipping/shipping.service";
import { Country } from "@/types/country";
import { createOrder } from "@/domain/order/order.actions";
import { includesShippableProduct } from "@/domain/checkout/checkout.rules";
import {
  isProductSellableByStatus,
  isProductTicket,
} from "@/domain/product/product.rules";
import { CheckoutValidationService } from "@/domain/validation/validation.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const items = body.items as CartItem[];
    assert(body.items && body.items.length > 0, "The items array is empty");

    const email = body.email;
    const formData = body.formData;
    const termsAndConditions = body.termsAndConditions;
    const shouldHaveShippingAddress = includesShippableProduct(items);
    const complementaryTicketData = body.complementaryTicketData;
    const shippingAddress = body.shippingAddress as ShippingAddress | undefined;

    assert(
      !shouldHaveShippingAddress || shippingAddress,
      "Shipping address is required but not provided"
    );
    assert(email, "Email is required");
    assert(termsAndConditions, "Terms and conditions must be accepted");

    const isFormValid = CheckoutValidationService.validateForm({
      formData,
      requiresShippingAddress: shouldHaveShippingAddress,
      items,
    });
    assert(isFormValid, "Form validation failed");

    const products = (await prismicClient.getAllByType("product", {
      pageSize: 100,
    })) as PrismicProductDocument[];

    const productsWithCompositionType = products.map(product =>
      getFormattedProduct(product)
    );

    // Determine valid products based on sellable status and composition
    const validProducts: Product[] = [];

    productsWithCompositionType
      .filter(product => isProductSellableByStatus(product))
      //.filter(product => isProductSellableByRegion(country)
      .forEach(product => {
        if (product.composition === ProductCompositionType.CONFIGURABLE) {
          const variants = getVariantSingleProducts(product);
          variants.forEach(variant => validProducts.push(variant));
        } else {
          validProducts.push(product);
        }
      });

    // Ensure all items are valid products with valid prices
    const checkoutItems: CartItem[] = [];
    const orderWeight = getOrderWeight(items);

    items.forEach(item => {
      const product = validProducts.find(p => p.id === item.id);
      if (product) {
        checkoutItems.push({ ...item, price: product.price, type: item.type });
      } else {
        console.warn(`Item with id ${item.id} is not valid for checkout`);
      }
    });

    assert(checkoutItems.length > 0, "There are no valid items for checkout");
    assert(
      checkoutItems.every(item => item.price && item.price > 0),
      "One or more items have invalid prices"
    );

    const lineItems: CustomStripeLineItem[] = checkoutItems.map(item => {
      const isTicket = isProductTicket(item);

      let ticketHolders = [];

      if (isTicket) {
        ticketHolders = Array.from(
          { length: item.quantity },
          (_, index) => `ticket-${item.id}-${index + 1}-name`
        ).map(key => {
          return complementaryTicketData[key];
        });
      }

      console.log({ ticketHolders });

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            description: item.checkoutDescription ?? undefined,
            images: item.images.length > 0 ? [item.images[0].src] : undefined,
            metadata: {
              productType: item.type,
              productCategory: item.category,
              ticketHolders: isTicket ? JSON.stringify(ticketHolders) : null,
              relatedEvent: item.relatedEvent
                ? JSON.stringify(item.relatedEvent)
                : null,
              uid: item.uid,
            },
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects amount in cents
        },
        quantity: item.quantity,
      };
    });

    if (shouldHaveShippingAddress && shippingAddress) {
      const shippingCalculation = shippingService.calculateShippingCost(
        shippingAddress.country as Country,
        orderWeight
      );
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: `Shipping to ${shippingCalculation.country.name}`,
            description: `Shipping to ${shippingAddress.name}, ${shippingAddress.postalCode} ${shippingAddress.city}, ${shippingCalculation.country.name}`,
            images: [
              "https://images.prismic.io/endemit/aOk-rp5xUNkB11YE_delivery.png?auto=format,compress",
            ],
          },
          unit_amount: Math.round(shippingCalculation.cost * 100), // in cents
        },
        quantity: 1,
      });
    }

    // Prepare metadata for shipping
    const metadata: Record<string, string> = {
      requiresShipping: shouldHaveShippingAddress.toString(),
    };

    if (shippingAddress) {
      metadata.shippingName = shippingAddress.name;
      metadata.shippingAddressLine1 = shippingAddress.address;
      metadata.shippingCity = shippingAddress.city;
      metadata.shippingPostalCode = shippingAddress.postalCode;
      metadata.shippingCountry = shippingAddress.country;
      metadata.shippingPhone = shippingAddress.phone;
      metadata.shippingEmail = email;
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      customer_email: email,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store/checkout/canceled`,
      metadata,
    });

    const shippingCost =
      shouldHaveShippingAddress && shippingAddress
        ? shippingService.calculateShippingCost(
            shippingAddress.country as Country,
            orderWeight
          ).cost
        : 0;

    const subtotal = checkoutItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    await createOrder({
      stripeSessionId: session.id,
      email,
      subtotal,
      shippingCost,
      shippingRequired: shouldHaveShippingAddress,
      shippingAddress: shippingAddress,
      checkoutItems: lineItems,
    });

    return NextResponse.json(
      {
        sessionId: session.id,
        url: session.url,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to create checkout session",
      },
      { status: 500 }
    );
  }
}
