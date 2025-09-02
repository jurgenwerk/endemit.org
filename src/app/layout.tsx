import type { Metadata } from "next";
import "./(styles)/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: {
    default: "Endemit",
    template: "%s • Endemit",
  },
  description:
    "Endemit is a cultural association and a collective of individuals drawn to sound, code, and image, quietly crafting in their own time. Each project is a reflection of personal obsessions and shared values.",
  keywords: [
    "endemit",
    "techno",
    "rave",
    "ljubljana",
    "libeliče",
    "ljubljana techno",
    "art",
    "music",
    "creative",
  ],
  authors: [{ name: "Endemit" }],
  creator: "Endemit",
  publisher: "Endemit",
  manifest: "/manifest.json",
  metadataBase: new URL("https://endemit.org"),

  openGraph: {
    title: "Endemit",
    description:
      "Endemit is a cultural association and a collective of individuals drawn to sound, code, and image, quietly crafting in their own time.",
    url: "https://endemit.org",
    siteName: "Endemit",
    images: [
      {
        url: "/images/og/endemit-og.png",
        width: 1200,
        height: 800,
        alt: "Endemit - Cultural association for sound, code, and image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Endemit",
    description:
      "Cultural association and collective drawn to sound, code, and image",
    images: ["/images/og/endemit-og.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/endemit-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/images/endemit-logo.png" }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Arts & Culture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <Analytics />
      <Providers>{children}</Providers>
    </html>
  );
}
