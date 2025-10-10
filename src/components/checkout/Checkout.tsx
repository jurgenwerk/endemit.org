"use client";

import { useCart } from "@/stores/CartStore";
import { useState, useEffect } from "react";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutForm from "./CheckoutForm";
import CheckoutItemList from "./CheckoutItemList";
import { useShippingCost } from "@/hooks/useShippingCosts";
import {
  CheckoutService,
  getOrderWeight,
  includesNonRefundableProduct,
  includesShippableProduct,
} from "@/domain/checkout.service";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";

export default function Checkout() {
  const {
    items,
    removeItem,
    clearCart,
    totalPrice,
    totalItems,
    checkout,
    isLoading,
  } = useCart();

  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requiresShippingAddress = includesShippableProduct(items);
  const includesNonRefundable = includesNonRefundableProduct(items);
  const orderWeight = getOrderWeight(items);

  const { formData, errorMessages, isFormValid, handleFormValueChange } =
    useCheckoutForm(requiresShippingAddress);

  const {
    shippingCost,
    isLoading: loadingShippingCost,
    error: shippingError,
  } = useShippingCost(formData.country, orderWeight, requiresShippingAddress);

  const { subTotal, total } = CheckoutService.calculateTotals(
    totalPrice,
    shippingCost
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (shippingError) {
      setError(shippingError);
    }
  }, [shippingError]);

  const handleCheckout = async () => {
    setError(null);
    try {
      await checkout(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
    }
  };

  if (!isClient) {
    return (
      <div className="border border-gray-300 p-4 m-4 rounded-lg bg-white shadow-sm w-full text-black">
        <CheckoutSummary
          subTotal={0}
          shippingCost={0}
          total={0}
          orderWeight={0}
          country="SI"
          loadingShippingCost={false}
          totalItems={0}
        />
        <p className="text-gray-500 italic">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 p-4 m-4 rounded-lg bg-white shadow-sm w-full text-black">
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
      )}

      <CheckoutSummary
        subTotal={subTotal}
        shippingCost={shippingCost}
        total={total}
        orderWeight={orderWeight}
        country={formData.country}
        loadingShippingCost={loadingShippingCost}
        totalItems={totalItems}
      />

      {totalItems === 0 ? (
        <p className="text-gray-500 italic">Your cart is empty</p>
      ) : (
        <>
          <CheckoutForm
            formData={formData}
            errorMessages={errorMessages}
            onFormChange={handleFormValueChange}
            requiresShippingAddress={requiresShippingAddress}
            includesNonRefundable={includesNonRefundable}
            items={items}
          />

          <CheckoutItemList items={items} onRemoveItem={removeItem} />

          <div className="mt-6 space-y-2">
            {isFormValid && (
              <button
                onClick={!isLoading ? handleCheckout : undefined}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                {isLoading ? "Processing..." : "Pay securely with Stripe"}
              </button>
            )}

            <button
              onClick={clearCart}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
