import { CartItem } from "@/types/cart";
import {
  isProductExcludedFromRefunds,
  isProductShippable,
} from "@/domain/product.service";

export class CheckoutService {
  static calculateTotals(subTotal: number, shippingCost: number) {
    return {
      subTotal,
      shippingCost,
      total: subTotal + shippingCost,
    };
  }
}

export const includesShippableProduct = (cartItems: CartItem[]) => {
  return cartItems.some(item => isProductShippable(item));
};

export const includesNonRefundableProduct = (cartItems: CartItem[]) => {
  return cartItems.some(item => isProductExcludedFromRefunds(item));
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
