export const formatPrice = (price: number, decimals: number = 0) => {
  return price.toLocaleString("sl-SI", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const formatNumber = (number: number, decimals: number = 0) => {
  return number.toLocaleString("sl-SI", {
    style: "decimal",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
export const formatDay = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });
};
