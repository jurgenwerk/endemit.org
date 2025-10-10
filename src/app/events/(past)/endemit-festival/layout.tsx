import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import EventFooter from "@/components/event/EventFooter";

export const metadata: Metadata = {
  title: "Endemit Festival",
  description:
    "Electronic music festival in Libeliče, Slovenia. August 15-17, 2025.",
  openGraph: {
    images: ["/images/endemit-festival/cover.jpg"],
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
  return (
    <body className="m-auto overflow-y-scroll ">
      <div className="max-w-8xl  m-auto">
        <Sidebar
          activeColor="text-violet-400"
          navigationItems={[
            {
              label: "Events",
              href: "/events",
              isBackButton: true,
            },
            {
              label: "Endemit Festival",
              href: "/events/endemit-festival",
            },
            {
              label: "Artists",
              href: "/events/endemit-festival/artists",
            },
            {
              label: "Location",
              href: "/events/endemit-festival/location",
            },
            {
              label: "Map & Timetable",
              href: "/events/endemit-festival/map-and-timetable",
            },
            {
              label: "Food & Drinks",
              href: "/events/endemit-festival/food-and-drinks",
            },
          ]}
          footerInfo={{
            lines: ["Libeliče, Koroška", "15-17 Aug 2025"],
            href: "/events/endemit-festival/location",
          }}
        />
        <div
          className="lg:pl-72 min-h-screen pb-16"
          style={{ background: "rgb(226 221 255)" }}
        >
          {children}
        </div>
        <EventFooter
          locationName="Libeliče, Koroška"
          locationAddress="15-17 Aug 2025"
          locationLink="/events/endemit-festival/location"
        />
      </div>
    </body>
  );
}
