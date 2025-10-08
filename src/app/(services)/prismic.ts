import { createClient } from "@prismicio/client";
import { Product } from "@/app/(types)/product";
import { richTextToPlainText } from "@/app/(lib)/util";
import { PrismicProductDocument } from "@/app/(types)/prismic";

export const prismic = createClient(process.env.PRISMIC_REPOSITORY_NAME!, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

export const formatProduct = (product: PrismicProductDocument) => {
  return {
    id: product.id,
    uid: product.uid,
    name: product.data.title,
    description: richTextToPlainText(product.data.description),
    images: product.data.images.map(img => ({
      src: img.image.url,
      alt: img.image.alt,
    })),
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
  } as Product;
};
