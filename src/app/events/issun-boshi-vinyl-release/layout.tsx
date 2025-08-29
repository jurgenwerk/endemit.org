import type { Metadata } from "next";
import EventFooter from "@/app/(components)/EventFooter";
import Sidebar from "@/app/(components)/Sidebar";

export const metadata: Metadata = {
  title: "Issun-Bōshi vinyl release",
  description:
    "Issun-Bōshi vinyl release event. Grad Kader, Ljubljana September 20 2025.",
  openGraph: {
    title: "Issun-Bōshi vinyl release",
    description:
      "Issun-Bōshi vinyl release event. Grad Kader, Ljubljana September 20 2025.",
    images: ["/endemit-festival/cover.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function IssunBoshiVinylReleaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className="m-auto overflow-y-scroll pb-16 max-lg:my-14 bg-issun-boshi-purple"
    >
      <Sidebar
        activeColor="text-issun-boshi-yellow"
        navigationItems={[
          { label: "← Home", href: "/" },
          {
            label: "Event",
            href: "/events/issun-boshi-vinyl-release",
          },
          {
            label: "Album",
            href: "/events/issun-boshi-vinyl-release/album",
          },
          {
            label: "Artists",
            href: "/events/issun-boshi-vinyl-release/artists",
          },

          {
            label: "Tickets",
            href: "/events/issun-boshi-vinyl-release/tickets",
          },
          {
            label: "Location",
            href: "/events/issun-boshi-vinyl-release/location",
          },
        ]}
        footerAction={{
          label: "Tickets",
          href: "/events/issun-boshi-vinyl-release/tickets",
          style: "button",
        }}
        footerInfo={{
          lines: ["Grad Kodeljevo", "20 Sep 2025"],
          href: "/events/issun-boshi-vinyl-release/location",
        }}
      />
      <div className="lg:pl-72 min-h-screen">{children}</div>

      <EventFooter
        locationName="Grad Kodeljevo"
        locationAddress="Ul. Carla Benza 20"
        locationLink="/events/issun-boshi-vinyl-release/location"
      />
    </body>
  );
}
