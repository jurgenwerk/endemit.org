"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Events() {
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
              Home
            </Link>

            <Link
              onClick={close}
              href="/events"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Events
            </Link>

            <Link
              onClick={close}
              href="/mixes"
              className="block rounded-md px-3 py-2  text-right font-medium uppercase hover:text-gray-300"
            >
              Mixes
            </Link>
          </nav>
        </div>
      </div>
      <div className="lg:pl-72" style={{ height: "100vh" }}>
        <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full">
          <h1 className="text-4xl font-bold text-white mb-8">Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event cards will go here */}
            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-2">
                <Link onClick={close} href="/events/ius-primae-noctis">
                  Ius Primae Noctis
                </Link>
              </h3>
              <p className="mb-4">Date: TBA</p>
              <p>Location: TBA</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
