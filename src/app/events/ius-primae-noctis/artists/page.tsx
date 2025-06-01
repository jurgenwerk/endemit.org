"use client";

import EventSidebar from "@/app/components/EventSidebar";

export default function Artists() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <EventSidebar
        eventName={"Ius Primae Noctis"}
        eventPath={"/events/ius-primae-noctis"}
        fbUrl={"https://www.facebook.com/events/985739330046224"}
      />
      <div className="lg:pl-72 min-h-screen" style={{ background: "#FFFBEE" }}>
        <div className="m-auto  max-w-5xl space-y-6 p-5 text-black ">
          <h2 className="text-4xl font-bold uppercase pt-16 lg:pt-10">
            Artists
          </h2>
          <div className="mx-auto max-w-5xl pt-6">
            <div className="flex flex-col space-y-12">
              <div className="mb-0 text-3xl font-bold">MOKILOK</div>
              <div className="flex flex-col gap-8 md:flex-row">
                <img
                  src="/events/ius-primae-noctis/mokilok.jpeg"
                  alt="Mokilok"
                  className="w-full md:w-1/3"
                />
                <div className="text-xl">
                  Mokilok, our beloved festival resident, returns—this time for
                  his long-awaited debut in the castle cellar. Until now, his
                  sets have always resonated under open skies, but now we're
                  bringing his sound indoors, where stone walls will trap the
                  pressure. Expect a time-warping clash: classic '90s techno and
                  gritty hard house face off against a darker, modern edge. Back
                  to the future—under vaulted ceilings.
                </div>
              </div>

              <div className="mb-4 text-3xl font-bold uppercase">
                UNKNOWN TEXTURE
              </div>
              <div className="flex flex-col gap-8 md:flex-row">
                <img
                  src="/events/ius-primae-noctis/unknown texture.jpeg"
                  alt="Unknown Texture"
                  className="w-full md:w-1/3"
                />
                <div className="text-xl">
                  Unknown Texture is another one of Slovenia's rising hopes in
                  techno—an ever-present face at our events, now finally
                  stepping behind the booth. Known for his deep dedication to
                  the craft, he shapes his sound through analog and modular
                  hypnotic rhythms, deep frequencies, and abstract textures. A
                  true digger and sound explorer, he plays vinyl only—letting
                  the rawness of wax guide the journey. Miha is ready to
                  translate his passion into a set that resonates far beyond the
                  cellar walls.
                </div>
              </div>

              <div className="mb-4 text-3xl font-bold uppercase">RHAEGAL</div>
              <div className="flex flex-col gap-8 md:flex-row">
                <img
                  src="/events/ius-primae-noctis/rhaegal.jpeg"
                  alt="Rhaegal"
                  className="w-full md:w-1/3"
                />
                <div className="text-xl">
                  Rhaegal is heading into a packed June, with shows lined up
                  every weekend, and he's more than ready for it. He's been
                  preparing for this moment, promising to deliver something
                  fresh and out of the ordinary at every stop. Even with
                  multiple appearances, expect no repetition—just pure, evolving
                  energy. One of our own and one of the best, Bobi's about to
                  remind us exactly where the kick hits hardest.
                </div>
              </div>

              <div className="mb-4 text-3xl font-bold uppercase">MMALI</div>
              <div className="flex flex-col gap-8 md:flex-row">
                <img
                  src="/events/ius-primae-noctis/mmali.jpeg"
                  alt="MMALI"
                  className="w-full md:w-1/3"
                />
                <div className="text-xl">
                  MMali is landing on the castle terrace this time, taking over
                  the afternoon shift on the year's longest day. Known for
                  embracing every slot—from openings to closings—he uses each
                  moment to share exactly the music he feels matters most. This
                  time, expect forgotten gems and overlooked treasures, brought
                  back to life and made to resonate once more under the
                  sun-drenched stone.
                </div>
              </div>

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
