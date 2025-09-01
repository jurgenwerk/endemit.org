import type { Metadata } from "next";
import "./(styles)/globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Endemit",
    template: "%s • Endemit",
  },
  description: "Series of events curated by Endemit crew.",
  openGraph: {
    title: "Endemit",
    description: "Series of events curated by Endemit crew.",
    images: ["/images/endemit-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <Analytics />
      {children}
    </html>
  );
}
