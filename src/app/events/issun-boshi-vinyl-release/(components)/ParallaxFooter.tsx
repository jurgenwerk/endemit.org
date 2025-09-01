import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function ParallaxFooter() {
  return (
    <div className="-mt-20 lg:-mt-96 pointer-events-none">
      <Parallax
        shouldAlwaysCompleteAnimation={true}
        translateY={[-100, 20]}
        className="w-full"
      >
        <Image
          src="/images/issun-boshi-vinyl-release/parallax-layers/2b.webp"
          alt="Issun-bōshi  Vinyl release"
          width={1000}
          height={400}
          className="w-full transform -scale-x-100 z-10"
        />
      </Parallax>

      <Parallax
        shouldAlwaysCompleteAnimation={true}
        translateY={[100, 10]}
        translateX={[300, 0]}
        scale={[0.4, 0.8]}
        className="w-full  absolute bottom-0 z-20"
      >
        <Image
          src="/images/issun-boshi-vinyl-release/parallax-layers/10.webp"
          alt="Issun-bōshi  Vinyl release"
          width={1000}
          height={400}
          className="w-full transform "
        />
      </Parallax>

      <Parallax
        shouldAlwaysCompleteAnimation={true}
        translateY={[40, 20]}
        className="w-full absolute bottom-0 z-10"
      >
        <Image
          src="/images/issun-boshi-vinyl-release/parallax-layers/4.webp"
          alt="Issun-bōshi  Vinyl release"
          width={1000}
          height={400}
          className="w-full transform "
        />
      </Parallax>

      {/* Blok */}
      <Parallax
        shouldAlwaysCompleteAnimation={true}
        translateY={[80, 20]}
        className="w-full absolute bottom-0 z-0"
      >
        <Image
          src="/images/issun-boshi-vinyl-release/parallax-layers/7.webp"
          alt="Issun-bōshi  Vinyl release"
          width={1000}
          height={400}
          className="w-full transform animate-rave-125bmp"
        />
      </Parallax>
    </div>
  );
}
