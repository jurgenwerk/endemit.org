import type { Metadata } from "next";
import Sidebar from "@/app/(components)/Sidebar";
import EventFooter from "@/app/(components)/EventFooter";

export const metadata: Metadata = {
  title: {
    default: "Endemit",
    template: "%s | Endemit",
  },
  description:
    "Electronic music event by Endemit in Kader, Grad Kodeljevo, June 20 2025. Tickets available now.",
  openGraph: {
    title: "Endemit",
    description:
      "Electronic music event by Endemit in Kader, Grad Kodeljevo, June 20 2025. Tickets available now.",
    images: ["/ius-primae-noctis/cover.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/endemit-logo.jpg",
  },
};

export default function IusPrimaeNoctisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <Sidebar
        navigationItems={[
          {
            label: "← Home",
            href: "/",
          },
          {
            label: "Ius Primae Noctis",
            href: "/events/ius-primae-noctis",
          },
          {
            label: "Artists",
            href: "/events/ius-primae-noctis/artists",
          },
          {
            label: "Location",
            href: "/events/ius-primae-noctis/location",
          },
          {
            label: "Tickets",
            href: "/events/ius-primae-noctis/tickets",
          },
        ]}
        socialLinks={[
          {
            href: "https://www.facebook.com/events/985739330046224",
            iconSrc: "/facebook.png",
            alt: "Facebook",
          },
          {
            href: "https://instagram.com/ende.mit",
            iconSrc: "/instagram.png",
            alt: "Instagram",
          },
          {
            href: "mailto:endemit@endemit.org",
            iconSrc: "/email.png",
            alt: "Email",
          },
        ]}
        footerAction={{
          label: "Tickets",
          href: "/events/ius-primae-noctis/tickets",
          style: "button",
        }}
        footerInfo={{
          lines: ["Grad Kodeljevo", "Ul. Carla Benza 20"], // Assuming default location
          href: "/events/ius-primae-noctis/location",
        }}
      />
      {children}

      <EventFooter ticketsLink={"/events/ius-primae-noctis/tickets"} />
    </body>
  );
}
