"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function IusPrimaeNoctis() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const close = () => {
    setIsMenuOpen(false);
  };

  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
        <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
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
          {isMenuOpen ? <div>x</div> : <div>y</div>}
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
              Event
            </Link>

            <Link
              onClick={close}
              href="/events/ius-primae-noctis/artists"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Artists
            </Link>

            <Link
              onClick={close}
              href="/events/ius-primae-noctis/location"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Location
            </Link>

            <Link
              onClick={close}
              href="/events/ius-primae-noctis/tickets"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Tickets
            </Link>
          </nav>
        </div>
      </div>
      <div className="lg:pl-72" style={{ height: "100vh" }}>
        <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full">
          <div className="border-2 border-white p-8">
            <h1 className="text-4xl font-bold text-white mb-6">
              Ius Primae Noctis
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Event Details
                </h2>
                <div className="space-y-4 text-white">
                  <p>
                    <span className="font-bold">Date:</span> TBA
                  </p>
                  <p>
                    <span className="font-bold">Location:</span> TBA
                  </p>
                  <p>
                    <span className="font-bold">Doors Open:</span> TBA
                  </p>
                  <p>
                    <span className="font-bold">Entry:</span> TBA
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Line Up</h2>
                <div className="space-y-4 text-white">
                  <p>TBA</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <p className="text-white">
                Ius Primae Noctis is a celebration of techno music and culture.
                Join us for an unforgettable night of music, art, and community.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors">
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
