import type { Metadata } from "next";
import EventFooter from "@/components/event/EventFooter";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Issun-bōshi vinyl release",
    template: "%s • Issun-bōshi vinyl release • Endemit",
  },
  description:
    "After a decade of both creative blockade and artistic growth, MMali is set to present his first vinyl release. Inland • MMali. Grad Kader, Ljubljana September 20 2025.",
  openGraph: {
    images: [
      "/images/issun-boshi-vinyl-release/issun-boshi-vinyl-release-og.gif",
    ],
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
    <body className="m-auto overflow-y-scroll max-lg:my-14 bg-issun-boshi-purple min-h-screen">
      <div className="max-w-8xl m-auto overflow-hidden relative bg-issun-boshi-purple">
        <div
          className="absolute -z-10 top-0 bottom-0 left-0 right-0 bg-issun-boshi-purple opacity-30 min-h-screen"
          style={{
            backgroundImage: "url('/images/worms.png')",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "color-burn",
            backgroundSize: "150px",
          }}
        />
        <Sidebar
          activeColor="text-issun-boshi-yellow"
          navigationItems={[
            { label: "Events", href: "/events", isBackButton: true },
            {
              label: "Vinyl release",
              href: "/events/issun-boshi-vinyl-release",
            },
            {
              label: "Get the EP",
              href: "/events/issun-boshi-vinyl-release/get-the-ep",
            },
            {
              label: "Artists",
              href: "/events/issun-boshi-vinyl-release/artists",
            },

            // {
            //   label: "Tickets",
            //   href: "/events/issun-boshi-vinyl-release/tickets",
            // },
            {
              label: "Location",
              href: "/events/issun-boshi-vinyl-release/location",
            },
          ]}
          // footerAction={{
          //   label: "Tickets",
          //   href: "/events/issun-boshi-vinyl-release/tickets",
          //   style: "button",
          // }}
          footerInfo={{
            lines: ["Grad Kodeljevo", "20 Sep 2025"],
            href: "/events/issun-boshi-vinyl-release/location",
          }}
        />
        <div className="lg:pl-72 min-h-screen  flex-col flex h-full xl:items-center">
          {children}
        </div>

        <EventFooter
          locationName="Kader, Grad Kodeljevo"
          locationAddress="Ul. Carla Benza 20"
          locationLink="/events/issun-boshi-vinyl-release/location"
          ticketsLink={"/events/issun-boshi-vinyl-release/tickets"}
          ticketsText={"Tickets"}
        />
      </div>
    </body>
  );
}
