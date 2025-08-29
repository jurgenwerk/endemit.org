import { BannerLayer, Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxHero() {
  const mountainFar: BannerLayer = {
    image: "/issun-boshi-vinyl-release/parallax-layers/2a.png",
    shouldAlwaysCompleteAnimation: true,
    speed: 0,
    opacity: [1, 0.8],
  };

  const mountainClose: BannerLayer = {
    image: "/issun-boshi-vinyl-release/parallax-layers/2b.png",
    shouldAlwaysCompleteAnimation: true,
    speed: 6,
  };

  const hillsFar: BannerLayer = {
    image: "/issun-boshi-vinyl-release/parallax-layers/3.png",
    shouldAlwaysCompleteAnimation: true,
    speed: 5,
  };

  const hillsClose: BannerLayer = {
    image: "/issun-boshi-vinyl-release/parallax-layers/4.png",
    shouldAlwaysCompleteAnimation: true,
    speed: 8,
  };

  const floorPane: BannerLayer = {
    image: "/issun-boshi-vinyl-release/parallax-layers/5.png",
    shouldAlwaysCompleteAnimation: true,
    speed: 5,
  };

  const stage: BannerLayer = {
    image: "/issun-boshi-vinyl-release/parallax-layers/6.png",
    shouldAlwaysCompleteAnimation: true,
    speed: 5,
    translateX: [80, 0, "easeOutQuad"],
    startScroll: 150,
    endScroll: 400,
  };

  const buildings: BannerLayer = {
    image: "/issun-boshi-vinyl-release/parallax-layers/7.png",
    shouldAlwaysCompleteAnimation: true,
    speed: 10,
  };

  const clouds: BannerLayer = {
    children: (
      <>
        <div className="absolute animate-float-cloud w-full">
          <img src="/issun-boshi-vinyl-release/parallax-layers/9a.png" />
        </div>
        <div className="absolute animate-float-cloud-alt w-full">
          <img src="/issun-boshi-vinyl-release/parallax-layers/9b.png" />
        </div>
      </>
    ),
    shouldAlwaysCompleteAnimation: true,
    speed: 5,
    translateX: [20, 0, "easeInOut"],
  };

  const tree: BannerLayer = {
    image: "/issun-boshi-vinyl-release/parallax-layers/8.png",
    shouldAlwaysCompleteAnimation: true,
    speed: 5,
    translateX: [-20, 0, "easeInOut"],
  };

  const sun: BannerLayer = {
    children: (
      <div className="absolute animate-sun">
        <img src="/issun-boshi-vinyl-release/parallax-layers/1.png" />
      </div>
    ),
    opacity: [0.3, 1],
    translateX: [-20, 0, "easeInOut"],
    translateY: [10, 30, "easeInOut"],
  };

  const subheadline: BannerLayer = {
    scale: [1, 1.05, "easeOutCubic"],
    opacity: [1, 0],
    startScroll: 50,
    endScroll: 200,
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center -mt-40">
        <h1 className="text-2xl sm:text-2xl  lg:text-3xl xl:text-4xl text-issun-boshi-blue font-thin">
          20 Sep 2025
        </h1>
      </div>
    ),
  };

  const headline: BannerLayer = {
    translateY: [0, -2],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex-col flex items-center justify-center text-shadow-lg  ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-white font-thin ">
          Issun-Bōshi vinyl release
        </h1>
        <div className="text-2xl text-white ">
          INLAND • MMALI
        </div>
      </div>
    ),
  };

  return (
    <div className={"pt-[20vh]  bg-issun-boshi-yellow overflow-hidden"}>
      <Parallax shouldAlwaysCompleteAnimation={true} opacity={[0, 0.9]}>
        <div className="absolute w-full h-[120vh] inset-0 bg-gradient-to-t from-gray-900 to-blue-900 top-[-20vh]" />
      </Parallax>
      <ParallaxBanner
        layers={[
          sun,
          subheadline,
          mountainFar,
          mountainClose,
          headline,
          hillsFar,
          buildings,
          hillsClose,
          floorPane,
          stage,
          tree,
          clouds,
        ]}
        className="aspect-[9/16] lg:aspect-[16/9]   "
      />
    </div>
  );
}
