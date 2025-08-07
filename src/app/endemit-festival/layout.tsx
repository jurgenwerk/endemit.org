import type { Metadata } from "next";
import EventSidebar from "@/app/components/EventSidebar";
import EventFooter from "@/components/EventFooter";

export const metadata: Metadata = {
  title: "Endemit Festival",
  description:
    "Electronic music festival in Libeliče, Slovenia. August 15-17, 2025.",
  openGraph: {
    title: "Endemit Festival",
    description:
      "Electronic music festival in Libeliče, Slovenia. August 15-17, 2025.",
    images: ["/endemit-festival/cover.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function FestivalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return  <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <EventSidebar
        eventName={"Endemit Festival"}
        eventPath={"/endemit-festival"}
        fbUrl={"https://www.facebook.com/endemit.crew"}
        ticketsPath={"/endemit-festival/subscribe"}
        ticketsText={"SUBSCRIBE"}
        showFoodAndDrinks={true}
        showMapAndTimetable={true}
        location={{
          firstLine: "Libeliče, Koroška",
          secondLine: "15-17 Aug 2025",
        }}
      />
     <div
        className="lg:pl-72 min-h-screen"
        style={{ background: "rgb(226 221 255)" }}
      >
          {children}
      </div>
      <EventFooter
        ticketsLink="/endemit-festival/subscribe"
        ticketsText="SUBSCRIBE"
        locationName="Libeliče, Koroška"
        locationAddress="15-17 Aug 2025"
        locationLink="/endemit-festival/location"
      />
    </body>;
}
