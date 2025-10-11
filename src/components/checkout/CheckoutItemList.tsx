import { formatPrice } from "@/lib/formatting";
import CartQtyControl from "@/components/checkout/CartQtyControl";
import { CartItem } from "@/types/cart";
import { isProductTicket } from "@/domain/product/product.rules";
import CheckoutTicketForm from "@/components/checkout/CheckoutTicketForm";
import { CheckoutFormData } from "@/types/checkout";

interface Props {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  formData: CheckoutFormData;
  errorMessages: Record<
    string,
    | string
    | {
        [p: string]: string;
      }
    | undefined
  >;
  onFormChange: (name: string, value: string | boolean) => void;
}

export default function CheckoutItemList({
  items,
  onRemoveItem,
  formData,
  errorMessages,
  onFormChange,
}: Props) {
  return (
    <div className="space-y-3">
      {items.map(item => {
        const isTicket = isProductTicket(item);

        return (
          <div
            key={item.id}
            className="p-3 bg-gray-50 rounded-md overflow-hidden"
          >
            <div className="flex items-center justify-between">
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
            {isTicket && (
              <div>
                As a backup for lost tickets or inability to scan at the event,
                please provide the name of each ticket holder:
                {new Array(item.quantity).fill(0).map((_, index) => (
                  <CheckoutTicketForm
                    key={`${item.id}-${index}`}
                    index={index}
                    item={item}
                    formData={formData}
                    errorMessages={errorMessages}
                    onFormChange={onFormChange}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
