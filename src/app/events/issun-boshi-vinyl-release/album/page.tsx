import Image from "next/image";
import Headline from "@/app/events/issun-boshi-vinyl-release/(components)/Headline";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Album",
};

export default function AlbumPage() {
  return (
    <div className="max-w-5xl space-y-6 p-5 lg:px-12 font-typo flex-1">
      <Headline title="Album" />
      <p className="text-xl font-light">
        {" "}
        The album will be available for purchase exclusively at the event and in
        limited quantities.
      </p>
      <div className="mt-4 flex items-center justify-center space-x-2 text-sm pt-12 lg:pt-32 overflow-hidden ">
        <div className="relative z-10 group pt-[200px] max-lg:pointer-events-none">
          <Image
            src="/issun-boshi-vinyl-release/album/issun-boshi-cover.webp"
            alt="Issun Boshi Vinyl release"
            width={400}
            height={400}
            className="z-10 relative group-hover:scale-[0.95] transition-transform ease-in-out"
          />
          <div className="absolute top-0 group-hover:translate-y-[200px] group-hover:scale-[0.95]  ease-in-out transition-transform">
            <Image
              src="/issun-boshi-vinyl-release/album/issun-boshi-record.webp"
              alt="Issun Boshi Vinyl release"
              width={400}
              height={400}
              className="animate-slow-spin"
            />
          </div>

          <div className={"font-light pt-8 text-lg text-center"}>
            MMali • Issun-bōshi • <span className="text-issun-boshi-yellow">35 €</span>
          </div>
        </div>

        <div
          className={
            "absolute left-0 right-0 z-0 -translate-y-1/3 h-full bg-center bg-cover w-full !m-0 bg-no-repeat"
          }
          style={{
            backgroundImage:
              "url('/issun-boshi-vinyl-release/parallax-layers/4.webp')",
          }}
        />
      </div>

      <div className="lg:px-32">
        <div className="text-center ">
          <hr className="border-t border-issun-boshi-yellow/80 my-12 border-dashed" />
          {[
            "Inori 祈り",
            "Gensō 幻想",
            "Matsuri 祭 (Inland Endemit Dub)",
            "Matsuri 祭",
          ].map(track => (
            <div
              key={track}
              className="text-issun-boshi-yellow text-lg font-light py-2 "
            >
              {track}
            </div>
          ))}
          <hr className="border-t border-issun-boshi-yellow/80 my-12 border-dashed" />
        </div>
        <div className="text-center font-thin py-8">
          {[
            "Written and Produced by Matej Mirnik.",
            "Graphic/Layout by Nejc Dornik.",
            "Mixed and Mastered by Inland.",
            "Endemit 001",
          ].map(track => (
            <div
              key={track}
              className="text-issun-boshi-white py-2 "
            >
              {track}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
