import { ShippingAddress } from "@/types/checkout";
import { prisma } from "@/services/prisma/prisma";
import { OrderStatus } from "@prisma/client";
import Stripe from "stripe";

export const createOrder = async ({
  stripeSessionId,
  email,
  subtotal,
  shippingCost,
  shippingRequired,
  shippingAddress,
  checkoutItems,
}: {
  stripeSessionId: string;
  email: string;
  subtotal: number;
  shippingCost: number;
  shippingRequired: boolean;
  shippingAddress?: ShippingAddress;
  checkoutItems: Stripe.Checkout.SessionCreateParams.LineItem[];
}) => {
  return await prisma.order.create({
    data: {
      stripeSession: stripeSessionId,
      email,
      subtotal: Math.round(subtotal * 100), // in cents
      totalAmount: Math.round((subtotal + shippingCost) * 100),
      shippingAmount: Math.round(shippingCost * 100),
      shippingRequired,
      shippingAddress: JSON.stringify(shippingAddress),
      items: JSON.stringify(checkoutItems),
    },
  });
};

export const getOrderByStripeSession = async (stripeSessionId: string) => {
  return await prisma.order.findUnique({
    where: {
      stripeSession: stripeSessionId,
    },
  });
};

export const getOrderById = async (orderId: string) => {
  return await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });
};

export const getOrdersByEmail = async (email: string) => {
  return await prisma.order.findMany({
    where: {
      email,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const updateOrderStatus = async (
  stripeSessionId: string,
  status: OrderStatus
) => {
  return await prisma.order.update({
    where: {
      stripeSession: stripeSessionId,
    },
    data: {
      status,
    },
  });
};

export const updateOrderStatusPaid = async (stripeSessionId: string) => {
  return await updateOrderStatus(stripeSessionId, OrderStatus.PAID);
};

export const updateOrderStatusCancelled = async (stripeSessionId: string) => {
  return await updateOrderStatus(stripeSessionId, OrderStatus.CANCELLED);
};

export const updateOrderStatusExpired = async (stripeSessionId: string) => {
  return await updateOrderStatus(stripeSessionId, OrderStatus.EXPIRED);
};
