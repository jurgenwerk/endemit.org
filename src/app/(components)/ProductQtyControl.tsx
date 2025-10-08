import { useCart, useCartActions } from "@/app/(stores)/CartStore";
import { CartItem } from "@/app/(types)/cart";
import { Product } from "@/app/(types)/product";

interface Props {
  item?: CartItem;
  product?: Product;
}

export default function ProductQtyControl({ item, product }: Props) {
  const { decrementItem, incrementItem } = useCart();
  const { addItem } = useCartActions();

  if (!item && !product) {
    return;
  }

  const handleDecrement = () => {
    if (item) {
      decrementItem(item.id);
    }
  };

  const handleIncrement = () => {
    if (item) {
      incrementItem(item.id);
    } else if (product) {
      addItem(product);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleDecrement()}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className="w-8 text-center font-medium">
        {item ? item.quantity : 0}
      </span>

      <button
        onClick={() => handleIncrement()}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
