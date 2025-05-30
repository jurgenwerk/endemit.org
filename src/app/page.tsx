"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import clsx from "clsx";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const close = () => {
    setIsMenuOpen(false);
  };

  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <div className="fixed top-0 z-20 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-r-gray-950">
        <div className="flex h-14 items-center px-4 py-4 lg:h-auto lg:mt-12">
          <Link href="/" onClick={close} className="lg:mx-3 lg:ml-auto">
            <img src="/endemit.png" alt=" ENDEMIT" className="w-24" />
          </Link>
        </div>

        <button
          type="button"
          className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className="font-medium text-gray-100 group-hover:text-gray-400"
            style={{ fontSize: "14px", paddingTop: "4px" }}
          >
            MENU
          </div>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <div
          className={clsx("overflow-y-auto lg:static lg:block", {
            "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isMenuOpen,
            hidden: !isMenuOpen,
          })}
        >
          <nav className="space-y-6 px-5 pb-7 pt-5 text-xl">
            <Link
              onClick={close}
              href="/"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Events
            </Link>

            <Link
              onClick={close}
              href="/music"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Music
            </Link>

            <Link
              onClick={close}
              href="/merch"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Merch
            </Link>

            {/* <Link
              onClick={close}
              href="/location"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Mixes
            </Link> */}
          </nav>
          <div className="social-icons flex justify-end pr-6">
            <a href="https://www.facebook.com/endemit.crew" target="_blank">
              <img
                src="facebook.png"
                className="mx-2"
                style={{ width: "28px" }}
              ></img>
            </a>
            <a href="https://instagram.com/ende.mit" target="_blank">
              <img
                src="instagram.png"
                className="mx-2"
                style={{ width: "28px" }}
              ></img>
            </a>
            <a href="mailto:endemit@endemit.org" target="_blank">
              <img
                src="email.png"
                className="mx-2"
                style={{ width: "28px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div
        className="lg:pl-72 bg-[radial-gradient(ellipse_1200px_800px_at_50%_50%,_var(--tw-gradient-stops))] from-gray-950 via-black to-black"
        style={{ height: "100vh" }}
      >
        <div className="lg:max-w-3xl mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16 ">
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
                    <p>Kader Kodeljevo</p>
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
                    <p>Libeliče</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-white mb-8">SUBSCRIBE</h1>
          <div id="44afda82-3d8e-11f0-830c-53e1466456d6"></div>
          <Script
            strategy="afterInteractive"
            src="https://eocampaign1.com/form/44afda82-3d8e-11f0-830c-53e1466456d6.js"
          />
        </div>
      </div>
    </body>
  );
}
