"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Artists() {
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
              href="/events/ius-primae-noctis"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Home
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
            <h1 className="text-4xl font-bold text-white mb-6">Artists</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Artist cards */}
              <div className="border-2 border-white p-6">
                <div className="aspect-square bg-gray-800 mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Artist Name
                </h3>
                <p className="text-white mb-4">Genre: Techno</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    SoundCloud
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    Instagram
                  </a>
                </div>
              </div>

              <div className="border-2 border-white p-6">
                <div className="aspect-square bg-gray-800 mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Artist Name
                </h3>
                <p className="text-white mb-4">Genre: Techno</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    SoundCloud
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    Instagram
                  </a>
                </div>
              </div>

              <div className="border-2 border-white p-6">
                <div className="aspect-square bg-gray-800 mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Artist Name
                </h3>
                <p className="text-white mb-4">Genre: Techno</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    SoundCloud
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                About the Line-up
              </h2>
              <p className="text-white">
                Our carefully curated selection of artists represents the finest
                in techno music, bringing together both established names and
                emerging talents for an unforgettable night of music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
