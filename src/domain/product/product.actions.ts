import {
  Product,
  ProductCompositionType,
  ProductStatus,
} from "@/types/product";
import { getApiPath } from "@/lib/api";
import { isProductVisible } from "@/domain/product/product.rules";

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

export async function getProducts(): Promise<Product[]> {
  try {
    // Use absolute URL for server-side fetching
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    console.log(`${baseUrl}${getApiPath("products/list")}`);
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
