"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import clsx from "clsx";

export default function Music() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const close = () => {
    setIsMenuOpen(false);
  };

  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <div className="fixed top-0 z-20 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-r-gray-950">
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
        <div className="lg:max-w-3xl mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16">
          <h1 className="text-3xl font-bold text-white mb-8">MUSIC</h1>
          <div className="text-2xl text-gray-400">COMING SOON</div>
        </div>
      </div>
    </body>
  );
}
