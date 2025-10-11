import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "endemit",
  eventKey: process.env.INNGEST_EVENT_KEY,
});
