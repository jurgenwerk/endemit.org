import type { Metadata } from "next";

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
  return children;
}
