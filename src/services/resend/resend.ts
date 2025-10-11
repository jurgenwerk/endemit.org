import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_KEY);
export const resendFromEmail =
  process.env.RESEND_FROM ?? "onboarding@resend.dev";
