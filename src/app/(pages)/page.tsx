import Link from "next/link";

export default function Home() {
  return (
    <div className={"grid grid-cols-12 grid-rows-5 gap-2 p-2"}>
      <div className="col-span-12 col-star-1 row-start-1">test</div>
      <div
        className={
          "col-start-1 row-start-2 h-full w-full col-span-3 bg-white text-black "
        }
      >
        rega gadsgsd
      </div>
      <Link
        href={"/store/merch/tshirt-endemit-2025-edition"}
        className={
          "col-start-4 row-start-2  w-full col-span-6 bg-yellow-50 text-black overflow-hidden aspect-square row-span-2 relative group select-none cursor-pointer"
        }
      >
        <div
          className={
            "absolute border-[20px] border-white inset-0 scale-125 group-hover:scale-100 transition-transform z-10 ease-in-out"
          }
        ></div>
        <div
          className={
            "group-hover:scale-125 transition-transform relative ease-in-out"
          }
        >
          <video
            src="https://endemit.cdn.prismic.io/endemit/aOeRpJ5xUNkB1yBT_temp_product_video.mp4"
            className={"w-full object-cover object-center aspect-square"}
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
        </div>

        <div
          className={
            "absolute inset-0  text-[10vw] lg:text-[8vw] xl:text-[100px] white uppercase p-5 group-hover:scale-90 transition-transform  ease-in-out group-hover:mix-blend-exclusion text-white"
          }
        >
          T-SHIRT 2025
        </div>
      </Link>
      <div
        className={
          "col-start-10 row-start-2  border-8 h-full w-full col-span-3 bg-red-300 text-black"
        }
      >
        rega gadsgsd
      </div>

      <div
        className={
          "col-start-1 row-start-3 border-white border-2 h-full w-full col-span-3 bg-white text-black aspect-square"
        }
      >
        rega gadsgsd
      </div>
    </div>
  );
}
