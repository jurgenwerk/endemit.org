"use client";

import LandingPageSidebar from "@/app/components/LandingPageSidebar";

export default function About() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <LandingPageSidebar />
      <div
        className="lg:pl-72 bg-[radial-gradient(ellipse_1200px_800px_at_50%_50%,_var(--tw-gradient-stops))] from-gray-950 via-black to-black"
        style={{ minHeight: "100vh" }}
      >
        <div className="lg:max-w-3xl mx-auto sm:max-w-full pt-24 px-6 lg:pt-16">
          <h1 className="text-3xl font-bold text-white mb-8">ABOUT</h1>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Endemit is a collective of individuals drawn to sound, code, and
              image — quietly crafting in their own time. Each project is a
              reflection of personal obsessions and shared values.
            </p>

            <p className="text-lg leading-relaxed">
              Our gatherings are rare moments when these inner worlds surface —
              shaped with care, emotion, and intent. No two are the same, but
              all come from the same place.
            </p>

            <p className="text-lg leading-relaxed">
              We move only when the moment is right. When we do, we build spaces
              that invite presence — for ourselves, and for those who find us.
            </p>

            <p className="text-lg leading-relaxed">
              We'll keep creating as long as there's something inside worth
              expressing. No more. No less.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">CONTACT</h2>
              <p className="text-gray-400">
                For bookings, collaborations, or general inquiries:
              </p>
              <p className="text-gray-300 mt-2">
                <a
                  href="mailto:endemit@endemit.org"
                  className="hover:text-white"
                >
                  endemit@endemit.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
