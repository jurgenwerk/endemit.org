"use client";

import ParallaxHero from "@/app/events/issun-boshi-vinyl-release/(components)/ParallaxHero";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Button from "@/app/(components)/Button";
import ParallaxFooter from "@/app/events/issun-boshi-vinyl-release/(components)/ParallaxFooter";
import ParallaxAlbum from "@/app/events/issun-boshi-vinyl-release/(components)/ParallaxAlbum";
import Link from "next/link";

export default function IssunBoshiVinylReleasePage() {
  return (
    <ParallaxProvider>
      <div className="lg:max-w-100 mx-auto  sm:max-w-full overflow-hidden font-typo">
        <ParallaxHero />

        <div className="relative w-full z-10 min-h-screen">
          <div className="w-full h-2 bg-[#f5cf98]" />

          <div className="flex flex-col gap-y-28 p-28">
            <div>
              <div className="text-4xl text-center text-issun-boshi-yellow">
                20 Sep 2025
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2 text-lg">
                <Image
                  src="/kader.png"
                  alt="Kader"
                  width={16}
                  height={16}
                  className="w-4"
                />
                <span>Kader - Grad Kodeljevo</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center space-x-2 text-sm">
              <div className="relative">
                <ParallaxAlbum />
              </div>
            </div>

            <div className="text-center  left-0 w-full flex flex-col items-center top-[8%] md:top-[12%] ">
              <div className="text-center text-4xl md:text-4xl lg:text-5xl uppercase text-white lg:w-3/4 md:w-4/5 mx-4 pb-16">
                After a decade of both creative blockade and artistic growth,
                MMali is set to present his first vinyl release.
              </div>
              <div className="text-center text-xl md:text-2xl lg:text-3xl font-light text-white mt-4 lg:w-2/3 md:w-4/5 mx-4">
                Named after his alter ego Issun-Boshi, a one-inch samurai who
                overcomes all obstacles to win the heart of a princess, owning
                his shortcomings and outgrowing them.
                <br />
                <br />
                Accompanied on this journey by his brother-by-heart and master
                Ed Davenport, also known as Inland, MMali is about to open a new
                chapter in life{" "}
                <Link
                  className={"text-issun-boshi-yellow font-normal link"}
                  href={"/events/issun-boshi-vinyl-release/location"}
                >
                  on 20 September in Kader
                </Link>
                , adding production skills to his mixing achievements.
                <br />
                <br />
                For the first time, his warm-up set will feature his own
                production, available exclusively for purchase at the event. And
                who else would be better to close this special Endemit edition
                than Inland himself, the brother who mastered the sound of the
                first Endemit EP release.
              </div>
            </div>

            <Parallax
              shouldAlwaysCompleteAnimation={true}
              scale={[1.2, 1, "easeInOutCubic"]}
            >
              <div className="flex flex-col gap-4 items-center justify-center">
                <Button href="/events/issun-boshi-vinyl-release/tickets">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    role="img"
                    color="#000000"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.75 20.75H20C21.5188 20.75 22.75 19.5188 22.75 18V14.5C22.75 14.0858 22.4142 13.75 22 13.75C21.0335 13.75 20.25 12.9665 20.25 12C20.25 11.0335 21.0335 10.25 22 10.25C22.4142 10.25 22.75 9.91421 22.75 9.5V6C22.75 4.48122 21.5188 3.25 20 3.25H9.75V20.75ZM8.25 3.25H4C2.48122 3.25 1.25 4.48122 1.25 6V9.5C1.25 9.91421 1.58579 10.25 2 10.25C2.9665 10.25 3.75 11.0335 3.75 12C3.75 12.9665 2.9665 13.75 2 13.75C1.58579 13.75 1.25 14.0858 1.25 14.5V18C1.25 19.5188 2.48122 20.75 4 20.75H8.25L8.25 3.25Z"
                      fill="#000000"
                    ></path>
                  </svg>
                  Get tickets
                </Button>

                <div>
                  {["@19 • Warm up w/ Rahul", "@22 • MMali", "@03 • Inland"].map(
                    artist => (
                      <div
                        key={artist}
                        className="text-issun-boshi-orange text-md"
                      >
                        {artist}
                      </div>
                    )
                  )}
                </div>
              </div>
            </Parallax>
          </div>
          <ParallaxFooter />
        </div>
      </div>
    </ParallaxProvider>
  );
}
