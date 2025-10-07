import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, CartStore } from "@/app/(types)/cart";
import { Product } from "@/app/(types)/product";

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,

      addItem: (product: Product, quantity = 1) => {
        set(state => {
          const existingItem = state.items.find(item => item.id === product.id);

          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity }],
          };
        });
      },

      removeItem: (productId: string) => {
        set(state => ({
          items: state.items.filter(item => item.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set(state => ({
          items: state.items.map(item =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      incrementItem: (productId: string) => {
        const item = get().getItemById(productId);
        if (item) {
          get().updateQuantity(productId, item.quantity + 1);
        }
      },

      decrementItem: (productId: string) => {
        const item = get().getItemById(productId);
        if (item) {
          get().updateQuantity(productId, item.quantity - 1);
        }
      },

      clearItem: (productId: string) => {
        get().removeItem(productId);
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getItemById: (productId: string) => {
        return get().items.find(item => item.id === productId);
      },

      populateProducts: (products: Product[]) => {
        set(state => {
          const newItems: CartItem[] = products.map(product => {
            const existingItem = state.items.find(
              item => item.id === product.id
            );
            return existingItem || { ...product, quantity: 1 };
          });

          return { items: newItems };
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ items: state.items }),
    }
  )
);

// Custom hooks for easier usage
export const useCart = () => {
  const store = useCartStore();
  return {
    items: store.items,
    isLoading: store.isLoading,
    addItem: store.addItem,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    incrementItem: store.incrementItem,
    decrementItem: store.decrementItem,
    clearItem: store.clearItem,
    clearCart: store.clearCart,
    totalItems: store.getTotalItems(),
    totalPrice: store.getTotalPrice(),
    getItemById: store.getItemById,
    populateProducts: store.populateProducts,
  };
};

// Selector hooks for performance optimization
export const useCartItems = () => useCartStore(state => state.items);
export const useCartTotal = () => useCartStore(state => state.getTotalPrice());
export const useCartItemCount = () =>
  useCartStore(state => state.getTotalItems());

// Actions selector - use callback to avoid re-renders
export const useCartActions = () => {
  const addItem = useCartStore(state => state.addItem);
  const removeItem = useCartStore(state => state.removeItem);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const incrementItem = useCartStore(state => state.incrementItem);
  const decrementItem = useCartStore(state => state.decrementItem);
  const clearItem = useCartStore(state => state.clearItem);
  const clearCart = useCartStore(state => state.clearCart);
  const populateProducts = useCartStore(state => state.populateProducts);

  return {
    addItem,
    removeItem,
    updateQuantity,
    incrementItem,
    decrementItem,
    clearItem,
    clearCart,
    populateProducts,
  };
};
