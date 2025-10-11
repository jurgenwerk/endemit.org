"use client";

import { useEffect } from "react";
import { useCart } from "@/stores/CartStore";

export default function ClearCart() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return null;
}
