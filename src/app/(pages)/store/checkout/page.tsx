import type { Metadata } from "next";
import Cart from "@/components/checkout/Checkout";

export const metadata: Metadata = {
  title: "Merch",
  description: "Exclusive Endemit merchandise, coming soon.",
  openGraph: {
    description: "Exclusive Endemit merchandise, coming soon.",
    images: ["/images/og/endemit-og.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function CheckoutPage() {
  return (
    <div className="lg:max-w-3xl mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16">
      <h1 className="text-3xl font-bold text-white mb-8">CHECKOUT</h1>
      <Cart />
    </div>
  );
}
