"use client";

import FestivalSubscribe from "@/app/components/FestivalSubscribe";

export default function EndemitFestival() {
    return (
        <div className="lg:max-w-100 mx-auto  sm:max-w-full">
            <div
                className="main-image-background"
                style={{
                    background:
                        "url('/endemit-festival/hero-cover-landscape.jpg') no-repeat center center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100vh",
                    position: "relative",
                }}
            >
                <div
                    className="text-center absolute left-0 w-full flex flex-col items-center"
                    style={{top: "15%"}}
                >
                    <div className="text-center text-5xl md:text-5xl lg:text-6xl font-bold uppercase text-white">
                        Endemit Festival
                    </div>
                    <div className="text-center text-2xl md:text-2xl lg:text-3xl font-bold uppercase text-white mt-4">
                        Libeliče, 15-17 Aug 2025
                    </div>
                </div>
            </div>
            <div
                className="festival-description-background mt-0 mb-8"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgb(0 0 0 / 55%) 1200px, rgba(87, 87, 87, 0.26)), url('/endemit-festival/festival-description-bg.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100vh",
                    position: "relative",
                }}
            >
                <div className="text-center absolute left-0 w-full flex flex-col items-center top-[8%] md:top-[12%]">
                    <div
                        className="text-center text-4xl md:text-4xl lg:text-5xl font-bold uppercase text-white lg:w-3/4 md:w-4/5 mx-4">
                        A carefully curated electronic music festival, surrounded by a
                        river, forest, and mountains.
                    </div>
                    <div
                        className="text-center text-2xl md:text-3xl lg:text-4xl font-bold  text-white mt-4 lg:w-2/3 md:w-4/5 mx-4">
                        <br></br>Back to the source. <br></br>
                        <br></br>That time of year is calling us home — to the forest
                        that knows us, to the ground that holds us, and to each other.
                        <br></br>
                        <br></br>
                        This time, we move quietly. No big posts, no loud invites. Just
                        us – and those we trust to feel the same. The word travels from
                        friend to friend. From heart to heart. From those who hear the
                        silence between the bass. Hidden, but deeply connected.{" "}
                    </div>
                </div>
            </div>
            <FestivalSubscribe/>
            <hr className="mx-auto mt-4 w-1/2 border-gray-400"/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}
