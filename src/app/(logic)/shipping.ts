import { Country } from "@/app/(types)/country";
import countryConfig from "@/app/(config)/countries.config";

export function getShippingCost(country: Country, weightInGrams: number) {
  if (weightInGrams <= 0) {
    throw new Error("Weight must be greater than 0");
  }

  const countryData = countryConfig[country];

  if (!countryData) {
    throw new Error(`Invalid country code: ${country}`);
  }

  // Find the appropriate weight range
  for (const range of countryData.weightRanges) {
    if (weightInGrams <= range.maxGrams) {
      return range.cost;
    }
  }

  return countryData.weightRanges[countryData.weightRanges.length - 1].cost;
}
