import { Ticket } from "@prisma/client";

export interface TicketPayload {
  eventId: string;
  eventName: string;
  ticketHolderName: string;
  ticketPayerEmail: string;
  orderId: string;
}

export type TicketEmailData = Pick<
  Ticket,
  | "id"
  | "eventName"
  | "ticketHolderName"
  | "ticketPayerEmail"
  | "qrContent"
  | "ticketHash"
>;
