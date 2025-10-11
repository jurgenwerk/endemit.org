import Input from "@/components/form/Input";
import CountrySelect from "@/components/form/CountrySelect";
import CheckboxInput from "@/components/form/CheckboxInput";
import Link from "next/link";
import countriesConfig from "@/config/countries.config";
import { CartItem } from "@/types/cart";
import { CheckoutFormData } from "@/types/checkout";

interface CheckoutFormProps {
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
  requiresShippingAddress: boolean;
  includesNonRefundable: boolean;
  items: CartItem[];
}

export default function CheckoutForm({
  formData,
  errorMessages,
  onFormChange,
  requiresShippingAddress,
  includesNonRefundable,
}: CheckoutFormProps) {
  const destinationCountry = countriesConfig[formData.country];

  return (
    <div className="space-y-3">
      <div>
        <div>Where should we send your order?</div>
        <div className="bg-white">
          <Input
            name="email"
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={onFormChange}
            errorMessage={errorMessages.email as string}
            required={true}
          />
          <Input
            name="emailRepeat"
            label="Repeat e-mail"
            type="email"
            value={formData.emailRepeat}
            onChange={onFormChange}
            errorMessage={errorMessages.emailRepeat as string}
            required={true}
          />
        </div>
      </div>

      {requiresShippingAddress && (
        <div>
          <div>Where should we send your order?</div>
          <div className="bg-white">
            <Input
              name="name"
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={onFormChange}
              errorMessage={errorMessages.name as string}
              required={true}
            />
            <Input
              name="address"
              label="Address"
              type="text"
              value={formData.address}
              onChange={onFormChange}
              errorMessage={errorMessages.address as string}
              required={true}
            />
            <Input
              name="city"
              label="City"
              type="text"
              value={formData.city}
              onChange={onFormChange}
              errorMessage={errorMessages.city as string}
              required={true}
            />
            <Input
              name="postalCode"
              label="Postal Code"
              type="text"
              value={formData.postalCode}
              onChange={onFormChange}
              errorMessage={errorMessages.postalCode as string}
              required={true}
            />
            <Input
              name="phone"
              label="Phone"
              type="text"
              value={formData.phone}
              onChange={onFormChange}
              errorMessage={errorMessages.phone as string}
              required={true}
              prefix={destinationCountry.callingCode as string}
            />
            <CountrySelect
              name="country"
              onChange={onFormChange}
              value={formData.country}
              errorMessage={errorMessages.country as string}
              required={true}
            />
            Is your country not listed? Please{" "}
            <Link href="mailto:endemit@endemit.org">contact us</Link>.
          </div>
        </div>
      )}

      <div>
        <CheckboxInput
          value={formData.termsAndConditions}
          errorMessage={errorMessages.termsAndConditions as string}
          name="termsAndConditions"
          onChange={onFormChange}
          required={true}
        />
        {includesNonRefundable &&
          "I understand that my order contains non-refundable digital items or tickets that happen."}
      </div>
    </div>
  );
}
