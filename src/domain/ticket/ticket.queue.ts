import { inngest } from "@/services/inngest/inngest";
import {
  createTicket,
  generateQrContent,
  generateQrImage,
  generateSecureHash,
} from "@/domain/ticket/ticket.actions";
import { sendTicketEmail } from "@/domain/email";

enum TicketQueueEvent {
  CREATE_TICKET = "create-ticket",
}

export type TicketCreationData = {
  eventId: string;
  eventName: string;
  ticketHolderName: string;
  ticketPayerEmail: string;
  orderId: string;
  metadata?: Record<string, string | number | boolean>;
};

export const ticketQueueFunction = inngest.createFunction(
  { id: "create-ticket-function", retries: 5 },
  { event: TicketQueueEvent.CREATE_TICKET },
  async ({ event, step }) => {
    const {
      eventId,
      eventName,
      ticketHolderName,
      ticketPayerEmail,
      orderId,
      metadata,
    } = event.data as TicketCreationData;

    const ticketSecurityData = await step.run(
      "generate-ticket-hash",
      async () => {
        const hash = generateSecureHash({
          eventId,
          eventName,
          ticketHolderName,
          ticketPayerEmail,
          orderId,
        });

        const qrData = generateQrContent(hash, {
          eventId,
          eventName,
          ticketHolderName,
          ticketPayerEmail,
          orderId,
        });

        if (!hash || !qrData) {
          throw new Error("Failed to generate ticket security data");
        }

        return { ticketHash: hash, qrContent: qrData };
      }
    );

    const ticket = await step.run("create-ticket-db", async () => {
      const created = await createTicket({
        eventId,
        eventName,
        ticketHolderName,
        ticketPayerEmail,
        ticketHash: ticketSecurityData.ticketHash,
        qrContent: JSON.stringify(ticketSecurityData.qrContent),
        orderId,
        metadata: JSON.stringify(metadata),
      });

      if (!created) {
        throw new Error("Failed to create ticket in database");
      }

      return created;
    });

    const ticketImage = await step.run("create-ticket-image", async () => {
      const image = await generateQrImage(JSON.stringify(ticketSecurityData));

      if (!image) {
        throw new Error("Failed to generate QR image");
      }

      return image;
    });

    await step.run("send-ticket-email", async () => {
      try {
        const result = await sendTicketEmail(ticket, ticketImage);

        if (!result || result.error) {
          throw new Error(
            `Failed to send ticket email: ${result?.error || "Unknown error"}`
          );
        }

        console.log(`Ticket email sent: ${ticket.id}`);
        return result;
      } catch (error) {
        // Detect rate limit errors
        if (error instanceof Error) {
          if (
            error.message.includes("429") ||
            error.message.includes("rate limit")
          ) {
            throw new Error(
              `Rate limit hit when sending email for ticket ${ticket.id}`
            );
          }
        }

        throw new Error(`Email send failed for ticket ${ticket.id}: ${error}`);
      }
    });

    return { ticketId: ticket.id };
  }
);

export const queueTicketCreation = async (data: TicketCreationData) => {
  return await inngest.send({
    name: TicketQueueEvent.CREATE_TICKET,
    data,
  });
};
