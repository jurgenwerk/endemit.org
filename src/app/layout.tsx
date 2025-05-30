import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Endemit",
  description: "Endemit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      {children}
    </html>
  );
}
