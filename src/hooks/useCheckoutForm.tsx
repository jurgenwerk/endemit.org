"use client";

import { useEffect, useState } from "react";
import { CheckoutValidationService } from "@/domain/validation/validation.service";
import { CheckoutFormData } from "@/types/checkout";
import { CartItem } from "@/types/cart";
import { getComplementaryTicketModel } from "@/lib/util";

export function useCheckoutForm(
  requiresShippingAddress: boolean,
  items: CartItem[]
) {
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    emailRepeat: "",
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "SI",
    phone: "",
    termsAndConditions: false,
    complementaryTicketData: !items
      ? null
      : getComplementaryTicketModel(items, ""),
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    emailRepeat: false,
    name: false,
    address: false,
    city: false,
    postalCode: false,
    country: false,
    phone: false,
    termsAndConditions: false,
    complementaryTicketData: !items
      ? null
      : getComplementaryTicketModel(items, false),
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const errors = CheckoutValidationService.validateForm({
      formData,
      requiresShippingAddress,
      items,
    });
    setFieldErrors(errors);
    setIsFormValid(CheckoutValidationService.isFormValid(errors));
  }, [formData, requiresShippingAddress, items]);

  const handleFormValueChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTicketFormValueChange = (
    name: string,
    value: string | boolean
  ) => {
    setFormData(prev => ({
      ...prev,
      complementaryTicketData: {
        ...prev.complementaryTicketData,
        [name]: value,
      },
    }));
  };

  const errorMessages = CheckoutValidationService.getErrorMessages(fieldErrors);

  return {
    formData,
    fieldErrors,
    errorMessages,
    isFormValid,
    handleFormValueChange,
    handleTicketFormValueChange,
  };
}
