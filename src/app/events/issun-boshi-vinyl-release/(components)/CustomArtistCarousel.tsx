import ArtistCarousel from "@/app/(components)/ArtistCarousel";

export default function CustomArtistCarousel() {
  return (
    <ArtistCarousel
          dayDividerClassName="bg-black text-issun-boshi-yellow  bg-opacity-20"
          cardClassName="bg-issun-boshi-yellow/90"
          liveCardClassName="bg-issun-boshi-orange/90"
          descriptionClassName="text-issun-boshi-purple font-light"
          nameClassName="text-black"

        />
  );
}
