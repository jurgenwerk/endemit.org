import { Product, ProductCompositionType } from "@/types/product";
import { richTextToPlainText } from "@/lib/util";
import { PrismicProductDocument } from "@/types/prismic";
import { getProductId, getProductName } from "@/domain/product.service";

export const formatProduct = (product: PrismicProductDocument) => {
  const hasVariants =
    product.data.variants.length > 0 &&
    !!product.data.variants[0].variant_value;
  const hasRelatedProducts =
    product.data.related_products.length > 0 &&
    !!product.data.related_products[0].related_product.id;
  const hasRelatedEvent =
    !!product.data.related_to_event && !!product.data.related_to_event.id;
  return {
    id: product.id,
    uid: product.uid,
    name: product.data.title,
    description: richTextToPlainText(product.data.description),
    images: product.data.images.map(img => ({
      src: img.image.url,
      alt: img.image.alt,
    })),
    video: product.data.video?.url ?? null,
    price: product.data.price,
    currency: "eur",
    type: product.data.product_type,
    status: product.data.product_status,
    visibility: product.data.product_visibility,
    category: product.data.product_category,
    isFeatured: product.data.featured_product ?? false,
    sortingWeight: product.data.sorting_weight ?? 0,
    cutoffTimestamp: product.data.cutoff_date
      ? new Date(product.data.cutoff_date)
      : null,
    weight: product.data.weight,
    variants: product.data.variants,
    composition: hasVariants
      ? ProductCompositionType.CONFIGURABLE
      : ProductCompositionType.SINGLE,
    regionalEligibility: product.data.regional_eligibility,
    relatedProducts: hasRelatedProducts
      ? product.data.related_products.map(rp => ({
          id: rp.related_product.id,
          uid: rp.related_product.uid,
          title: rp.related_product.data.title,
          description: richTextToPlainText(rp.related_product.data.description),
          category: rp.related_product.data.product_category,
          productType: rp.related_product.data.product_type,
          status: rp.related_product.data.product_status,
          visibility: rp.related_product.data.product_visibility,
          images: product.data.images.map(img => ({
            src: img.image.url,
            alt: img.image.alt,
          })),
          price: rp.related_product.data.price,
          sortingWeight: rp.related_product.data.sorting_weight ?? 0,
          callToAction: rp.call_to_action,
        }))
      : null,
    relatedEvent: hasRelatedEvent
      ? {
          id: product.data.related_to_event.id,
          uid: product.data.related_to_event.uid,
          title: product.data.related_to_event.data.title,
          venueName: product.data.related_to_event.data.venue_name,
        }
      : null,
    specialNotice: product.data.special_notice,
    checkoutDescription: product.data.checkout_description,
    meta: {
      title: product.data.meta_title,
      description: product.data.meta_description,
      image: product.data.meta_image?.url || null,
    },
  } as Product;
};

export const getVariantSingleProducts = (product: Product) => {
  const variantSingleProducts: Product[] = [];

  product.variants.forEach(variant => {
    const productId = getProductId(product.uid, variant.variant_value);
    const productName = getProductName(product.name, variant.variant_value);

    const productWithVariant: Product = {
      ...product,
      id: productId,
      uid: productId,
      composition: ProductCompositionType.VARIANT,
      name: productName,
      variants: [variant],
    };
    variantSingleProducts.push(productWithVariant);
  });

  return variantSingleProducts;
};
