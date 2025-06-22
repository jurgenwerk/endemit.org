"use client";

import LandingPageSidebar from "@/app/components/LandingPageSidebar";
import UpcomingEvents from "@/app/components/UpcomingEvents";

export default function Home() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <LandingPageSidebar />
      {/* Main Content */}
      <div
        className="lg:pl-72 bg-[radial-gradient(ellipse_1200px_800px_at_50%_50%,_var(--tw-gradient-stops))] from-gray-950 via-black to-black"
        style={{ height: "100vh" }}
      >
        <div className="lg:max-w-3xl mx-auto sm:max-w-full pt-24 px-6 lg:pt-16">
          <UpcomingEvents />
          <h1 className="text-3xl font-bold text-white mb-2 mt-12">
            SUBSCRIBE
          </h1>
          <p className="text-gray-400 mb-8">
            Receive updates about our next events
          </p>
          <div className="max-w-md mb-12">
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

              <br />
              <br />
              <br />
            </form>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h1 className="text-3xl font-bold text-white mb-4">ABOUT</h1>
            <p className="text-gray-400 mb-6">
              Endemit is a collective of individuals drawn to sound, code, and
              image — quietly crafting in their own time. Each project is a
              reflection of personal obsessions and shared values.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}
