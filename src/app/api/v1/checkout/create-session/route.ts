import { PrismicProductDocument } from "@/types/prismic";
import { NextResponse } from "next/server";
import { formatProduct, getVariantSingleProducts } from "@/domain/cms.service";
import { isProductSellableByStatus } from "@/domain/product.service";
import { CartItem } from "@/types/cart";
import assert from "node:assert";
import { ShippingAddress } from "@/types/checkout";
import { Product, ProductCompositionType } from "@/types/product";
import { stripe } from "@/services/stripe";
import Stripe from "stripe";
import { prismicClient } from "@/services/prismic";
import {
  getOrderWeight,
  includesShippableProduct,
} from "@/domain/checkout.service";
import shippingService from "@/domain/shipping.service";
import { Country } from "@/types/country";
import { formatNumber } from "@/lib/formatting";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const items = body.items as CartItem[];
    assert(body.items && body.items.length > 0, "The items array is empty");

    const email = body.email;
    const termsAndConditions = body.termsAndConditions;
    const shouldHaveShippingAddress = includesShippableProduct(items);
    const shippingAddress = body.shippingAddress as ShippingAddress | undefined;

    assert(
      !shouldHaveShippingAddress || shippingAddress,
      "Shipping address is required but not provided"
    );
    assert(email, "Email is required");
    assert(termsAndConditions, "Terms and conditions must be accepted");

    const products = (await prismicClient.getAllByType("product", {
      pageSize: 100,
    })) as PrismicProductDocument[];

    const productsWithCompositionType = products.map(product =>
      formatProduct(product)
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

    items.forEach(item => {
      const product = validProducts.find(p => p.id === item.id);
      if (product) {
        checkoutItems.push({ ...item, price: product.price });
      } else {
        console.warn(`Item with id ${item.id} is not valid for checkout`);
      }
    });

    assert(checkoutItems.length > 0, "There are no valid items for checkout");
    assert(
      checkoutItems.every(item => item.price && item.price > 0),
      "One or more items have invalid prices"
    );

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      checkoutItems.map(item => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            description: item.checkoutDescription ?? undefined,
            images: item.images.length > 0 ? [item.images[0].src] : undefined,
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects amount in cents
        },
        quantity: item.quantity,
      }));

    if (shouldHaveShippingAddress && shippingAddress) {
      const orderWeight = getOrderWeight(items);
      const shippingCalculation = shippingService.calculateShippingCost(
        shippingAddress.country as Country,
        orderWeight
      );
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: `Shipping to ${shippingCalculation.country.name}`,
            description: `Shipping cost to ${shippingAddress.country} for a package weighing ${formatNumber(orderWeight, 3)}kg`,
          },
          unit_amount: Math.round(shippingCalculation.cost * 100), // Stripe expects amount in cents
        },
        quantity: 1,
      });
    }

    // Prepare metadata for shipping
    const metadata: Record<string, string> = {
      requiresShipping: shouldHaveShippingAddress.toString(),
    };

    // TODO
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

    // TODO: Add to database with session.id reference

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
