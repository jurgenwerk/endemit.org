"use client";

import EventSidebar from "@/app/components/EventSidebar";
import Link from "next/link";

export default function Tickets() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <div className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
        <EventSidebar
          eventName={"Ius Primae Noctis"}
          eventPath={"/events/ius-primae-noctis"}
          fbUrl={"https://www.facebook.com/events/985739330046224"}
        />
        <div
          className="lg:pl-72 min-h-screen"
          style={{ background: "#FFFBEE" }}
        >
          <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full">
            <div className="m-auto max-w-5xl space-y-6 p-5 text-black">
              <div className="flex flex-col">
                <h2 className="text-4xl font-bold uppercase text-center pt-16 lg:pt-10">
                  Tickets
                </h2>
                <stripe-buy-button
                  buy-button-id="buy_btn_1RRbaVIr2nqko6q4LrlG9Xd8"
                  publishable-key="pk_live_51P6Vo2Ir2nqko6q44ic0fwaGZJjuheAWZfNOeekvDWZiRifEcTOHhJ023IoMWrrxCWXwPUUUmhlkqudmOrKw0qxG005H4cBkj3"
                  className="mx-auto mt-8"
                ></stripe-buy-button>
              </div>
              <script
                async
                src="https://js.stripe.com/v3/buy-button.js"
              ></script>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
