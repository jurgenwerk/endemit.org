import Stripe from "stripe";
import {
  StripeProduct,
  ProductType,
  ProductCategory,
  ProductStatus,
} from "../types";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function GET() {
  try {
    const products = await stripe.products.list({
      active: true,
      expand: ["data.default_price"],
      limit: 100,
    });

    const formattedProducts: StripeProduct[] = products.data.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      images: product.images,
      price: (product.default_price as Stripe.Price)?.unit_amount || 0,
      currency: (product.default_price as Stripe.Price)?.currency || "eur",
      priceId: (product.default_price as Stripe.Price)?.id || "",
      type: ProductType.PHYSICAL,
      status: ProductStatus.AVAILABLE,
      metaData: {
        weight: parseInt(product.metadata?.weight || "0"),
      },
      category: (product.metadata?.category as ProductCategory) || "",
    }));

    return NextResponse.json(formattedProducts, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
