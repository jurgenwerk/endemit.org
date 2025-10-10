import { PrismicProductDocument } from "@/types/prismic";
import { NextResponse } from "next/server";
import { formatProduct } from "@/domain/cms.service";
import { prismicClient } from "@/services/prismic";

export async function GET() {
  try {
    const products = (await prismicClient.getAllByType("product", {
      pageSize: 100,
    })) as PrismicProductDocument[];

    const productsWithRequiredAttributes = products.filter(
      (product: PrismicProductDocument) =>
        product.data.price && product.data.price > 0
    );

    const productsWithCompositionType = productsWithRequiredAttributes.map(
      product => formatProduct(product)
    );

    return NextResponse.json(productsWithCompositionType, { status: 200 });
  } catch (error) {
    console.error("Error fetching products from Prismic:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
