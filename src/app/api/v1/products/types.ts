export enum ProductType {
  PHYSICAL = "physical",
  DIGITAL = "digital",
}

export enum ProductCategory {
  MERCH = "merch",
  MUSIC = "music",
  ALBUM = "album",
  ITEM = "item",
  DONATION = "donation",
  TICKET = "ticket",
  LICENSE = "license",
  OTHER = "other",
  CURRENCY = "currency",
}

export enum ProductStatus {
  OUT_OF_STOCK = "out-of-stock",
  AVAILABLE = "available",
  SOLD_OUT = "sold-out",
  PREORDER = "preorder",
  COMING_SOON = "coming-soon",
}

export interface StripeProduct {
  id: string;
  name: string;
  description: string | null;
  images: string[];
  priceId: string;
  price: number;
  currency: string;
  status: ProductStatus;
  category: ProductCategory;
  type: ProductType;
  metaData: {
    weight?: number;
    variants?: string[];
    isFeatured?: boolean;
  };
  limits?: {
    countries?: string[];
    qty?: number;
  };
}
