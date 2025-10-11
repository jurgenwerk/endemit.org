import { CartItem } from "@/types/cart";

import {
  isProductDonation,
  isProductExcludedFromRefunds,
  isProductShippable,
} from "@/domain/product/product.rules";

export const includesShippableProduct = (cartItems: CartItem[]) => {
  return cartItems.some(item => isProductShippable(item));
};
export const includesNonRefundableProduct = (cartItems: CartItem[]) => {
  return cartItems.some(item => isProductExcludedFromRefunds(item));
};
export const includesDonationProduct = (cartItems: CartItem[]) => {
  return cartItems.some(item => isProductDonation(item));
};
