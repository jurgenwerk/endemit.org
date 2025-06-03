"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function LandingPageSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const close = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 z-20 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-r-gray-950">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto lg:mt-12">
        <Link href="/" onClick={close} className="lg:mx-3 lg:ml-auto">
          <Image
            src="/endemit.png"
            alt="ENDEMIT"
            width={96}
            height={24}
            className="w-24"
          />
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
        <nav className="px-5 pb-7 pt-5 text-xl space-y-2">
          <Link
            onClick={close}
            href="/events"
            className="block rounded-md px-3 py-2 text-right font-medium uppercase hover:text-gray-300 sm:pt-2 pt-4"
          >
            Events
          </Link>

          <Link
            onClick={close}
            href="/music"
            className="block rounded-md px-3 py-2 text-right font-medium uppercase hover:text-gray-300 sm:pt-2 pt-4"
          >
            Music
          </Link>

          <Link
            onClick={close}
            href="/merch"
            className="block rounded-md px-3 py-2 text-right font-medium uppercase hover:text-gray-300 sm:pt-2 pt-4"
          >
            Merch
          </Link>
        </nav>
        <div className="social-icons flex justify-end pr-6">
          <a href="https://www.facebook.com/endemit.crew" target="_blank">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={28}
              height={28}
              className="mx-2"
            />
          </a>
          <a href="https://instagram.com/ende.mit" target="_blank">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={28}
              height={28}
              className="mx-2"
            />
          </a>
          <a href="mailto:endemit@endemit.org" target="_blank">
            <Image
              src="/email.png"
              alt="Email"
              width={28}
              height={28}
              className="mx-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
