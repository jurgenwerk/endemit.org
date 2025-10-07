import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicProductDocument } from "@/app/(types)/prismic";
import { richTextToPlainText } from "@/app/(lib)/util";
import { prismic } from "@/app/(services)/prismic";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const products = await prismic.getAllByType("product");

  return products.map(product => ({
    uid: product.uid,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { uid: string };
}): Promise<Metadata> {
  const product = (await prismic
    .getByUID("product", params.uid)
    .catch(() => null)) as PrismicProductDocument;

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.data.meta_title || product.data.title,
    description:
      product.data.meta_description ||
      richTextToPlainText(product.data.description),
    openGraph: {
      title: product.data.meta_title || product.data.title,
      description:
        product.data.meta_description ||
        richTextToPlainText(product.data.description),
      images: product.data.meta_image?.url
        ? [{ url: product.data.meta_image.url }]
        : product.data.images.length > 0
          ? [{ url: product.data.images[0].image.url }]
          : [],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    productId: string;
  }>;
}) {
  const { productId } = await params;

  const product = (await prismic
    .getByUID("product", productId)
    .catch(() => null)) as PrismicProductDocument;

  if (!product || product.data.product_visibility === "Hidden") {
    notFound();
  }

  return <div className={"p-32 "}>Yes {product.data.title}</div>;
}
