import { resend, resendFromEmail } from "@/services/resend/resend";
import TicketEmailTemplate from "@/domain/email/templates/TicketEmail.template";
import { TicketEmailData } from "@/types/ticket";
import OrderEmailTemplate from "./templates/OrderEmail.template";
import { Order } from "@prisma/client";

export const sendTicketEmail = async (
  ticket: TicketEmailData,
  ticketQrBuffer: string
) => {
  return await resend.emails.send({
    from: resendFromEmail,
    to: ticket.ticketPayerEmail,
    subject: `Your ticket for ${ticket.eventName}`,
    react: TicketEmailTemplate({ ticket }),
    attachments: [
      {
        filename: `ticket-${ticket.id}.png`,
        content: ticketQrBuffer,
      },
    ],
  });
};

export const sendOrderEmail = async (order: Order) => {
  return await resend.emails.send({
    from: resendFromEmail,
    to: order.email,
    subject: `Your order @ endemit`,
    react: OrderEmailTemplate({ order }),
  });
};
