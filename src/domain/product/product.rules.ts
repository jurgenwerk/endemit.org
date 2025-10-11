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
export const isProductFeatured = (product: Product) => {
  return product.isFeatured;
};
