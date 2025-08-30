import Headline from "@/app/events/issun-boshi-vinyl-release/(components)/Headline";
import type { Metadata } from "next";
import ArtistList from "@/app/events/issun-boshi-vinyl-release/(components)/ArtistList";
import CustomArtistCarousel from "@/app/events/issun-boshi-vinyl-release/(components)/CustomArtistCarousel";
import React from "react";
import CoverFooter from "@/app/events/issun-boshi-vinyl-release/(components)/CoverFooter";

export const metadata: Metadata = {
  title: "Artists",
};

export default function ArtistsPage() {
  return (
    <>
      <div className="m-auto max-w-5xl space-y-6 p-5 lg:px-12 font-typo pb-16 min-h-screen">
        <Headline title="Artists" />

        <CustomArtistCarousel />

        <ArtistList />
      </div>
      <CoverFooter />
    </>
  );
}
