import crypto from "crypto";
import assert from "node:assert";
import { TicketPayload } from "@/types/ticket";
import QRCode from "qrcode";
import path from "path";
import sharp from "sharp";
import { prisma } from "@/services/prisma/prisma";

export const generateSecureHash = (ticketPayload: TicketPayload) => {
  const secret = process.env.TICKET_SECRET;
  assert(secret, "TICKET_SECRET is not set");

  const data = JSON.stringify(ticketPayload);

  return crypto.createHmac("sha256", secret).update(data).digest("hex");
};

export const generateQrContent = (
  ticketHash: string,
  ticketPayload: TicketPayload
) => {
  return JSON.stringify({
    hash: ticketHash,
    payload: ticketPayload,
  });
};

export const verifyTicketHash = (
  ticketHash: string,
  ticketPayload: TicketPayload
) => {
  const expectedHash = generateSecureHash(ticketPayload);
  return crypto.timingSafeEqual(
    Buffer.from(ticketHash),
    Buffer.from(expectedHash)
  );
};

export const generateQrImage = async (data: string): Promise<string> => {
  const qrCodeDataUrl = await QRCode.toDataURL(data, {
    errorCorrectionLevel: "H",
    margin: 4,
    width: 400,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });

  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "endemit-logo.png"
  );
  const logoBuffer = await sharp(logoPath)
    .resize(55, 55, {
      fit: "inside",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  const paddingWidth = 80;
  const paddingHeight = 80;
  const cornerRadius = 0;

  const whitePadding = await sharp(
    Buffer.from(`
    <svg width="${paddingWidth}" height="${paddingHeight}">
      <rect
        x="0"
        y="0"
        width="${paddingWidth}"
        height="${paddingHeight}"
        rx="${cornerRadius}"
        fill="white"
        fill-opacity="1"
      />
    </svg>`)
  )
    .composite([
      {
        input: logoBuffer,
        gravity: "center",
      },
    ])
    .png()
    .toBuffer();

  const qrBuffer = await sharp(
    Buffer.from(qrCodeDataUrl.split(",")[1], "base64")
  )
    .composite([
      {
        input: whitePadding,
        gravity: "center",
      },
    ])
    .extend({
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  return qrBuffer.toString("base64");
};

export const createTicket = async ({
  eventId,
  eventName,
  ticketHolderName,
  ticketPayerEmail,
  ticketHash,
  qrContent,
  orderId,
  metadata,
}: {
  eventId: string;
  eventName: string;
  ticketHolderName: string;
  ticketPayerEmail: string;
  ticketHash: string;
  qrContent: string;
  orderId: string;
  metadata?: string;
}) => {
  return await prisma.ticket.create({
    data: {
      eventId,
      eventName,
      ticketHolderName,
      ticketPayerEmail,
      ticketHash,
      qrContent,
      orderId,
      metadata,
    },
  });
};
