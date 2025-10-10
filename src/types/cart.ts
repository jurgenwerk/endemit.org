import { Product } from "@/types/product";
import { CheckoutFormData } from "@/types/checkout";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  isLoading: boolean;

  // Actions
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  incrementItem: (productId: string) => void;
  decrementItem: (productId: string) => void;
  clearItem: (productId: string) => void;
  clearCart: () => void;

  // Computed values
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getItemById: (productId: string) => CartItem | undefined;

  // Bulk operations
  populateProducts: (products: Product[]) => void;

  // Checkout process
  checkout: (checkoutFormData: CheckoutFormData) => Promise<{
    sessionId: string;
    url: string;
  }>;
}
