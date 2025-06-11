import { NextResponse } from "next/server";

const EMAIL_OCTOPUS_API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;
const EMAIL_OCTOPUS_FESTIVAL_EARLY_SUBSCRIBER_LIST =
  process.env.EMAIL_OCTOPUS_FESTIVAL_EARLY_SUBSCRIBER_LIST;
const DISCORD_WEB_NOTIFICATIONS_WEBHOOK =
  process.env.DISCORD_WEB_NOTIFICATIONS_WEBHOOK;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await fetch(
      `https://api.emailoctopus.com/lists/${EMAIL_OCTOPUS_FESTIVAL_EARLY_SUBSCRIBER_LIST}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${EMAIL_OCTOPUS_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.error?.message || "Failed to subscribe: " + data.detail,
        },
        { status: response.status }
      );
    }

    try {
      await fetch(DISCORD_WEB_NOTIFICATIONS_WEBHOOK!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `New festival pre-sale waiting list subscriber: **${email}**`,
        }),
      });
    } catch (error) {
      console.error("Failed to send Discord notification:", error);
      // Don't fail the subscription if Discord notification fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
