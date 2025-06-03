"use client";

import LandingPageSidebar from "@/app/components/LandingPageSidebar";

export default function Music() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <LandingPageSidebar />
      {/* Main Content */}
      <div
        className="lg:pl-72 bg-[radial-gradient(ellipse_1200px_800px_at_50%_50%,_var(--tw-gradient-stops))] from-gray-950 via-black to-black"
        style={{ height: "100vh" }}
      >
        <div className="lg:max-w-3xl mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16">
          <h1 className="text-3xl font-bold text-white mb-8">MUSIC</h1>
          <div className="text-2xl text-gray-400">COMING SOON</div>
        </div>
      </div>
    </body>
  );
}
