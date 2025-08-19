"use client";

import UpcomingEvents from "@/app/components/UpcomingEvents";
import LandingPageSidebar from "@/app/components/LandingPageSidebar";
import PastEvents from "../../components/PastEvents";
import EndemitSubscribe from "../../components/EndemitSubscribe";

export default function EventsPage() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-10">
      <LandingPageSidebar />
      <div className="lg:pl-72 bg-[radial-gradient(ellipse_1200px_800px_at_50%_50%,_var(--tw-gradient-stops))] from-gray-950 via-black to-black min-h-screen">
        <div className="lg:max-w-3xl mx-auto sm:max-w-full pt-24 px-6 lg:pt-16">
          <UpcomingEvents />
          <PastEvents />
          <EndemitSubscribe />
        </div>
      </div>
    </body>
  );
}
