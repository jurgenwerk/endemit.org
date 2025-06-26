"use client";

import EventSidebar from "@/app/components/EventSidebar";
import FestivalSubscribe from "@/app/components/FestivalSubscribe";
import EventFooter from "@/components/EventFooter";
import Image from "next/image";

export default function EndemitFestival() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <EventSidebar
        eventName={"Endemit Festival"}
        eventPath={"/endemit-festival"}
        fbUrl={"https://www.facebook.com/endemit.crew"}
        location={{
          name: "Libeliče, Koroška",
          address: "15-17 Aug 2025",
        }}
        ticketsPath={"/endemit-festival/subscribe"}
        ticketsText={"SUBSCRIBE"}
      />
      <div
        className="lg:pl-72 min-h-screen"
        style={{ background: "rgb(226 221 255)" }}
      >
        <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full">
          <Image
            src="/endemit-festival/cover.jpg"
            alt="Endemit Festival"
            width={500}
            height={300}
            className="lg:max-w-[500px] mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16"
            style={{ marginTop: "0px" }}
          />

          <hr className="mx-auto mt-10 w-1/2 border-gray-400"></hr>

          <FestivalSubscribe />

          <hr className="mx-auto mt-4 w-1/2 border-gray-400" />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <EventFooter
        ticketsLink="/endemit-festival/subscribe"
        ticketsText="SUBSCRIBE"
        locationName="Libeliče, Koroška"
        locationAddress="15-17 Aug 2025"
        locationLink="/endemit-festival/location"
      />
    </body>
  );
}
