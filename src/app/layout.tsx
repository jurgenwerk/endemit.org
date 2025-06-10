import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endemit",
  description: "Endemit",
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
