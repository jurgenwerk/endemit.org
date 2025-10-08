import {
  ProductCategory,
  ProductRegion,
  ProductStatus,
  ProductType,
  ProductVisibility,
  VariantType,
  VariantValue,
} from "@/app/(types)/product";

export interface PrismicImage {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string | null;
  copyright: string | null;
  url: string;
  id: string;
  edit: {
    x: number;
    y: number;
    zoom: number;
    background: string;
  };
}

export interface PrismicRichTextSpan {
  start: number;
  end: number;
  type: "strong" | "em" | "hyperlink";
  data?: {
    link_type?: string;
    url?: string;
  };
}

export interface PrismicRichTextBlock {
  type: "paragraph" | "heading4" | "list-item" | "o-list-item";
  text: string;
  spans: PrismicRichTextSpan[];
  direction: "ltr" | "rtl";
}

// Group field types
export interface ImageGroup {
  image: PrismicImage;
}

export interface ProductVariant {
  variant_value: VariantValue;
  variant_type: VariantType;
}

export interface RegionalEligibility {
  region: ProductRegion;
}

export interface PrismicProductReference {
  id: string;
  type: "product";
  tags: string[];
  lang: string;
  slug: string;
  first_publication_date: string;
  last_publication_date: string;
  uid: string;
  data: {
    title: string;
  };
  link_type: "Document";
  key: string;
  isBroken: boolean;
}

export interface RelatedProduct {
  related_product: PrismicProductReference;
  call_to_action: string;
}

// Main Product Document Data
export interface PrismicProductData {
  // Main tab
  title: string;
  description: PrismicRichTextBlock[];
  images: ImageGroup[];
  related_products: RelatedProduct[];
  special_notice: string;

  // SEO & Metadata tab
  meta_title: string | null;
  meta_description: string | null;
  meta_image: Partial<PrismicImage>;

  // Product attributes tab
  product_type: ProductType;
  product_category: ProductCategory;
  product_status: ProductStatus;
  product_visibility: ProductVisibility;
  price: number;
  quantity_limit: number;
  weight: number;
  variants: ProductVariant[];
  regional_eligibility: RegionalEligibility[];
}

// Complete Product Document
export interface PrismicProductDocument {
  id: string;
  uid: string;
  url: string | null;
  type: "product";
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  lang: string;
  data: PrismicProductData;
}
