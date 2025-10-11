import { stripe } from "@/services/stripe/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {
  updateOrderStatusCancelled,
  updateOrderStatusPaid,
} from "@/domain/order/order.actions";
import {
  ProductCategory,
  ProductRelatedEvent,
  ProductType,
} from "@/types/product";
import { queueTicketCreation } from "@/domain/ticket/ticket.queue";
import { CustomStripeLineItem } from "@/types/checkout";
import { queueOrderNotification } from "@/domain/order/order.queue";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = (await headers()).get("stripe-signature")!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook error ${err}` },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        // Payment succeeded - update order status to PAID
        // This is your main success event
        const order = await updateOrderStatusPaid(session.id);

        console.log("triggering order notification");
        await queueOrderNotification({ orderId: order.id });
        console.log("triggered order notification", order.id);

        if (order.items) {
          const items = JSON.parse(
            order.items as string
          ) as CustomStripeLineItem[];

          items.forEach(item => {
            const metadata = item.price_data?.product_data?.metadata;
            const quantity = item.quantity || 1;

            const isDigitalTicket =
              item.price_data?.product_data?.metadata?.productType ===
                ProductType.DIGITAL &&
              item.price_data?.product_data?.metadata?.productCategory ===
                ProductCategory.TICKETS;

            if (isDigitalTicket) {
              if (!metadata?.relatedEvent) {
                console.warn(
                  "No related event found in product metadata for item:",
                  item
                );
                return;
              }

              if (!metadata?.ticketHolders) {
                console.warn("No ticket holders were found for item", item);
                return;
              }

              const eventData = JSON.parse(
                metadata.relatedEvent
              ) as ProductRelatedEvent;

              const ticketHolders = metadata?.ticketHolders
                ? (JSON.parse(metadata.ticketHolders) as string[])
                : Array.from({ length: quantity }, () => order.email);

              ticketHolders.forEach(ticketHolderName => {
                queueTicketCreation({
                  eventId: eventData.id,
                  eventName: eventData.title,
                  ticketHolderName,
                  ticketPayerEmail: order.email,
                  orderId: order.id,
                  metadata: {
                    productName:
                      item.price_data?.product_data?.name ?? "Default",
                  },
                });
              });
            }
          });
        }

        // get order, get items, create tickets, send emails, send discord, add to airtable?
        // TODO
        // Ticket creation

        console.log(`Order paid: ${session.id}`);
        break;
      }

      case "checkout.session.expired": {
        const session = event.data.object;
        // Checkout session expired without payment - mark as CANCELLED
        // User didn't complete checkout within time limit
        await updateOrderStatusCancelled(session.id);
        console.log(`Order cancelled (expired): ${session.id}`);
        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;
        // Payment processing completed successfully
        // Additional confirmation that money was captured
        // You can log this or add additional business logic
        console.log(`Payment intent succeeded: ${paymentIntent.id}`);
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object;
        // Payment attempt failed (card declined, insufficient funds, etc)
        // Update order status to CANCELLED or create a FAILED status
        // Note: You'll need to find the order via metadata or customer email
        console.log(`Payment intent failed: ${paymentIntent.id}`);
        // Optional: Update order if you can match it
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
