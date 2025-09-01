import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function ParallaxAlbum() {
  return (
    <Parallax
      shouldAlwaysCompleteAnimation={true}
      scale={[0.8, 1, "easeInOutCubic"]}
      className="max-lg:pb-36"
      startScroll={400}
      endScroll={800}
    >
      <Image
        src="/images/issun-boshi-vinyl-release/album/issun-boshi-cover.webp"
        alt="Issun-bōshi  Vinyl release"
        width={400}
        height={400}
        className="z-10 relative"
      />

      {/* Desktop only */}
      <Parallax
        shouldAlwaysCompleteAnimation={true}
        translateX={[-40, 0, "easeInOutCubic"]}
        className="absolute top-0 max-lg:hidden"
      >
        <Image
          src="/images/issun-boshi-vinyl-release/album/issun-boshi-record.webp"
          alt="Issun-bōshi  Vinyl release"
          width={400}
          height={400}
          className="animate-slow-spin ml-52"
        />
      </Parallax>

      {/* Mobile only */}
      <Parallax
        shouldAlwaysCompleteAnimation={true}
        translateY={[-30, -10, "easeInOutCubic"]}
        className="absolute top-0 lg:hidden"
      >
        <Image
          src="/images/issun-boshi-vinyl-release/album/issun-boshi-record.webp"
          alt="Issun-bōshi  Vinyl release"
          width={400}
          height={400}
          className="animate-slow-spin mt-52"
        />
      </Parallax>
    </Parallax>
  );
}
