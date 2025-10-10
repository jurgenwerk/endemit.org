import { CartItem } from "@/types/cart";
import { Country } from "@/types/country";

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  PAID = "PAID",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
}

export enum OrderPaymentMethod {
  ONLINE = "ONLINE",
  IN_STORE = "IN_STORE",
}

export enum OrderPaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED",
}

export type ShippingAddress = {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: Country;
  phone: string;
};

export interface Order {
  id: string;
  status: OrderStatus;

  items: CartItem[];
  total: number;

  email: string;
  shippingInfo?: ShippingAddress;

  paymentInfo?: {
    method: OrderPaymentMethod;
    status: OrderPaymentStatus;
    transactionId: string;
    email: string;
  };
}

export interface CheckoutFormData extends ShippingAddress {
  email: string;
  termsAndConditions: boolean;
}
