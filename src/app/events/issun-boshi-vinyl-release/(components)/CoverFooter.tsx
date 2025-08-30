import Image from "next/image";

export default function CoverFooter() {
  return (
    <div className="pointer-events-none w-full relative -z-10 -bottom-4 aspect-video overflow-hidden lg:-mt-36 -mt-10">
      <div className="absolute top-20 right-0 pr-12 font-typo text-right">
        <h3 className="text-issun-boshi-red text-4xl">Issun Boshi vinyl release</h3>
        <h4 className="font-light">Grad kodeljevo, 20 Sep 2025</h4>
      </div>
      <Image
          src="/issun-boshi-vinyl-release/parallax-layers/2b.png"
          alt="Issun Boshi Vinyl release"
          width={1000}
          height={400}
          className="w-full transform absolute bottom-0 -scale-x-100 z-10 "
        />
        <Image
          src="/issun-boshi-vinyl-release/parallax-layers/10.png"
          alt="Issun Boshi Vinyl release"
          width={1000}
          height={400}
          className="w-full transform absolute bottom-0 z-20"
        />
        <Image
          src="/issun-boshi-vinyl-release/parallax-layers/4.png"
          alt="Issun Boshi Vinyl release"
          width={1000}
          height={400}
          className="w-full transform absolute -bottom-6 z-10"
        />
        <Image
          src="/issun-boshi-vinyl-release/parallax-layers/7.png"
          alt="Issun Boshi Vinyl release"
          width={1000}
          height={400}
          className="w-full transform animate-rave-125bmp  absolute -bottom-6 z-0"
        />
    </div>
  );
}
