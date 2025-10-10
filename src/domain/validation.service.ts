import { CheckoutFormData } from "@/types/checkout";

export interface ValidationErrors {
  email: boolean;
  name: boolean;
  address: boolean;
  city: boolean;
  postalCode: boolean;
  country: boolean;
  phone: boolean;
  termsAndConditions: boolean;
}

export class CheckoutValidationService {
  static validateEmail(email: string): boolean {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static validateName(name: string): boolean {
    return name.trim().length < 2 || !name.includes(" ");
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
    return phone.trim().length < 5;
  }

  static validateTermsAndConditions(accepted: boolean): boolean {
    return !accepted;
  }

  static validateForm(
    formData: CheckoutFormData,
    requiresShippingAddress: boolean
  ): ValidationErrors {
    const errors: ValidationErrors = {
      email: this.validateEmail(formData.email),
      name: false,
      address: false,
      city: false,
      postalCode: false,
      country: false,
      phone: false,
      termsAndConditions: this.validateTermsAndConditions(
        formData.termsAndConditions
      ),
    };

    if (requiresShippingAddress) {
      errors.name = this.validateName(formData.name);
      errors.address = this.validateAddress(formData.address);
      errors.city = this.validateCity(formData.city);
      errors.postalCode = this.validatePostalCode(formData.postalCode);
      errors.country = this.validateCountry(formData.city);
      errors.phone = this.validatePhone(formData.phone);
    }

    return errors;
  }

  static isFormValid(errors: ValidationErrors): boolean {
    return Object.values(errors).every(error => !error);
  }

  static getErrorMessages(
    errors: ValidationErrors
  ): Partial<Record<keyof ValidationErrors, string>> {
    const messages: Partial<Record<keyof ValidationErrors, string>> = {};

    if (errors.email) messages.email = "Invalid email address";
    if (errors.name)
      messages.name =
        "Full name must be at least 2 characters and include the first and last name";
    if (errors.address)
      messages.address = "Address must be at least 5 characters";
    if (errors.city) messages.city = "City must be at least 2 characters";
    if (errors.postalCode)
      messages.postalCode = "Postal code must be at least 3 characters";
    if (errors.country) messages.country = "Invalid country";
    if (errors.phone)
      messages.phone = "Phone number must be at least 5 characters";
    if (errors.termsAndConditions)
      messages.termsAndConditions = "You must accept the terms and conditions";

    return messages;
  }
}
