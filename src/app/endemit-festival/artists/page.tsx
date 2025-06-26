"use client";

import EventSidebar from "@/app/components/EventSidebar";
import EventFooter from "@/components/EventFooter";
import Image from "next/image";

interface Artist {
  name: string;
  photo: string;
  description: string;
}

const artists: Artist[] = [
  {
    name: "Rene Wise",
    photo: "/endemit-festival/artists/rene-wise.jpeg",
    description:
      "Rene Wise delivers powerful, percussive techno to stir up movement. His signature sound is grounded and driving — raw but modern rhythm set in motion to create atmospheric soundscapes, where body and sound converge. Never overbearing, always precise and in control. He curates the imprint Moving Pressure, a label that reflects his sound aesthetic: stripped-down, groove-heavy techno, coming from a background of percussion. Obscur's recent release on the label connects our scene with Rene's through a shared sonic ethos — tight, raw, and deeply felt.",
  },
  {
    name: "Beste Hira",
    photo: "/endemit-festival/artists/beste-hira.jpeg",
    description:
      "Beste Hira brings a fearless approach to uplifting the dancefloor, making peace offerings of dense percussion, abstract melodies and compelling rhythms to perform a high-energy sonic ritual. Expect an intense, shape-shifting set that never ceases to follow its own narrative.",
  },
  {
    name: "Vinter",
    photo: "/endemit-festival/artists/vinter.jpeg",
    description:
      "Vinter's sound is marked by his use of contrast — balancing between restraint and release, restraint never being a true option in his (mind)set. His music taste is sharp, yet somehow emotional, his selections setting the boundaries of techno to stone with precision and flair. He is a trusted presence to push the atmosphere to its limits right before the main act.",
  },
  {
    name: "Rhaegal",
    photo: "/endemit-festival/artists/rhaegal.jpeg",
    description:
      "Rhaegal has been stepping up his appearances, delivering dark masterpieces at each stop he has made on his ever evolving path as an artist. His closing sets are an underground experience of the vast emotional terrain, designed for exploring the inward sphere of the infinite. He also runs the label Hands for the Creator, dealing a hand of otherworldly sounds to the listener.",
  },
  {
    name: "DJ Labrana",
    photo: "/endemit-festival/artists/labrana.jpeg",
    description:
      "Labrana is that rare sound-collecting beast who understands the music should speak to the mind without any preconceptions. Expect an uplifting daytime selection of house, disco and leftfield oddities. Playful yet deep, with just the right amount of unpredictability in pattern.",
  },
  {
    name: "Omnia Vox",
    photo: "/endemit-festival/artists/omnia-vox.jpeg",
    description:
      "Omnia Vox is a sculptor of soundscapes that breathe and shift their attention to the next stop of the unexplored with ease and natural flow. Using ambient, drone, and organic recordings, his sets are a much-needed decompression — a platform for reflection and reset.",
  },
  {
    name: "Material Object",
    photo: "/endemit-festival/artists/material-object.jpeg",
    description:
      "Material Object is a master of sonic architecture, constructing a multidimensional atmosphere of abstract techno, ambient and psychedelic components. A producer and performer, embraced by worldwide audiences and record labels, has evolved his style through collabs with the sensei of electronic music Pete Namlook and brought his distinct sound to venues like Berghain or Labyrinth festival. Originating from Aussieland, he is now establishing his new hub in Slovenia, debuting at Endemit amidst the Carinthian forest.",
  },
  {
    name: "Tonske",
    photo: "/endemit-festival/artists/tonske.jpeg",
    description:
      "Tonske is a selector from Velenje, known for precise, groove-driven constructions built upon minimal foundations. His focus is on flow, tight transitions, and stripped-back control. He's also the mind behind Cogo, another Slovenian forward-thinking label dedicated to exploratory electronic music.",
  },
  {
    name: "Obscur",
    photo: "/endemit-festival/artists/obscur.jpeg",
    description:
      "Obscur channels the energy into the dancefloor with a sound that's raw, industrial and hypnotic. His work with Modularz, Paralelo and Newrhythmic labels speaks volumes about his music skills, his passion for the techno genre transcending his producer persona to deliver zestful performances. His sets are dense and physical, pulling the listener towards a rift of dark frequency range without losing forward momentum.",
  },
  {
    name: "Beko",
    photo: "/endemit-festival/artists/beko.jpeg",
    description:
      "Beko blends hypnotic grooves with raw textures and a fine-tuned progressive touch. His sets, played exclusively on vinyl, are assembled with patience and sheer focus, guiding the listener through parallel mind states without ever losing the track. A true craftsman of on-point momentum.",
  },
  {
    name: "MMali",
    photo: "/placeholder-artist.jpg", // No photo available
    description:
      "MMali brings our annual Endemit journey to a close with an ever emotional performance, shaped by the rarest ambient, trance, post-rock and experimental techno gems. His sets transcend genres to reflect his playful, explorative and delicately hardened character, who knows just when to stir up the dancefloor raw or cradle it gently, immersing the tribe in the feelings of affinity, deep gratitude and yearning for the next gathering.",
  },
  {
    name: "Pvtr",
    photo: "/placeholder-artist.jpg", // No photo available
    description:
      "Pvtr has drawn up a blueprint for interlacing ambient techno with dub influences and meditative rhythms, encouraging a deep interaction between spacious yet subtle sonic structures. His gradual immersion in the vastness of the unknown invites stillness and focus, exploring the space between sound with much diligence and intent. Expect a thoughtful journey into the depths of techno.",
  },
];

export default function Artists() {
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
        <div className="m-auto max-w-6xl space-y-8 p-5 text-black">
          <h2 className="text-4xl font-bold uppercase pt-16 lg:pt-10">
            Artists
          </h2>

          <div className="space-y-12">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Artist Photo */}
                  <div className="lg:w-1/3 flex-shrink-0">
                    {artist.photo === "/placeholder-artist.jpg" ? (
                      <div className="w-full h-64 lg:h-80 rounded-lg bg-gray-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-2">🎵</div>
                          <div className="text-gray-600 font-medium">
                            Photo Coming Soon
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full rounded-lg overflow-hidden bg-gray-200">
                        <Image
                          src={artist.photo}
                          alt={artist.name}
                          width={400}
                          height={600}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          onError={(e) => {
                            console.error(
                              `Failed to load image for ${artist.name}:`,
                              artist.photo
                            );
                            // Fallback to placeholder
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-64 lg:h-80 flex items-center justify-center bg-gray-300">
                                  <div class="text-center">
                                    <div class="text-6xl mb-2">🎵</div>
                                    <div class="text-gray-600 font-medium">Photo Coming Soon</div>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Artist Info */}
                  <div className="lg:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 uppercase">
                      {artist.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                      {artist.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
