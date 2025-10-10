import { useCart, useCartActions } from "@/stores/CartStore";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import IncrementalInput from "@/components/form/IncrementalInput";

interface Props {
  item?: CartItem;
  product?: Product;
}

export default function CartQtyControl({ item, product }: Props) {
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
    <IncrementalInput
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
      quantity={item ? item.quantity : 0}
    />
  );
}
