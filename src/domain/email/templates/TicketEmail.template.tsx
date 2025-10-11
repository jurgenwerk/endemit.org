import * as React from "react";
import { TicketEmailData } from "@/types/ticket";

interface Props {
  ticket: TicketEmailData;
}

export default function TicketEmailTemplate({ ticket }: Props) {
  return (
    <div>
      <h1>Your Ticket for {ticket.eventName}</h1>
      <p>Hi {ticket.ticketHolderName},</p>
      <p>Your ticket is ready!</p>
      <p>QR Code: {ticket.ticketHash}</p>
    </div>
  );
}
