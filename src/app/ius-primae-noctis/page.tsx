import EventSidebar from "@/app/components/EventSidebar";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ius Primae Noctis",
  description:
    "Electronic music event by Endemit in Kader, Grad Kodeljevo, June 20 2025. Featuring MOKILOK, UNKNOWN TEXTURE, RHAEGAL, and MMALI.",
  openGraph: {
    title: "Ius Primae Noctis",
    description:
      "Electronic music event by Endemit in Kader, Grad Kodeljevo, June 20 2025. Featuring MOKILOK, UNKNOWN TEXTURE, RHAEGAL, and MMALI.",
    images: ["/ius-primae-noctis/main.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function IusPrimaeNoctis() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <EventSidebar
        eventName={"Ius Primae Noctis"}
        eventPath={"/ius-primae-noctis"}
        fbUrl={"https://www.facebook.com/events/985739330046224"}
      />
      <div
        className="lg:pl-72 min-h-screen"
        style={{ background: "rgb(47, 65, 109)" }}
      >
        <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full font-metamorphous">
          <Image
            src="/ius-primae-noctis/main.jpg"
            alt="Ius Primae Noctis"
            width={500}
            height={300}
            className="lg:max-w-[500px] mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16"
            style={{ marginTop: "0px" }}
          />

          <hr className="mx-auto mt-10 w-1/2 border-gray-400"></hr>

          <Link href={`/ius-primae-noctis/artists`} className="pt-2">
            <h3 className="main-text-color mt-6 text-center text-xl md:text-2xl ">
              MOKILOK
            </h3>
            <h3 className="main-text-color pt-2 text-center text-xl md:text-2xl ">
              UNKNOWN TEXTURE
            </h3>
            <h3 className="main-text-color pt-2 text-center text-xl md:text-2xl ">
              RHAEGAL
            </h3>
            <h3 className="main-text-color pt-2 text-center text-xl md:text-2xl ">
              MMALI
            </h3>
          </Link>

          <hr className="mx-auto mt-4 w-1/2 border-gray-400" />

          <div className="mt-4 flex items-center justify-center space-x-2 text-sm">
            <Image
              src="/kader.png"
              alt="Kader"
              width={16}
              height={16}
              className="w-4"
            />
            <span>Kader - Grad Kodeljevo</span>
          </div>

          <div className="pt-8">
            <p className="text-center">
              Nedovžnost endemitskega plemena
              <br />
              je ostavo v vzvratnem ogledalo.
              <br />
              Mokre sanje o domački pod Kodelskim nebom
              <br />
              in vinilskem razdevičenjo pod grajsko streho
              <br />
              se bojo matrjalizirale še predn jih
              <br />
              Suzana pokaže na poletnem roko.
            </p>
            <p className="pt-4 text-center">
              Pleme si jemle pravico prve poletne noči -<br />
              manifestacija globokih zvočnih odnosov
              <br />
              ob sončevem obratu ne rabi privolitve.
              <br />
              Raztegni prepono za najdalšo predigro pod soncem
              <br />
              in trikratni vrhunec v mgli
              <br />
              klti, pa prpraj si robčke, da nevš spt
              <br />
              briso sokov telesnih užitkov z zoknom.
            </p>
            <p className="pt-4 text-center">
              <b>Nizek štart ob 17.00 na grajski terasi.</b>
            </p>

            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </body>
  );
}
