"use client";

import EventSidebar from "@/app/components/EventSidebar";
import FestivalSubscribe from "@/app/components/FestivalSubscribe";
import EventFooter from "@/components/EventFooter";

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
          <div
            className="main-image-background"
            style={{
              background:
                "url('/endemit-festival/hero-cover-landscape.jpg') no-repeat center center",
              backgroundSize: "cover",
              width: "100%",
              height: "100vh",
              position: "relative",
            }}
          >
            <div
              className="text-center absolute left-0 w-full flex flex-col items-center"
              style={{ top: "15%" }}
            >
              <div className="text-center text-5xl md:text-5xl lg:text-6xl font-bold uppercase text-white">
                Endemit Festival
              </div>
              <div className="text-center text-3xl md:text-3xl lg:text-4xl font-bold uppercase text-white mt-4">
                Libeliče, 15-17 Aug 2025
              </div>
            </div>
          </div>
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
