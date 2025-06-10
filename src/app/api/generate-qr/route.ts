import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";
import sharp from "sharp";
import path from "path";

// QR code gradient configurations
const QR_GRADIENTS = {
  red: {
    start: "#FF0000",
    middle: "#FF3333",
    end: "#FF6666",
  },
  blue: {
    start: "#0066CC",
    middle: "#1A75D1",
    end: "#3384D6",
  },
  green: {
    start: "#008000",
    middle: "#1A8C1A",
    end: "#339933",
  },
  orange: {
    start: "#FF8C00",
    middle: "#FF981A",
    end: "#FFA333",
  },
  purple: {
    start: "#800080",
    middle: "#8C1A8C",
    end: "#993399",
  },
  teal: {
    start: "#008080",
    middle: "#1A8C8C",
    end: "#339999",
  },
  pink: {
    start: "#FF1493",
    middle: "#FF2D9D",
    end: "#FF47A7",
  },
};

async function generateQRWithLogo(data: string): Promise<string> {
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
    "endemit-title-black-font.jpg"
  );
  const logoBuffer = await sharp(logoPath)
    .resize(60, 20, {
      fit: "inside",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  const paddingWidth = 80;
  const paddingHeight = 35;
  const cornerRadius = 6;

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
        fill-opacity="0.95"
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

  return `data:image/png;base64,${qrBuffer.toString("base64")}`;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ticketData = searchParams.get("ticketData");

  if (!ticketData) {
    return NextResponse.json(
      { error: "ticketData parameter is required" },
      { status: 400 }
    );
  }

  try {
    const qrCodeDataUrl = await generateQRWithLogo(ticketData);
    // Convert base64 string to Buffer
    const imageBuffer = Buffer.from(qrCodeDataUrl.split(",")[1], "base64");

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Content-Length": imageBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error generating QR code:", error);
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 }
    );
  }
}
