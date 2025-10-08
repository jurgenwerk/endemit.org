import { createClient } from "@prismicio/client";
import { PrismicProductDocument } from "@/app/(types)/prismic";
import { NextResponse } from "next/server";
import { Product, ProductVisibility } from "@/app/(types)/product";
import { richTextToPlainText } from "@/app/(lib)/util";
import { formatProduct, prismic } from "@/app/(services)/prismic";

export async function GET() {
  try {
    const products = (await prismic.getAllByType("product", {
      pageSize: 100,
    })) as PrismicProductDocument[];

    const visibleProducts = products.filter(
      product => product.data.product_visibility === ProductVisibility.VISIBLE
    );

    const formattedProducts: Product[] = visibleProducts.map(product =>
      formatProduct(product)
    );

    return NextResponse.json(formattedProducts, { status: 200 });
  } catch (error) {
    console.error("Error fetching products from Prismic:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
