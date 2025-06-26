"use client";

import EventSidebar from "@/app/components/EventSidebar";
import EventFooter from "@/components/EventFooter";

export default function Tickets() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <div className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
        <EventSidebar
          eventName={"Ius Primae Noctis"}
          eventPath={"/ius-primae-noctis"}
          fbUrl={"https://www.facebook.com/events/985739330046224"}
          ticketsPath={"/ius-primae-noctis/tickets"}
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

                <div className="text-center text-2xl font-bold mt-8">
                  Online tickets are sold out. You can get tickets at the door.
                </div>
              </div>
            </div>
          </div>
        </div>

        <EventFooter ticketsLink={"/ius-primae-noctis/tickets"} />
      </div>
    </body>
  );
}
