import { Country } from "@/types/country";
import countryConfig from "@/config/countries.config";

class ShippingService {
  calculateShippingCost(country: Country, weightInGrams: number) {
    if (weightInGrams <= 0) {
      throw new Error("Weight must be greater than 0");
    }

    const countryData = countryConfig[country];

    if (!countryData) {
      throw new Error(`Country ${country} not found in configuration`);
    }

    const weightRange = countryData.weightRanges.find(
      range => weightInGrams <= range.maxGrams
    );

    if (!weightRange) {
      throw new Error(
        `No shipping rate found for weight ${weightInGrams}g to ${country}`
      );
    }

    return {
      cost: weightRange.cost,
      country: countryConfig[country],
      weightClass: weightRange.maxGrams,
    };
  }

  getAvailableCountries(): Country[] {
    return Object.keys(countryConfig) as Country[];
  }

  getCountryDetails(country: Country) {
    return countryConfig[country];
  }
}

export const shippingService = new ShippingService();
export default shippingService;
