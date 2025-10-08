export enum ProductType {
  PHYSICAL = "Physical",
  DIGITAL = "Digital",
}

export enum ProductCategory {
  MERCH = "Merch",
  MUSIC = "Music",
  ALBUM = "Album",
  ITEM = "Item",
  DONATION = "Donation",
  TICKET = "Ticket",
  LICENSE = "License",
  CURRENCY = "Currency",
  OTHER = "Other",
}

export enum ProductStatus {
  AVAILABLE = "Available",
  PREORDER = "Preorder",
  COMING_SOON = "Coming soon",
  OUT_OF_STOCK = "Out of stock",
  SOLD_OUT = "Sold out",
}

export enum ProductVisibility {
  VISIBLE = "Visible",
  HIDDEN = "Hidden",
}

export enum VariantValue {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  BLACK = "Black",
  WHITE = "White",
}

export enum VariantType {
  SIZE = "Size",
  COLOUR = "Colour",
}

export enum ProductRegion {
  SLOVENIA = "Slovenia",
  EU = "EU",
  NON_EU_EUROPE = "Non-EU Europe",
  UK = "UK",
  NORTH_AMERICA = "North America",
  AUSTRALIA = "Australia",
  JAPAN = "Japan",
}

export type ProductImage = {
  src: string;
  alt?: string;
};

export interface Product {
  id: string;
  uid: string;
  name: string;
  description: string;
  images: ProductImage[];
  price: number;
  currency: string;
  type: ProductType;
  status: ProductStatus;
  visibility: ProductVisibility;
  category: ProductCategory;
  weight: number;
  variants: Array<{
    variant_value: string;
    variant_type: string;
  }>;
  regionalEligibility: Array<{
    region: ProductRegion;
  }>;
  relatedProducts: Array<{
    id: string;
    uid: string;
    title: string;
    callToAction: string;
  }>;
  specialNotice: string;
  meta: {
    title: string | null;
    description: string | null;
    image: string | null;
  };
}
