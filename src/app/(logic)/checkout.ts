import { CartItem } from "@/app/(types)/cart";
import { isProductShippable } from "@/app/(logic)/product";

export const isShippingAddressRequired = (cartItems: CartItem[]) => {
  return cartItems.some(item => isProductShippable(item.type));
};
