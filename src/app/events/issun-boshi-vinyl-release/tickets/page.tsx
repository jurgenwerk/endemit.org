import Headline from "@/app/events/issun-boshi-vinyl-release/(components)/Headline";
import type { Metadata } from "next";
import CoverFooter from "@/app/events/issun-boshi-vinyl-release/(components)/CoverFooter";

export const metadata: Metadata = {
  title: "Tickets",
};

export default function TicketsPage() {
  return (
    <>
      <div className="max-w-5xl space-y-6 p-5 lg:px-12 text-white font-typo flex-1 max-lg:pb-16">
        <Headline title="Tickets" />

        <script async src="https://js.stripe.com/v3/buy-button.js"></script>

        {/* @ts-expect-error */}
        <stripe-buy-button
          buy-button-id="buy_btn_1S2d84Ir2nqko6q4Uq8sSKOe"
          publishable-key="pk_live_51P6Vo2Ir2nqko6q44ic0fwaGZJjuheAWZfNOeekvDWZiRifEcTOHhJ023IoMWrrxCWXwPUUUmhlkqudmOrKw0qxG005H4cBkj3"
        >
          {/* @ts-expect-error */}
        </stripe-buy-button>
      </div>
      <CoverFooter />
    </>
  );
}
