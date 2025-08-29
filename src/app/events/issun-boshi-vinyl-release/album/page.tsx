import Image from "next/image";
import Headline from "@/app/events/issun-boshi-vinyl-release/(components)/Headline";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Album",
};

export default function AlbumPage() {
  return (
    <div className="m-auto max-w-5xl space-y-6 p-5 font-typo">
      <Headline title="Album" />
      <p className="text-xl font-light">
        {" "}
        The album will be available for purchase exclusively at the event and in
        limited quantities.
      </p>
      <div className="mt-4 flex items-center justify-center space-x-2 text-sm py-32">
        <div className="relative z-10">
          <Image
            src="/issun-boshi-vinyl-release/album/issun-boshi-cover.png"
            alt="Issun Boshi Vinyl release"
            width={400}
            height={400}
            className="z-10 relative"
          />

          <Image
            src="/issun-boshi-vinyl-release/album/issun-boshi-record.png"
            alt="Issun Boshi Vinyl release"
            width={400}
            height={400}
            className="animate-spin ml-52 absolute top-0"
          />
        </div>
        <div className={"absolute w-full z-0 -translate-y-1/3"}>
          <Image
            src="/issun-boshi-vinyl-release/parallax-layers/4.png"
            alt="Issun Boshi Vinyl release"
            width={1000}
            height={400}
            className="w-full transform "
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2 text-sm py-32 flex-col">
        <div className="text-issun-boshi-yellow text-2xl font-light">Price</div>
        <div className={"text-white text-5xl relative z-10"}>35 €</div>
      </div>
      <div>
        ARTIST: MMali
TITLE: Issun-bōshi

Inori 祈り
Gensō 幻想
Matsuri 祭 (Inland Endemit Dub)
Matsuri 祭

Written and Produced by Matej Mirnik.
Graphic/Layout by Nejc Dornik.

Mixed and Mastered by Inland.

Endemit 001

      </div>
    </div>
  );
}
