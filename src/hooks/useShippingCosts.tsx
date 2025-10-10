"use client";

import { useState, useEffect } from "react";
import { Country } from "@/types/country";
import { getApiPath } from "@/lib/api";

export function useShippingCost(
  country: Country,
  orderWeight: number,
  requiresShippingAddress: boolean
) {
  const [shippingCost, setShippingCost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!requiresShippingAddress || orderWeight <= 0) {
      setShippingCost(0);
      return;
    }

    setIsLoading(true);
    setError(null);

    fetch(getApiPath(`shipping/cost?country=${country}&weight=${orderWeight}`))
      .then(res => res.json())
      .then(data => {
        setShippingCost(data.shippingCost.cost);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message || "Failed to calculate shipping");
      });
  }, [country, orderWeight, requiresShippingAddress]);

  return { shippingCost, isLoading, error };
}
