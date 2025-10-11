import { serve } from "inngest/next";
import { inngest } from "@/services/inngest/inngest";

import { ticketQueueFunction } from "@/domain/ticket/ticket.queue";
import { orderQueueFunction } from "@/domain/order/order.queue";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [ticketQueueFunction, orderQueueFunction],
});
