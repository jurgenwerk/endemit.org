import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function ParallaxAlbum() {
  return (
    <Parallax
      shouldAlwaysCompleteAnimation={true}
      scale={[0.8, 1, "easeInOutCubic"]}
      startScroll={400}
      endScroll={800}
    >
      <Image
        src="/issun-boshi-vinyl-release/album/issun-boshi-cover.png"
        alt="Issun Boshi Vinyl release"
        width={400}
        height={400}
        className="z-10 relative"
      />

      <Parallax
        shouldAlwaysCompleteAnimation={true}
        translateX={[-40, 0, "easeInOutCubic"]}
        className="absolute top-0"
      >
        <Image
          src="/issun-boshi-vinyl-release/album/issun-boshi-record.png"
          alt="Issun Boshi Vinyl release"
          width={400}
          height={400}
          className="animate-slow-spin ml-52"
        />
      </Parallax>
    </Parallax>
  );
}
