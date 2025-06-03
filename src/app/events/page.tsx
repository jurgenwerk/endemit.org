"use client";

import Link from "next/link";
import Image from "next/image";
import LandingPageSidebar from "@/app/components/LandingPageSidebar";

export default function Events() {
  const close = () => {
    // Remove the unused isMenuOpen variable
  };

  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <LandingPageSidebar />
      {/* Main Content */}
      <div
        className="lg:pl-72 bg-[radial-gradient(ellipse_1200px_800px_at_50%_50%,_var(--tw-gradient-stops))] from-gray-950 via-black to-black"
        style={{ height: "100vh" }}
      >
        <div className="lg:max-w-3xl mx-auto sm:max-w-full pt-24 px-4 lg:pt-16">
          <h1 className="text-3xl font-bold text-white mb-8">
            UPCOMING EVENTS
          </h1>
          <div>
            <Link
              onClick={close}
              href="/events/ius-primae-noctis"
              className="block focus:outline-none"
            >
              <div className="border-b border-[#333333] pt-6 pb-6 h-[220px]">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="relative h-full">
                    <Image
                      src="/events/ius-primae-noctis/cover.jpg"
                      alt="IUS PRIMAE NOCTIS"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-6">
                      IUS PRIMAE NOCTIS
                    </h3>
                    <p className="mb-6">Jun 20 2025</p>
                    <p>Grad Kodeljevo</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              onClick={close}
              href="/events/endemit-festival"
              className="block focus:outline-none mt-2"
            >
              <div className="border-b border-[#333333] pt-4 pb-6 h-[220px]">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="relative h-full">
                    <Image
                      src="/events/festival-2025/cover.jpg"
                      alt="Endemit Festival 2025"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-6">ENDEMIT FESTIVAL</h3>
                    <p className="mb-6">15-18 Aug 2025</p>
                    <p>Libeliče, Slovenia</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}
