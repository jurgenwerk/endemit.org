import Script from "next/script";

interface BuyButtonParams {
  buyButtonId: string;
  publishableKey: string;
}

export default function BuyButton({
  buyButtonId,
  publishableKey,
}: BuyButtonParams) {
  return (
    <>
      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
      />

      {/* @ts-expect-error custom component */}
      <stripe-buy-button
        buy-button-id={buyButtonId}
        publishable-key={publishableKey}
      >
        {/* @ts-expect-error custom component */}
      </stripe-buy-button>
    </>
  );
}
