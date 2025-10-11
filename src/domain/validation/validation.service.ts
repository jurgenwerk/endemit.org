import { CheckoutFormData } from "@/types/checkout";
import { CartItem } from "@/types/cart";
import { getComplementaryTicketModel } from "@/lib/util";

export interface ValidationErrors {
  email: boolean;
  emailRepeat: boolean;
  name: boolean;
  address: boolean;
  city: boolean;
  postalCode: boolean;
  country: boolean;
  phone: boolean;
  termsAndConditions: boolean;
  complementaryTicketData: { [x: string]: string | boolean } | null;
}

export class CheckoutValidationService {
  static validateEmail(email: string): boolean {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static validateName(name: string): boolean {
    const parts = name.trim().split(/\s+/);
    return !(parts.length >= 2 && parts.every(part => part.length >= 2));
  }

  static validateAddress(address: string): boolean {
    return address.trim().length < 5;
  }

  static validateCity(city: string): boolean {
    return city.trim().length < 2;
  }

  static validatePostalCode(postalCode: string): boolean {
    return postalCode.trim().length < 3;
  }

  static validateCountry(country: string): boolean {
    return country.trim().length === 2;
  }

  static validatePhone(phone: string): boolean {
    const cleaned = phone.trim();
    return cleaned.length >= 5 && /^\d+$/.test(cleaned);
  }

  static validateTermsAndConditions(accepted: boolean): boolean {
    return !accepted;
  }

  static validateForm({
    formData,
    items,
    requiresShippingAddress,
  }: {
    formData: CheckoutFormData;
    requiresShippingAddress: boolean;
    items: CartItem[];
  }): ValidationErrors {
    const errors: ValidationErrors = {
      email: this.validateEmail(formData.email),
      emailRepeat: formData.email !== formData.emailRepeat,
      name: false,
      address: false,
      city: false,
      postalCode: false,
      country: false,
      phone: false,
      termsAndConditions: this.validateTermsAndConditions(
        formData.termsAndConditions
      ),
      complementaryTicketData: !items
        ? null
        : getComplementaryTicketModel(items, false),
    };

    if (requiresShippingAddress) {
      errors.name = this.validateName(formData.name);
      errors.address = this.validateAddress(formData.address);
      errors.city = this.validateCity(formData.city);
      errors.postalCode = this.validatePostalCode(formData.postalCode);
      errors.country = this.validateCountry(formData.city);
      errors.phone = this.validatePhone(formData.phone);
    }

    if (errors.complementaryTicketData) {
      for (const key in errors.complementaryTicketData) {
        const value = formData.complementaryTicketData
          ? String(formData.complementaryTicketData[key])
          : "";
        errors.complementaryTicketData[key] = this.validateName(value);
      }
    }

    return errors;
  }

  static isFormValid(errors: ValidationErrors): boolean {
    return Object.values(errors).every(error => {
      if (typeof error === "object" && error !== null) {
        return Object.values(error).every(e => e === false);
      }
      return error === false;
    });
  }

  static getErrorMessages(errors: ValidationErrors) {
    const messages: Partial<
      Record<keyof ValidationErrors, string | { [p: string]: string }>
    > = {};

    if (errors.email) messages.email = "Invalid email address";
    if (errors.emailRepeat)
      messages.emailRepeat = "Email addresses do not match";
    if (errors.name)
      messages.name = "Full name must include the first and last name";
    if (errors.address)
      messages.address = "Address must be at least 5 characters";
    if (errors.city) messages.city = "City must be at least 2 characters";
    if (errors.postalCode)
      messages.postalCode = "Postal code must be at least 3 characters";
    if (errors.country) messages.country = "Invalid country";
    if (errors.phone)
      messages.phone =
        "Phone number must be at least 5 nubmers and digits only";
    if (errors.termsAndConditions)
      messages.termsAndConditions = "You must accept the terms and conditions";
    if (errors.complementaryTicketData) {
      const ticketErrors: { [x: string]: string } = {};
      for (const key in errors.complementaryTicketData) {
        if (errors.complementaryTicketData[key]) {
          ticketErrors[key] =
            "Ticket holder name must include the first and last name";
        }
      }
      messages.complementaryTicketData = ticketErrors;
    }

    return messages;
  }
}
