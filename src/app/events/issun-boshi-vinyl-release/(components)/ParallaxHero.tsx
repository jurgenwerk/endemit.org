import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function ParallaxHero() {
  return (
    <div className={"pt-[20vh] bg-issun-boshi-yellow overflow-hidden"}>
      <Parallax shouldAlwaysCompleteAnimation={true} opacity={[0, 0.9]}>
        <div className="absolute w-full h-[150vh] inset-0 bg-gradient-to-t from-gray-900 to-blue-900 top-[-20vh]" />
      </Parallax>

      <div
        className={
          "overflow-hidden relative aspect-[9/16] lg:aspect-[16/9] -mt-1 "
        }
      >
        {/* Sun */}
        <Parallax
          opacity={[0.3, 1]}
          translateX={[10, -10, "easeInOut"]}
          translateY={[-15, 10, "easeInOut"]}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/1.webp"
            alt="Sun"
            className="w-full h-full object-cover animate-sun absolute"
          />
        </Parallax>

        {/* Subheadline */}
        <Parallax
          scale={[1, 1.05, "easeOutCubic"]}
          opacity={[1, 0]}
          startScroll={50}
          endScroll={200}
          shouldAlwaysCompleteAnimation={true}
          className="absolute inset-0 max-lg:-mt-[130%]"
        >
          <div className="absolute inset-0 flex items-center justify-center -mt-40">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl text-issun-boshi-blue font-thin">
              20 Sep 2025
            </h1>
          </div>
        </Parallax>

        {/* Mountain Far */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={0}
          opacity={[1, 0.8]}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/2a.webp"
            alt="Mountains Far"
            className="w-full h-full object-cover"
          />
        </Parallax>

        {/* Mountain Close */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={6}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/2b.webp"
            alt="Mountains Close"
            className="w-full h-full object-cover"
          />
        </Parallax>

        {/* Headline */}
        <Parallax
          translateY={[0, -2]}
          scale={[1, 1.05, "easeOutCubic"]}
          shouldAlwaysCompleteAnimation={true}
          className="absolute inset-0 max-lg:-mt-[130%]"
        >
          <div className="absolute inset-0 flex-col flex items-center justify-center text-shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl text-white font-thin max-lg:text-issun-boshi-blue">
              Issun-bōshi vinyl release
            </h1>
            <div className="text-2xl text-white">INLAND • MMALI</div>
          </div>
        </Parallax>

        {/* Hills Far */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={5}
          className="absolute inset-0"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/3.webp"
            alt="Hills Far"
            className="w-full h-full object-cover"
          />
        </Parallax>

        {/* Buildings */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={10}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/7.webp"
            alt="Buildings"
            className="w-full h-full object-cover"
          />
        </Parallax>

        {/* Hills Close */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={8}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/4.webp"
            alt="Hills Close"
            className="w-full h-full object-cover"
          />
        </Parallax>

        {/* Floor Pane */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={5}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/5.webp"
            alt="Floor"
            className="w-full h-full object-cover"
          />
        </Parallax>

        {/* Stage desktop */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={5}
          translateX={[80, 0, "easeOutQuad"]}
          startScroll={150}
          endScroll={400}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/6.webp"
            alt="Stage"
            className="w-full h-full object-cover max-lg:hidden"
          />
        </Parallax>

        {/* Stage mobile */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={5}
          translateX={[60, 20, "easeOutQuad"]}
          startScroll={300}
          endScroll={850}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/6.webp"
            alt="Stage"
            className="w-full h-full object-cover lg:hidden"
          />
        </Parallax>

        {/* Tree */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={5}
          translateX={[-20, 0, "easeInOut"]}
          className="absolute inset-0 max-lg:hidden"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/8.webp"
            alt="Tree"
            className="w-full h-full object-cover"
          />
        </Parallax>

        {/* Clouds */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          speed={5}
          translateX={[20, 0, "easeInOut"]}
          className="absolute inset-0 max-lg:-ml-[200%]"
        >
          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/9a.webp"
            alt="Cloud 1"
            className={
              "absolute animate-float-cloud w-full h-full object-cover"
            }
          />

          <Image
            width={1000}
            height={400}
            src="/issun-boshi-vinyl-release/parallax-layers/9b.webp"
            alt="Cloud 2"
            className={
              "absolute animate-float-cloud-alt w-full h-full object-cover"
            }
          />
        </Parallax>
      </div>
    </div>
  );
}
