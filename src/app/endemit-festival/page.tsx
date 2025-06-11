"use client";

import EventSidebar from "@/app/components/EventSidebar";
import Image from "next/image";

export default function EndemitFestival() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <EventSidebar
        eventName={"Endemit Festival"}
        eventPath={"/endemit-festival"}
        fbUrl={"https://www.facebook.com/endemit.crew"}
        location={{
          name: "Libeliče, Koroška",
          address: "15-17 Aug 2025",
        }}
        ticketsEnabled={false}
      />
      <div className="lg:pl-72 min-h-screen" style={{ background: "#FFFBEE" }}>
        <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full">
          <Image
            src="/endemit-festival/cover.jpg"
            alt="Endemit Festival"
            width={500}
            height={300}
            className="lg:max-w-[500px] mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16"
            style={{ marginTop: "0px" }}
          />

          <hr className="mx-auto mt-10 w-1/2 border-gray-400"></hr>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">SUBSCRIBE</h1>
            <p className="text-gray-600 mb-8">
              Receive more info and updates about the festival
            </p>
            <div className="max-w-md mx-auto mb-12">
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

                    const response = await fetch("/api/festival-subscribe", {
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
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          <hr className="mx-auto mt-4 w-1/2 border-gray-400" />

          <div className="mt-4 flex items-center justify-center space-x-2 text-sm">
            <span>Libeliče, Slovenia</span>
          </div>
        </div>
      </div>
    </body>
  );
}
