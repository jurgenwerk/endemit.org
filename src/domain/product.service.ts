import {
  Product,
  ProductCategory,
  ProductCompositionType,
  ProductStatus,
  ProductType,
  ProductVisibility,
} from "@/types/product";
import { Country, Region } from "@/types/country";
import { getRegionFromCountry } from "@/lib/util";
import { getApiPath } from "@/lib/api";

export const getStatusColor = (status: ProductStatus) => {
  switch (status) {
    case ProductStatus.AVAILABLE:
      return "bg-green-100 text-white";
    case ProductStatus.PREORDER:
      return "bg-orange-100 text-white";
    case ProductStatus.OUT_OF_STOCK:
      return "bg-red-100 text-white";
    case ProductStatus.COMING_SOON:
      return "bg-gray-200 text-gray-800";
    case ProductStatus.SOLD_OUT:
      return "gray";
    default:
      return "blue";
  }
};

export const filterVisibleProducts = (products: Product[]) => {
  return products.filter(product => isProductVisible(product));
};

export const isProductSellableByRegion = (product: Product, region: Region) => {
  if (product.regionalEligibility.length === 0) {
    return true; // If no regional eligibility is set, assume it's sellable everywhere
  }
  return (
    product.regionalEligibility.filter(
      productItem => productItem.region === region
    ).length > 0
  );
};

export const isProductSellableByStatus = (product: Product) => {
  return (
    product.status === ProductStatus.AVAILABLE ||
    product.status === ProductStatus.PREORDER
  );
};

export const isProductSellable = (country: Country, product: Product) => {
  const region = getRegionFromCountry(country);
  if (!region) {
    return false;
  }

  const isSellableByStatus = isProductSellableByStatus(product);
  const isSellableByRegion = isProductSellableByRegion(product, region);

  return isSellableByStatus && isSellableByRegion;
};

export const isProductShippable = (product: Product) => {
  return product.type === ProductType.PHYSICAL;
};

export const isProductDigital = (product: Product) => {
  return product.type === ProductType.DIGITAL;
};

export const isProductVisible = (product: Product) => {
  return product.visibility === ProductVisibility.VISIBLE;
};

export const isProductTicket = (product: Product) => {
  return product.category === ProductCategory.TICKETS;
};

export const isProductDonation = (product: Product) => {
  return product.category === ProductCategory.DONATIONS;
};

export const isProductConfigurable = (product: Product) => {
  return product.composition === ProductCompositionType.CONFIGURABLE;
};

export const isProductExcludedFromRefunds = (product: Product) => {
  return isProductTicket(product);
};

export const getProductId = (productId: string, variant?: string) => {
  return variant ? `${productId}:${variant}` : productId;
};

export const getProductName = (productName: string, variant?: string) => {
  return variant ? `${productName} - ${variant}` : productName;
};

export const canProductExistInCart = (
  productComposition: ProductCompositionType
) => {
  return (
    productComposition === ProductCompositionType.SINGLE ||
    productComposition === ProductCompositionType.VARIANT
  );
};

export const isProductFeatured = (product: Product) => {
  return product.isFeatured;
};

export async function getProducts(): Promise<Product[]> {
  try {
    // Use absolute URL for server-side fetching
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}${getApiPath("products/list")}`, {
      cache: "force-cache", // or 'force-cache' for static generation
      next: { revalidate: 60 * 60 * 24 }, // Revalidate every 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getVisibleProducts(): Promise<Product[]> {
  const products = await getProducts();
  return filterVisibleProducts(products);
}
