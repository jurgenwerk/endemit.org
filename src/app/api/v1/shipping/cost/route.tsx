import { NextRequest, NextResponse } from "next/server";
import shippingService from "@/domain/shipping.service";
import { Country } from "@/types/country";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country");
  const weight = searchParams.get("weight");

  try {
    // Validation
    if (!country) {
      return NextResponse.json(
        { error: "Country code is required" },
        { status: 400 }
      );
    }

    if (!weight) {
      return NextResponse.json(
        { error: "Weight in grams is required" },
        { status: 400 }
      );
    }

    const weightNum = parseFloat(weight);
    if (isNaN(weightNum)) {
      return NextResponse.json(
        { error: "Weight must be a valid number" },
        { status: 400 }
      );
    }

    // Calculate shipping cost
    const cost = shippingService.calculateShippingCost(
      country as Country,
      weightNum
    );

    return NextResponse.json({
      country,
      weight: weightNum,
      shippingCost: cost,
      currency: "EUR",
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
