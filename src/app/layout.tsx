import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Endemit",
    template: "%s | Endemit",
  },
  description: "Series of events curated by Endemit crew.",
  openGraph: {
    title: "Endemit",
    description: "Series of events curated by Endemit crew.",
    images: ["/endemit-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/endemit-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      {children}
      {/* <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      </body> */}
    </html>
  );
}
