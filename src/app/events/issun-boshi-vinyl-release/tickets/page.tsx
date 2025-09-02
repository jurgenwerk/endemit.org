import Headline from "@/app/events/issun-boshi-vinyl-release/(components)/Headline";
import type { Metadata } from "next";
import CoverFooter from "@/app/events/issun-boshi-vinyl-release/(components)/CoverFooter";
import BuyButton from "@/app/(components)/BuyButton";
import React from "react";
import { getEventConfigById } from "@/app/(lib)/util";

const eventConfig = getEventConfigById("issun-boshi-vinyl-release");

export const metadata: Metadata = {
  title: "Tickets",
};

export default function TicketsPage() {
  return (
    <>
      <div className="max-w-5xl space-y-6 p-5 lg:px-12 text-white font-typo flex-1 max-lg:pb-16">
        <Headline title="Tickets" />

        <p className="text-xl font-light">
          Tickets are available in limited capacity and sold on a first-come,
          first-served basis through our secure Stripe payment gateway. All
          sales are final - tickets are non-refundable.
        </p>
        <div className="w-full flex justify-center pt-16">
          {eventConfig && eventConfig.isTicketsAvailable !== undefined && (
            <BuyButton
              available={eventConfig.isTicketsAvailable}
              buyButtonId="buy_btn_1S2d84Ir2nqko6q4Uq8sSKOe"
              publishableKey="pk_live_51P6Vo2Ir2nqko6q44ic0fwaGZJjuheAWZfNOeekvDWZiRifEcTOHhJ023IoMWrrxCWXwPUUUmhlkqudmOrKw0qxG005H4cBkj3"
            />
          )}
          <div
            className={
              "absolute left-0 right-0 -z-10 -translate-y-[78%] h-full bg-center bg-cover w-full !m-0 bg-no-repeat"
            }
            style={{
              backgroundImage:
                "url('/images/issun-boshi-vinyl-release/parallax-layers/5.webp')",
            }}
          />
        </div>
      </div>
      <CoverFooter />
    </>
  );
}
