"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface EventSidebarProps {
  eventName: string;
  eventPath: string;
  fbUrl: string;
  ticketsText?: string;
  ticketsEnabled?: boolean;
  location?: {
    name: string;
    address?: string;
  };
}

export default function EventSidebar({
  eventName,
  eventPath,
  fbUrl,
  ticketsText = "TICKETS",
  ticketsEnabled = true,
  location = {
    name: "Grad Kodeljevo",
    address: "Ul. Carla Benza 20",
  },
}: EventSidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const close = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
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
            href="/"
            className="block rounded-md px-3 py-2 text-right font-medium uppercase hover:text-gray-300 sm:pt-2 pt-4"
          >
            ← Home
          </Link>
          <Link
            onClick={close}
            href={eventPath}
            className="block rounded-md px-3 py-2 text-right font-medium uppercase hover:text-gray-300 sm:pt-2 pt-4"
          >
            {eventName}
          </Link>

          <div className="space-y-3">
            <Link
              onClick={close}
              href={`${eventPath}/artists`}
              className="block rounded-md px-3 py-2 text-right font-medium uppercase hover:text-gray-300 sm:pt-2 pt-4"
            >
              Artists
            </Link>
            <Link
              onClick={close}
              href={`${eventPath}/location`}
              className="block rounded-md px-3 py-2 text-right font-medium uppercase hover:text-gray-300 sm:pt-2 pt-4"
            >
              Location
            </Link>
            {ticketsEnabled && (
              <Link
                onClick={close}
                href={`${eventPath}/tickets`}
                className="block rounded-md px-3 py-2 text-right font-medium uppercase hover:text-gray-300 sm:pt-2 pt-4"
              >
                {ticketsText}
              </Link>
            )}
          </div>
        </nav>
        <div className="social-icons flex justify-end pr-6">
          <a href={fbUrl} target="_blank">
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

        <div className="hidden sm:block absolute fixed bottom-0 m-0 w-full">
          <div className="flex flex-row justify-between bg-black p-3.5 lg:px-5 lg:py-3">
            <div className="my-auto flex">
              {ticketsEnabled && (
                <a
                  className="block rounded-md border px-5 py-1 font-medium hover:text-gray-100"
                  style={{ paddingTop: "7px", letterSpacing: "0.6px" }}
                  href={`${eventPath}/tickets`}
                >
                  {ticketsText}
                </a>
              )}
            </div>
            <div
              className="flex flex-col justify-between text-sm"
              style={{ paddingTop: "3px" }}
            >
              <a className="" href={`${eventPath}/location`}>
                <div className="text-right">{location.name}</div>
                {location.address && <div>{location.address}</div>}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
