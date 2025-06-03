"use client";

import EventSidebar from "@/app/components/EventSidebar";
import Image from "next/image";

export default function EndemitFestival() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <EventSidebar
        eventName={"Endemit Festival"}
        eventPath={"/events/endemit-festival"}
        fbUrl={"https://www.facebook.com/endemit.crew"}
        location={{
          name: "Libeliče, Koroška",
          address: "Slovenia",
        }}
      />
      <div className="lg:pl-72 min-h-screen" style={{ background: "#FFFBEE" }}>
        <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full">
          <Image
            src="/events/festival-2025/cover.jpg"
            alt="Endemit Festival"
            width={500}
            height={300}
            className="lg:max-w-[500px] mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16"
            style={{ marginTop: "0px" }}
          />

          <hr className="mx-auto mt-10 w-1/2 border-gray-400"></hr>

          <div className="text-center text-2xl text-gray-600">COMING SOON</div>

          <hr className="mx-auto mt-4 w-1/2 border-gray-400" />

          <div className="mt-4 flex items-center justify-center space-x-2 text-sm">
            <span>Libeliče, Slovenia</span>
          </div>
        </div>
      </div>
    </body>
  );
}
