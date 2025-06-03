"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import LandingPageSidebar from "@/app/components/LandingPageSidebar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const close = () => {
    setIsMenuOpen(false);
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
          <h1 className="text-3xl font-bold text-white mb-2 mt-12">
            SUBSCRIBE
          </h1>
          <p className="text-gray-400 mb-8">
            Receive updates about our next events
          </p>
          <div className="max-w-md">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value;
                const button = form.querySelector(
                  "button"
                ) as HTMLButtonElement;
                const originalText = button.textContent;

                try {
                  button.textContent = "Subscribing...";
                  button.disabled = true;

                  const response = await fetch("/api/endemit-subscribe", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                    throw new Error(data.error || "Failed to subscribe");
                  }

                  button.textContent = "Subscribed!";
                  form.reset();
                } catch (error) {
                  button.textContent = originalText;
                  button.disabled = false;
                  alert(
                    error instanceof Error
                      ? error.message
                      : "Failed to subscribe"
                  );
                }
              }}
              className="space-y-4"
            >
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
