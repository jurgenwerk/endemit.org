"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { CartProvider } from "use-shopping-cart";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe="pk_test_51S8yCXIvtDyIk7xjD7cCC9eh3xCPYJc5OsVpBfKyIcdRHYDWZiaiA30quas7WFnvLp86COWJerUHkSbdf4PHhnoT00bBc6sgRc"
        currency="EUR"
        successUrl={`https://endemit.org/success/${process.env.NEXT_PUBLIC_SITE_URL}/success`}
        cancelUrl={`https://endemit.org/success/${process.env.NEXT_PUBLIC_SITE_URL}/cart`}
        shouldPersist={true}
      >
        {children}
      </CartProvider>
    </ParallaxProvider>
  );
}
