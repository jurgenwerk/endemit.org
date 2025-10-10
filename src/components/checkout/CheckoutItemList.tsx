import { formatPrice } from "@/lib/formatting";
import CartQtyControl from "@/components/checkout/CartQtyControl";
import { CartItem } from "@/types/cart";

interface Props {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

export default function CheckoutItemList({ items, onRemoveItem }: Props) {
  return (
    <div className="space-y-3">
      {items.map(item => (
        <div
          key={item.id}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
        >
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{item.name}</h4>
            <p className="text-sm text-gray-600">
              {formatPrice(item.price)} each
            </p>
          </div>

          <CartQtyControl item={item} />

          <div className="flex items-center space-x-3">
            <div className="text-right min-w-[4rem]">
              <p className="font-semibold">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>

            <button
              onClick={() => onRemoveItem(item.id)}
              className="ml-2 text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove item"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
