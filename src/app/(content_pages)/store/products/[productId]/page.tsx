import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicProductDocument } from "@/app/(types)/prismic";
import { richTextToHTML, richTextToPlainText } from "@/app/(lib)/util";
import { formatProduct, prismic } from "@/app/(services)/prismic";
import { priceFormat } from "@/app/(lib)/formatting";
import ProductQtyControl from "@/app/(components)/ProductQtyControl";
import { useCartActions, useCartItems } from "@/app/(stores)/CartStore";
import { isProductSellableByStatus } from "@/app/(logic)/product";
import { ProductVisibility } from "@/app/(types)/product";
import Image from "next/image";
import ProductInteraction from "@/app/(content_pages)/store/products/[productId]/ProductInteraction";
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const products = await prismic.getAllByType("product");

  return products.map(product => ({
    uid: product.uid,
  }));
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { uid: string };
// }): Promise<Metadata> {
//   const prismicProduct = (await prismic
//     .getByUID("product", params.uid)
//     .catch(() => null)) as PrismicProductDocument;
//
//   if (!prismicProduct) {
//     return {
//       title: "Product Not Found",
//     };
//   }
//
//   const product = formatProduct(prismicProduct);
//
//   return {
//     title: product.data.meta_title || product.data.title,
//     description:
//       product.meta_description ||
//       richTextToPlainText(product.data.description),
//     openGraph: {
//       title: product.data.meta_title || product.data.title,
//       description:
//         product.data.meta_description ||
//         richTextToPlainText(product.data.description),
//       images: product.data.meta_image?.url
//         ? [{ url: product.data.meta_image.url }]
//         : product.images.length > 0
//           ? [{ url: product.images[0].src }]
//           : [],
//     },
//   };
// }

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    productId: string;
  }>;
}) {
  const { productId } = await params;

  const prismicProduct = (await prismic
    .getByUID("product", productId)
    .catch(() => null)) as PrismicProductDocument;

  if (!prismicProduct) {
    return {
      title: "Product Not Found",
    };
  }

  const product = formatProduct(prismicProduct);

  if (!product || product.visibility !== ProductVisibility.VISIBLE) {
    notFound();
  }

  const isSellable = isProductSellableByStatus(product.status);

  return (
    <div className="lg:max-w-3xl mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16 ">
      <h1 className="text-3xl font-bold text-white mb-8">{product.name}</h1>

      <div>
        {/*<nav aria-label="Breadcrumb">*/}
        {/*  <ol*/}
        {/*    role="list"*/}
        {/*    className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"*/}
        {/*  >*/}
        {/*    {product.breadcrumbs.map(breadcrumb => (*/}
        {/*      <li key={breadcrumb.id}>*/}
        {/*        <div className="flex items-center">*/}
        {/*          <a*/}
        {/*            href={breadcrumb.href}*/}
        {/*            className="mr-2 text-sm font-medium text-gray-900"*/}
        {/*          >*/}
        {/*            {breadcrumb.name}*/}
        {/*          </a>*/}
        {/*          <svg*/}
        {/*            fill="currentColor"*/}
        {/*            width={16}*/}
        {/*            height={20}*/}
        {/*            viewBox="0 0 16 20"*/}
        {/*            aria-hidden="true"*/}
        {/*            className="h-5 w-4 text-gray-300"*/}
        {/*          >*/}
        {/*            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />*/}
        {/*          </svg>*/}
        {/*        </div>*/}
        {/*      </li>*/}
        {/*    ))}*/}
        {/*    <li className="text-sm">*/}
        {/*      <a*/}
        {/*        href={product.href}*/}
        {/*        aria-current="page"*/}
        {/*        className="font-medium text-gray-500 hover:text-gray-600"*/}
        {/*      >*/}
        {/*        {product.name}*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*  </ol>*/}
        {/*</nav>*/}

        {/* Image gallery */}
        <div className="mx-auto mt-6 lg:grid lg:grid-cols-3 lg:gap-8">
          <Image
            width={800}
            height={800}
            alt={product.images[0]?.alt ?? product.name}
            src={product.images[0].src}
            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
          />
          <Image
            width={800}
            height={800}
            alt={product.images[0]?.alt ?? product.name}
            src={product.images[0].src}
            className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
          />
          <Image
            width={800}
            height={800}
            alt={product.images[0]?.alt ?? product.name}
            src={product.images[0].src}
            className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
          />
          <Image
            width={800}
            height={800}
            alt={product.images[0]?.alt ?? product.name}
            src={product.images[0].src}
            className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-100">
              {priceFormat(product.price)}
            </p>
          </div>
          <ProductInteraction product={product} />

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p
                  className="text-base text-gray-100"
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}
                />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-100">Highlights</h3>

              {/*<div className="mt-4">*/}
              {/*  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">*/}
              {/*    {product.highlights.map(highlight => (*/}
              {/*      <li key={highlight} className="text-gray-400">*/}
              {/*        <span className="text-gray-600">{highlight}</span>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>

            {/*<div className="mt-10">*/}
            {/*  <h2 className="text-sm font-medium text-gray-900">Details</h2>*/}

            {/*  <div className="mt-4 space-y-6">*/}
            {/*    <p className="text-sm text-gray-600">{product.details}</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
