import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "Exclusive Endemit merchandise, coming soon.",
  openGraph: {
    description: "Exclusive Endemit merchandise, coming soon.",
    images: ["/endemit-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Merch() {
  return (
    <div className="lg:max-w-3xl mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16">
      <h1 className="text-3xl font-bold text-white mb-8">MERCH</h1>
      <div className="text-2xl text-gray-400">COMING SOON</div>
    </div>
  );
}
