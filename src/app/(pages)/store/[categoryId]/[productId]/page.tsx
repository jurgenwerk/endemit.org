import { PrismicProductDocument } from "@/types/prismic";
import { getFormattedProduct } from "@/domain/cms/cms.actions";
import { formatPrice } from "@/lib/formatting";
import { createSlug } from "@/lib/util";
import Breadcrumb from "@/components/Breadcrumb";
import ProductStatusTag from "@/components/product/ProductStatusTag";
import ImageGallery from "@/components/ImageGallery";
import ProductConfigure from "@/components/product/ProductConfigure";
import { prismicClient } from "@/services/prismic/prismic";

export const revalidate = 3600; // Revalidate cache every hour

export async function generateStaticParams() {
  const products = await prismicClient.getAllByType("product");

  return products.map(product => ({
    uid: product.uid,
  }));
}

// TODO Nejc
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

  const prismicProduct = (await prismicClient
    .getByUID("product", productId)
    .catch(() => null)) as PrismicProductDocument;

  if (!prismicProduct) {
    return {
      title: "Product Not Found",
    };
  }

  const product = getFormattedProduct(prismicProduct);

  return (
    <div className=" mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16 ">
      <div>
        <h1 className="text-3xl font-bold text-white mb-0 pb-0">
          {product.name}
        </h1>
        <Breadcrumb
          segments={[
            { label: "Endemit", path: "" },
            { label: "Store", path: "store" },
            { label: product.category, path: createSlug(product.category) },
            { label: product.name, path: product.uid },
          ]}
        />
      </div>

      <ProductStatusTag
        status={product.status}
        className={"translate-y-4 translate-x-4"}
      />

      <div>
        {/* Image gallery */}
        <ImageGallery images={product.images} altFallbackText={product.name} />

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid  lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            {product.price && (
              <p className="text-3xl tracking-tight text-gray-100">
                {formatPrice(product.price)}
              </p>
            )}
          </div>

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
          </div>
        </div>

        <ProductConfigure product={product} />
      </div>
    </div>
  );
}
