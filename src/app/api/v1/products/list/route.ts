import { createClient } from "@prismicio/client";
import { PrismicProductDocument } from "@/app/(types)/prismic";
import { NextResponse } from "next/server";
import { Product, ProductVisibility } from "@/app/(types)/product";
import { richTextToPlainText } from "@/app/(lib)/util";
import { prismic } from "@/app/(services)/prismic";

export async function GET() {
  try {
    const products = (await prismic.getAllByType(
      "product"
    )) as PrismicProductDocument[];

    const visibleProducts = products.filter(
      product => product.data.product_visibility === ProductVisibility.VISIBLE
    );

    const formattedProducts: Product[] = visibleProducts.map(product => ({
      id: product.id,
      uid: product.uid,
      name: product.data.title,
      description: richTextToPlainText(product.data.description),
      images: product.data.images.map(img => img.image.url),
      price: product.data.price,
      currency: "eur",
      type: product.data.product_type,
      status: product.data.product_status,
      visibility: product.data.product_visibility,
      category: product.data.product_category,
      weight: product.data.weight,
      variants: product.data.variants,
      regionalEligibility: product.data.regional_eligibility,
      relatedProducts: product.data.related_products.map(rp => ({
        id: rp.related_product.id,
        uid: rp.related_product.uid,
        title: rp.related_product.data.title,
        callToAction: rp.call_to_action,
      })),
      specialNotice: product.data.special_notice,
      meta: {
        title: product.data.meta_title,
        description: product.data.meta_description,
        image: product.data.meta_image?.url || null,
      },
    }));

    return NextResponse.json(formattedProducts, { status: 200 });
  } catch (error) {
    console.error("Error fetching products from Prismic:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
