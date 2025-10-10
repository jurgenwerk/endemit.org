"use client";

import { useEffect, useState } from "react";
import { CheckoutValidationService } from "@/domain/validation.service";
import { CheckoutFormData } from "@/types/checkout";

const initialFormData: CheckoutFormData = {
  email: "",
  name: "",
  address: "",
  city: "",
  postalCode: "",
  country: "SI",
  phone: "",
  termsAndConditions: false,
};

export function useCheckoutForm(requiresShippingAddress: boolean) {
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    name: false,
    address: false,
    city: false,
    postalCode: false,
    country: false,
    phone: false,
    termsAndConditions: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const errors = CheckoutValidationService.validateForm(
      formData,
      requiresShippingAddress
    );
    setFieldErrors(errors);
    setIsFormValid(CheckoutValidationService.isFormValid(errors));
  }, [formData, requiresShippingAddress]);

  const handleFormValueChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const errorMessages = CheckoutValidationService.getErrorMessages(fieldErrors);

  return {
    formData,
    fieldErrors,
    errorMessages,
    isFormValid,
    handleFormValueChange,
  };
}
