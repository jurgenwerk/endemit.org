import { CartItem } from "@/types/cart";

export const calculateTotals = (subTotal: number, shippingCost: number) => {
  return {
    subTotal,
    shippingCost,
    total: subTotal + shippingCost,
  };
};

export const roundUpTotal = (amount: number) => {
  const rounded = Math.ceil(amount / 10) * 10;
  const fivePercent = Math.ceil((amount * 1.05) / 10) * 10;

  return Math.max(rounded, fivePercent);
};

export const getOrderWeight = (cartItems: CartItem[]) => {
  const paddingForPackaging = 100; // 100g padding for packaging
  const minimumShipmentWeight = 200; // Minimum weight for shipping is 200g
  const paddingPercentPerItem = 0.05; // 5% padding per item

  const itemsWeight = Math.max(
    cartItems.reduce(
      (total, item) =>
        total + item.weight * item.quantity * (1 + paddingPercentPerItem),
      0
    ),
    minimumShipmentWeight
  );

  return itemsWeight + paddingForPackaging;
};
