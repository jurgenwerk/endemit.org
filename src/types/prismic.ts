import {
  ProductCategory,
  ProductRegion,
  ProductStatus,
  ProductType,
  ProductVisibility,
  VariantType,
  VariantValue,
} from "@/types/product";

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

export interface PrismicVideo {
  link_type: "Media";
  name: string;
  kind: string;
  url: string;
  size: string;
  height?: string;
  width?: string;
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

export interface PrismicEventReference {
  id: string;
  type: "event";
  tags: string[];
  lang: string;
  slug: string;
  uid: string;
  data: {
    title: string;
    venue_name: string;
    venue_address: string;
    venue_logo: PrismicImage;
    date_start: string;
  };
  link_type: "Document";
  isBroken: boolean;
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
    description: PrismicRichTextBlock[];
    product_category: ProductCategory;
    product_type: ProductType;
    product_status: ProductStatus;
    product_visibility: ProductVisibility;
    images: ImageGroup[];
    price: number;
    sorting_weight: number | null;
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
  // About tab
  title: string;
  product_category: ProductCategory;
  product_type: ProductType;
  images: ImageGroup[];
  video: PrismicVideo | null;
  description: PrismicRichTextBlock[];
  related_products: RelatedProduct[];
  related_to_event: PrismicEventReference;
  special_notice: string | null;
  checkout_description: string | null;

  // Attributes tab
  product_status: ProductStatus;
  product_visibility: ProductVisibility;
  price: number;
  weight: number | null;
  featured_product: boolean;
  sorting_weight: number | null;

  // Variants tab
  variants: ProductVariant[];

  // Limitations tab
  regional_eligibility: RegionalEligibility[];
  quantity_limit: number | null;
  cutoff_date: string | null;

  // SEO & Metadata tab
  meta_title: string | null;
  meta_description: string | null;
  meta_image: Partial<PrismicImage>;
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
