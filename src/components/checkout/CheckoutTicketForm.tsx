import Input from "@/components/form/Input";
import { CartItem } from "@/types/cart";
import { CheckoutFormData } from "@/types/checkout";

interface CheckoutFormProps {
  index: number;
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
  item: CartItem;
}

export default function CheckoutTicketForm({
  index,
  item,
  formData,
  errorMessages,
  onFormChange,
}: CheckoutFormProps) {
  const name = `ticket-${item.id}-${index + 1}-name`;

  return (
    <div className="text-sm text-red-600">
      <Input
        name={name}
        label={`Ticket holder ${index + 1} name`}
        type="text"
        value={
          formData.complementaryTicketData
            ? (formData.complementaryTicketData[name] as string)
            : ""
        }
        onChange={onFormChange}
        errorMessage={
          errorMessages.complementaryTicketData &&
          typeof errorMessages.complementaryTicketData === "object"
            ? errorMessages.complementaryTicketData[name]
            : undefined
        }
        required={true}
      />
    </div>
  );
}
