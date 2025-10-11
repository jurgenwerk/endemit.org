import { PrismicProductDocument } from "@/types/prismic";
import { NextResponse } from "next/server";
import { getFormattedProduct } from "@/domain/cms/cms.actions";
import { prismicClient } from "@/services/prismic/prismic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;

    const product = (await prismicClient.getByUID(
      "product",
      productId
    )) as PrismicProductDocument;

    const formattedProduct = getFormattedProduct(product);

    return NextResponse.json(formattedProduct, { status: 200 });
  } catch (error) {
    console.error("Error fetching product from Prismic:", error);
    return NextResponse.json(
      { error: "Product not found" + (await params).productId },
      { status: 404 }
    );
  }
}
