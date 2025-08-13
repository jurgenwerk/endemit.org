import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL("/endemit-festival", request.url);
  url.search = request.nextUrl.search;
  return NextResponse.redirect(url);
}
