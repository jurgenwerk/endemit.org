import {
  Product,
  ProductCategory,
  ProductRegion,
  ProductStatus,
  ProductType,
  ProductVisibility,
} from "@/app/(types)/product";
import { Country, Region } from "@/app/(types)/country";
import { getRegionFromCountry } from "@/app/(lib)/util";

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

export const isProductSellableByRegion = (
  region: Region,
  eligibleRegions: { region: ProductRegion }[]
) => {
  if (eligibleRegions.length === 0) {
    return true; // If no regional eligibility is set, assume it's sellable everywhere
  }
  return (
    eligibleRegions.filter(listItem => listItem.region === region).length > 0
  );
};

export const isProductSellableByStatus = (status: ProductStatus) => {
  return (
    status === ProductStatus.AVAILABLE || status === ProductStatus.PREORDER
  );
};

export const isProductSellable = (country: Country, product: Product) => {
  const region = getRegionFromCountry(country);
  if (!region) {
    return false;
  }

  const isSellableByStatus = isProductSellableByStatus(product.status);
  const isSellableByRegion = isProductSellableByRegion(
    region,
    product.regionalEligibility
  );

  return isSellableByStatus && isSellableByRegion;
};

export const isProductShippable = (type: ProductType) => {
  return type === ProductType.PHYSICAL;
};

export const isProductDigital = (type: ProductType) => {
  return type === ProductType.DIGITAL;
};

export const isProductVisible = (visibility: ProductVisibility) => {
  return visibility === ProductVisibility.VISIBLE;
};

export const isProductTicket = (category: ProductCategory) => {
  return category === ProductCategory.TICKET;
};

export const isProductExcludedFromReturns = (category: ProductCategory) => {
  return isProductTicket(category);
};

export const getProductLimit = (limit: number) => {
  return limit > 0 ? limit : 99;
};
