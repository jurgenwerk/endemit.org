import { formatNumber, formatPrice } from "@/lib/formatting";
import { Country } from "@/types/country";
import countriesConfig from "@/config/countries.config";
import Spinner from "@/components/Spinner";

interface Props {
  subTotal: number;
  shippingCost: number;
  total: number;
  orderWeight: number;
  country: Country;
  loadingShippingCost: boolean;
  totalItems: number;
}

export default function CartSummary({
  subTotal,
  shippingCost,
  total,
  orderWeight,
  country,
  loadingShippingCost,
  totalItems,
}: Props) {
  const destinationCountry = countriesConfig[country];

  return (
    <>
      <h3 className="text-lg font-semibold mb-3">Cart ({totalItems} items)</h3>
      <p className="text-xl font-bold mb-4 text-gray-800">
        Subtotal: {formatPrice(subTotal)}
      </p>
      {shippingCost > 0 && (
        <p className="text-xl font-bold mb-4 text-gray-800">
          Shipping:
          {loadingShippingCost && <Spinner />}
          {!loadingShippingCost && country && (
            <>
              {destinationCountry.flag} {destinationCountry.name}{" "}
              {formatPrice(shippingCost)} -{" "}
              {formatNumber(orderWeight / 1000, 3)}kg
            </>
          )}
        </p>
      )}
      <p className="text-xl font-bold mb-4 text-gray-800">
        Total: {formatPrice(total)}
      </p>
    </>
  );
}
