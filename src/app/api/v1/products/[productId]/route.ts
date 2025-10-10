import { PrismicProductDocument } from "@/types/prismic";
import { NextResponse } from "next/server";
import { formatProduct } from "@/domain/cms.service";
import { prismicClient } from "@/services/prismic";

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

    const formattedProduct = formatProduct(product);

    return NextResponse.json(formattedProduct, { status: 200 });
  } catch (error) {
    console.error("Error fetching product from Prismic:", error);
    return NextResponse.json(
      { error: "Product not found" + (await params).productId },
      { status: 404 }
    );
  }
}
