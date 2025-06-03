"use client";

import EventSidebar from "@/app/components/EventSidebar";

export default function Location() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <EventSidebar
        eventName={"Endemit Festival"}
        eventPath={"/events/endemit-festival"}
        fbUrl={"https://www.facebook.com/endemit.crew"}
      />
      <div className="lg:pl-72 min-h-screen" style={{ background: "#FFFBEE" }}>
        <div className="m-auto max-w-5xl space-y-6 p-5 text-black">
          <h2 className="text-4xl font-bold uppercase pt-16 lg:pt-10">
            Location
          </h2>
          <div className="text-2xl text-gray-600">COMING SOON</div>
        </div>
      </div>
    </body>
  );
}
