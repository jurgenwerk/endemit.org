import { NextRequest, NextResponse } from "next/server";
import { generateQrImage } from "@/domain/ticket/ticket.actions";

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
    const qrCodeDataUrl = await generateQrImage(ticketData);
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
