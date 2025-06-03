import { NextResponse } from "next/server";

const EMAIL_OCTOPUS_API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;
const EMAIL_OCTOPUS_LIST_ID = process.env.EMAIL_OCTOPUS_LANDING_PAGE_LIST;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await fetch(
      `https://api.emailoctopus.com/lists/${EMAIL_OCTOPUS_LIST_ID}/contacts`,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
