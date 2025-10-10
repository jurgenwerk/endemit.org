import { Country, Region } from "@/types/country";

interface ICountry {
  code: Country;
  region: Region;
  name: string;
  flag: string;
  callingCode: string;
  weightRanges: WeightRange[];
  orderPriority?: number; // Higher number means higher priority
}

interface WeightRange {
  maxGrams: number; // Max weight for this range (use Infinity for last range)
  cost: number;
}

const countryConfig: Record<Country, ICountry> = {
  // Austria
  AT: {
    code: "AT",
    name: "Austria",
    flag: "🇦🇹",
    callingCode: "+43",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 6.99 },
      { maxGrams: 500, cost: 9.99 },
      { maxGrams: 1000, cost: 13.99 },
      { maxGrams: 2000, cost: 18.99 },
      { maxGrams: 5000, cost: 27.99 },
      { maxGrams: Infinity, cost: 42.99 },
    ],
  },
  // Belgium
  BE: {
    code: "BE",
    name: "Belgium",
    flag: "🇧🇪",
    callingCode: "+32",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 6.99 },
      { maxGrams: 500, cost: 9.99 },
      { maxGrams: 1000, cost: 13.99 },
      { maxGrams: 2000, cost: 18.99 },
      { maxGrams: 5000, cost: 27.99 },
      { maxGrams: Infinity, cost: 42.99 },
    ],
  },
  // Bulgaria
  BG: {
    code: "BG",
    name: "Bulgaria",
    flag: "🇧🇬",
    callingCode: "+359",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.99 },
      { maxGrams: 500, cost: 11.99 },
      { maxGrams: 1000, cost: 15.99 },
      { maxGrams: 2000, cost: 21.99 },
      { maxGrams: 5000, cost: 31.99 },
      { maxGrams: Infinity, cost: 47.99 },
    ],
  },
  // Croatia
  HR: {
    code: "HR",
    name: "Croatia",
    flag: "🇭🇷",
    callingCode: "+385",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.99 },
      { maxGrams: 500, cost: 11.99 },
      { maxGrams: 1000, cost: 15.99 },
      { maxGrams: 2000, cost: 21.99 },
      { maxGrams: 5000, cost: 31.99 },
      { maxGrams: Infinity, cost: 47.99 },
    ],
  },
  // Cyprus
  CY: {
    code: "CY",
    name: "Cyprus",
    flag: "🇨🇾",
    callingCode: "+357",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 9.99 },
      { maxGrams: 500, cost: 14.99 },
      { maxGrams: 1000, cost: 19.99 },
      { maxGrams: 2000, cost: 26.99 },
      { maxGrams: 5000, cost: 38.99 },
      { maxGrams: Infinity, cost: 56.99 },
    ],
  },
  // Czech Republic
  CZ: {
    code: "CZ",
    name: "Czech Republic",
    flag: "🇨🇿",
    callingCode: "+420",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.49 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 20.99 },
      { maxGrams: 5000, cost: 30.99 },
      { maxGrams: Infinity, cost: 46.99 },
    ],
  },
  // Denmark
  DK: {
    code: "DK",
    name: "Denmark",
    flag: "🇩🇰",
    callingCode: "+45",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.99 },
      { maxGrams: 500, cost: 11.99 },
      { maxGrams: 1000, cost: 15.99 },
      { maxGrams: 2000, cost: 21.99 },
      { maxGrams: 5000, cost: 31.99 },
      { maxGrams: Infinity, cost: 47.99 },
    ],
  },
  // Estonia
  EE: {
    code: "EE",
    name: "Estonia",
    flag: "🇪🇪",
    callingCode: "+372",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 8.49 },
      { maxGrams: 500, cost: 12.99 },
      { maxGrams: 1000, cost: 16.99 },
      { maxGrams: 2000, cost: 23.99 },
      { maxGrams: 5000, cost: 34.99 },
      { maxGrams: Infinity, cost: 51.99 },
    ],
  },
  // Finland
  FI: {
    code: "FI",
    name: "Finland",
    flag: "🇫🇮",
    callingCode: "+358",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 8.99 },
      { maxGrams: 500, cost: 13.99 },
      { maxGrams: 1000, cost: 17.99 },
      { maxGrams: 2000, cost: 24.99 },
      { maxGrams: 5000, cost: 36.99 },
      { maxGrams: Infinity, cost: 54.99 },
    ],
  },
  // France
  FR: {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    callingCode: "+33",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 6.49 },
      { maxGrams: 500, cost: 9.49 },
      { maxGrams: 1000, cost: 12.99 },
      { maxGrams: 2000, cost: 17.99 },
      { maxGrams: 5000, cost: 26.99 },
      { maxGrams: Infinity, cost: 40.99 },
    ],
  },
  // Germany
  DE: {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    callingCode: "+49",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 6.49 },
      { maxGrams: 500, cost: 9.49 },
      { maxGrams: 1000, cost: 12.99 },
      { maxGrams: 2000, cost: 17.99 },
      { maxGrams: 5000, cost: 26.99 },
      { maxGrams: Infinity, cost: 40.99 },
    ],
  },
  // Greece
  GR: {
    code: "GR",
    name: "Greece",
    flag: "🇬🇷",
    callingCode: "+30",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 8.49 },
      { maxGrams: 500, cost: 12.99 },
      { maxGrams: 1000, cost: 16.99 },
      { maxGrams: 2000, cost: 23.99 },
      { maxGrams: 5000, cost: 34.99 },
      { maxGrams: Infinity, cost: 51.99 },
    ],
  },
  // Hungary
  HU: {
    code: "HU",
    name: "Hungary",
    flag: "🇭🇺",
    callingCode: "+36",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.49 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 20.99 },
      { maxGrams: 5000, cost: 30.99 },
      { maxGrams: Infinity, cost: 46.99 },
    ],
  },
  // Ireland
  IE: {
    code: "IE",
    name: "Ireland",
    flag: "🇮🇪",
    callingCode: "+353",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.49 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 20.99 },
      { maxGrams: 5000, cost: 30.99 },
      { maxGrams: Infinity, cost: 46.99 },
    ],
  },
  // Italy
  IT: {
    code: "IT",
    name: "Italy",
    flag: "🇮🇹",
    callingCode: "+39",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.49 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 20.99 },
      { maxGrams: 5000, cost: 30.99 },
      { maxGrams: Infinity, cost: 46.99 },
    ],
  },
  // Latvia
  LV: {
    code: "LV",
    name: "Latvia",
    flag: "🇱🇻",
    callingCode: "+371",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 8.49 },
      { maxGrams: 500, cost: 12.99 },
      { maxGrams: 1000, cost: 16.99 },
      { maxGrams: 2000, cost: 23.99 },
      { maxGrams: 5000, cost: 34.99 },
      { maxGrams: Infinity, cost: 51.99 },
    ],
  },
  // Lithuania
  LT: {
    code: "LT",
    name: "Lithuania",
    flag: "🇱🇹",
    callingCode: "+370",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 8.49 },
      { maxGrams: 500, cost: 12.99 },
      { maxGrams: 1000, cost: 16.99 },
      { maxGrams: 2000, cost: 23.99 },
      { maxGrams: 5000, cost: 34.99 },
      { maxGrams: Infinity, cost: 51.99 },
    ],
  },
  // Luxembourg
  LU: {
    code: "LU",
    name: "Luxembourg",
    flag: "🇱🇺",
    callingCode: "+352",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 6.99 },
      { maxGrams: 500, cost: 9.99 },
      { maxGrams: 1000, cost: 13.99 },
      { maxGrams: 2000, cost: 18.99 },
      { maxGrams: 5000, cost: 27.99 },
      { maxGrams: Infinity, cost: 42.99 },
    ],
  },
  // Malta
  MT: {
    code: "MT",
    name: "Malta",
    flag: "🇲🇹",
    callingCode: "+356",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 9.99 },
      { maxGrams: 500, cost: 14.99 },
      { maxGrams: 1000, cost: 19.99 },
      { maxGrams: 2000, cost: 26.99 },
      { maxGrams: 5000, cost: 38.99 },
      { maxGrams: Infinity, cost: 56.99 },
    ],
  },
  // Netherlands
  NL: {
    code: "NL",
    name: "Netherlands",
    flag: "🇳🇱",
    callingCode: "+31",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 6.49 },
      { maxGrams: 500, cost: 9.49 },
      { maxGrams: 1000, cost: 12.99 },
      { maxGrams: 2000, cost: 17.99 },
      { maxGrams: 5000, cost: 26.99 },
      { maxGrams: Infinity, cost: 40.99 },
    ],
  },
  // Poland
  PL: {
    code: "PL",
    name: "Poland",
    flag: "🇵🇱",
    callingCode: "+48",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.49 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 20.99 },
      { maxGrams: 5000, cost: 30.99 },
      { maxGrams: Infinity, cost: 46.99 },
    ],
  },
  // Portugal
  PT: {
    code: "PT",
    name: "Portugal",
    flag: "🇵🇹",
    callingCode: "+351",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 8.49 },
      { maxGrams: 500, cost: 12.99 },
      { maxGrams: 1000, cost: 16.99 },
      { maxGrams: 2000, cost: 23.99 },
      { maxGrams: 5000, cost: 34.99 },
      { maxGrams: Infinity, cost: 51.99 },
    ],
  },
  // Romania
  RO: {
    code: "RO",
    name: "Romania",
    flag: "🇷🇴",
    callingCode: "+40",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.99 },
      { maxGrams: 500, cost: 11.99 },
      { maxGrams: 1000, cost: 15.99 },
      { maxGrams: 2000, cost: 21.99 },
      { maxGrams: 5000, cost: 31.99 },
      { maxGrams: Infinity, cost: 47.99 },
    ],
  },
  // Slovakia
  SK: {
    code: "SK",
    name: "Slovakia",
    flag: "🇸🇰",
    callingCode: "+421",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.49 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 20.99 },
      { maxGrams: 5000, cost: 30.99 },
      { maxGrams: Infinity, cost: 46.99 },
    ],
  },
  // Slovenia
  SI: {
    code: "SI",
    name: "Slovenia",
    flag: "🇸🇮",
    callingCode: "+386",
    region: "Slovenia",
    orderPriority: 100,
    weightRanges: [
      { maxGrams: 100, cost: 7.49 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 20.99 },
      { maxGrams: 5000, cost: 30.99 },
      { maxGrams: Infinity, cost: 46.99 },
    ],
  },
  // Spain
  ES: {
    code: "ES",
    name: "Spain",
    flag: "🇪🇸",
    callingCode: "+34",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 7.49 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 20.99 },
      { maxGrams: 5000, cost: 30.99 },
      { maxGrams: Infinity, cost: 46.99 },
    ],
  },
  // Sweden
  SE: {
    code: "SE",
    name: "Sweden",
    flag: "🇸🇪",
    callingCode: "+46",
    region: "EU",
    weightRanges: [
      { maxGrams: 100, cost: 8.49 },
      { maxGrams: 500, cost: 12.99 },
      { maxGrams: 1000, cost: 16.99 },
      { maxGrams: 2000, cost: 23.99 },
      { maxGrams: 5000, cost: 34.99 },
      { maxGrams: Infinity, cost: 51.99 },
    ],
  },
  // United Kingdom
  UK: {
    code: "UK",
    name: "United Kingdom",
    flag: "🇬🇧",
    callingCode: "+44",
    region: "UK",
    weightRanges: [
      { maxGrams: 100, cost: 6.99 },
      { maxGrams: 500, cost: 10.99 },
      { maxGrams: 1000, cost: 14.99 },
      { maxGrams: 2000, cost: 19.99 },
      { maxGrams: 5000, cost: 29.99 },
      { maxGrams: Infinity, cost: 44.99 },
    ],
  },
  // Serbia
  RS: {
    code: "RS",
    name: "Serbia",
    flag: "🇷🇸",
    callingCode: "+381",
    region: "Non-EU Europe",
    weightRanges: [
      { maxGrams: 100, cost: 8.99 },
      { maxGrams: 500, cost: 13.99 },
      { maxGrams: 1000, cost: 17.99 },
      { maxGrams: 2000, cost: 24.99 },
      { maxGrams: 5000, cost: 36.99 },
      { maxGrams: Infinity, cost: 54.99 },
    ],
  },
  // Bosnia and Herzegovina
  BA: {
    code: "BA",
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    callingCode: "+387",
    region: "Non-EU Europe",
    weightRanges: [
      { maxGrams: 100, cost: 9.49 },
      { maxGrams: 500, cost: 14.99 },
      { maxGrams: 1000, cost: 19.99 },
      { maxGrams: 2000, cost: 26.99 },
      { maxGrams: 5000, cost: 38.99 },
      { maxGrams: Infinity, cost: 57.99 },
    ],
  },
  // Montenegro
  ME: {
    code: "ME",
    name: "Montenegro",
    flag: "🇲🇪",
    callingCode: "+382",
    region: "Non-EU Europe",
    weightRanges: [
      { maxGrams: 100, cost: 9.49 },
      { maxGrams: 500, cost: 14.99 },
      { maxGrams: 1000, cost: 19.99 },
      { maxGrams: 2000, cost: 26.99 },
      { maxGrams: 5000, cost: 38.99 },
      { maxGrams: Infinity, cost: 57.99 },
    ],
  },
  // North Macedonia
  MK: {
    code: "MK",
    name: "North Macedonia",
    flag: "🇲🇰",
    callingCode: "+389",
    region: "Non-EU Europe",
    weightRanges: [
      { maxGrams: 100, cost: 9.49 },
      { maxGrams: 500, cost: 14.99 },
      { maxGrams: 1000, cost: 19.99 },
      { maxGrams: 2000, cost: 26.99 },
      { maxGrams: 5000, cost: 38.99 },
      { maxGrams: Infinity, cost: 57.99 },
    ],
  },
  // United States
  US: {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    callingCode: "+1",
    region: "North America",
    weightRanges: [
      { maxGrams: 100, cost: 3.99 },
      { maxGrams: 500, cost: 5.99 },
      { maxGrams: 1000, cost: 8.99 },
      { maxGrams: 2000, cost: 12.99 },
      { maxGrams: 5000, cost: 19.99 },
      { maxGrams: Infinity, cost: 29.99 },
    ],
  },
  // Canada
  CA: {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    callingCode: "+1",
    region: "North America",
    weightRanges: [
      { maxGrams: 100, cost: 5.99 },
      { maxGrams: 500, cost: 8.99 },
      { maxGrams: 1000, cost: 12.99 },
      { maxGrams: 2000, cost: 16.99 },
      { maxGrams: 5000, cost: 24.99 },
      { maxGrams: Infinity, cost: 35.99 },
    ],
  },
  // Australia
  AU: {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    callingCode: "+61",
    region: "Australia",
    weightRanges: [
      { maxGrams: 100, cost: 8.99 },
      { maxGrams: 500, cost: 14.99 },
      { maxGrams: 1000, cost: 19.99 },
      { maxGrams: 2000, cost: 27.99 },
      { maxGrams: 5000, cost: 39.99 },
      { maxGrams: Infinity, cost: 59.99 },
    ],
  },
  // Japan
  JP: {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    callingCode: "+81",
    region: "Australia",
    weightRanges: [
      { maxGrams: 100, cost: 7.99 },
      { maxGrams: 500, cost: 13.99 },
      { maxGrams: 1000, cost: 18.99 },
      { maxGrams: 2000, cost: 25.99 },
      { maxGrams: 5000, cost: 37.99 },
      { maxGrams: Infinity, cost: 54.99 },
    ],
  },
};

export default countryConfig;
