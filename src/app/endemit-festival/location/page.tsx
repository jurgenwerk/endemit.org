"use client";

import EventSidebar from "@/app/components/EventSidebar";
import EventFooter from "@/components/EventFooter";
import Image from "next/image";

export default function Location() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <EventSidebar
        eventName={"Endemit Festival"}
        eventPath={"/endemit-festival"}
        fbUrl={"https://www.facebook.com/endemit.crew"}
        ticketsPath={"/endemit-festival/subscribe"}
        ticketsText={"SUBSCRIBE"}
      />
      <div
        className="lg:pl-72 min-h-screen"
        style={{ background: "rgb(226 221 255)" }}
      >
        <div className="m-auto max-w-5xl space-y-8 p-5 text-black">
          <h2 className="text-4xl font-bold uppercase pt-16 lg:pt-10">
            Location
          </h2>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              The festival will be held in Koroška, Slovenia, just outside the
              quaint village of Libeliče. You can find us at{" "}
              <a
                className="underline hover:text-blue-600 transition-colors"
                href="https://www.google.com/maps/place/Tribej+7,+2372+Libeli%C4%8De/@46.6089017,14.9706109,17z/data=!3m1!4b1!4m6!3m5!1s0x476ffaa62de870a7:0x509cf221bbea4a5e!8m2!3d46.6089017!4d14.9731858!16s%2Fg%2F11bw3x_1hm?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tribej 7, 2372 Libeliče
              </a>
              . Turn right in front of the house toward the river, and look for
              the mark X.
            </p>

            <p className="text-xl leading-relaxed">
              Coordinates for teleporters:{" "}
              <a
                className="underline hover:text-blue-600 transition-colors"
                href="https://www.google.com/maps/place/46%C2%B036'35.3%22N+14%C2%B058'24.6%22E/@46.609796,14.9709271,17z/data=!3m1!4b1!4m4!3m3!8m2!3d46.609796!4d14.973502?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                46.609796, 14.973502
              </a>
            </p>

            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/endemit-festival/location-libelice.jpg"
                alt="Libelice festival camp"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-xl leading-relaxed">
              The event kicks off at 18:00. You&apos;ll have ample time to
              settle in, pitch your tent, and prepare for the festivities.
            </p>

            <p className="text-xl leading-relaxed">
              ℹ️ For more information about camping and other accommodations,
              check the{" "}
              <a
                className=" hover:text-blue-600 transition-colors"
                href="/accommodation"
              >
                Accommodation
              </a>{" "}
              page.
            </p>

            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/endemit-festival/festival-decor.jpg"
                alt="Libelice festival camp"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold uppercase mt-12">
              Accommodation
            </h2>

            <p className="text-xl leading-relaxed">
              The camping area encircles the entire venue, allowing everyone to
              find the perfect spot. Feel at home, but to maintain harmony with
              your neighbors, please respect the rules of nature and keep the
              area clean.
            </p>

            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/endemit-festival/izvir - šotori.jpeg"
                alt="Libelice festival camp"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/endemit-festival/camp-1.jpg"
                alt="Libelice festival camp"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-xl leading-relaxed">
              For camper vans, there&apos;s a designated parking area (with
              electric plugs) available on a first-come, first-served basis –
              it&apos;s the law of nature!
            </p>

            <p className="text-xl leading-relaxed">
              For those seeking more comfort, we recommend nearby accommodations
              such as Korošica Hotel, Ta Fabrika lodgings, Hostel Punkl, and
              more. Feel free to reach out if you need help finding the perfect
              spot.
            </p>

            <h2 className="text-4xl font-bold uppercase">Toilet and Showers</h2>

            <p className="text-xl leading-relaxed">
              Pleasant and clean restrooms and showers will provide comfortable
              and private facilities for personal hygiene. The structure is
              located by a stream, built from wood, and offers a completely
              different experience from what you&apos;re used to at similar
              events.
            </p>

            <p className="text-xl leading-relaxed">
              These facilities are properly maintained and cleaned regularly to
              ensure hygiene and comfort for everyone.
            </p>

            <p className="text-xl leading-relaxed">
              Let&apos;s practice water conservation when showering, ensuring
              that everyone can enjoy the facilities by being mindful of our
              usage.
            </p>

            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/endemit-festival/rener-plac.jpeg"
                alt="Libelice festival camp"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <EventFooter
        ticketsLink="/endemit-festival/subscribe"
        ticketsText="SUBSCRIBE"
        locationName="Libeliče, Koroška"
        locationAddress="15-17 Aug 2025"
        locationLink="/endemit-festival/location"
      />
    </body>
  );
}
