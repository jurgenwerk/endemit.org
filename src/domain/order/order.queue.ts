import { inngest } from "@/services/inngest/inngest";
import { sendOrderEmail } from "@/domain/email";
import { getOrderById } from "@/domain/order/order.actions";
import assert from "node:assert";

enum OrderQueueEvent {
  NOTIFY_ON_ORDER = "notify-on-order",
}

export type OrderNotificationData = {
  orderId: string;
  metadata?: Record<string, string | number | boolean>;
};

export const orderQueueFunction = inngest.createFunction(
  { id: "notify-order-function", retries: 5 },
  { event: OrderQueueEvent.NOTIFY_ON_ORDER },
  async ({ event, step }) => {
    const { orderId } = event.data as OrderNotificationData;

    const order = await getOrderById(orderId);

    assert(order !== null, `Order not found: ${orderId}`);

    await step.run("send-order-email", async () => {
      try {
        const result = await sendOrderEmail(order);

        if (!result || result.error) {
          throw new Error(
            `Failed to send order email: ${result?.error || "Unknown error"}`
          );
        }

        console.log(`Order email sent: ${order.id}`);
        return result;
      } catch (error) {
        // Detect rate limit errors
        if (error instanceof Error) {
          if (
            error.message.includes("429") ||
            error.message.includes("rate limit")
          ) {
            throw new Error(
              `Rate limit hit when sending email for order ${order.id}`
            );
          }
        }

        throw new Error(`Email send failed for order ${order.id}: ${error}`);
      }
    });

    return { orderId: order.id };
  }
);

export const queueOrderNotification = async (data: OrderNotificationData) => {
  return await inngest.send({
    name: OrderQueueEvent.NOTIFY_ON_ORDER,
    data,
  });
};
