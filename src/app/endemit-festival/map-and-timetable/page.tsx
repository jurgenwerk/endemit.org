import Image from "next/image";

export default function MapAndTimetable() {
    return (
        <div className="m-auto max-w-5xl space-y-6 p-5 text-black">
            <h2 className="text-4xl font-bold uppercase pt-16 lg:pt-10">
                MAP & TIMETABLE
            </h2>
            <p className="text-xl leading-relaxed">
                Navigate our enchanted valley like the wanderers before you, and with the wisdom of knowing exactly
                where you&apos;re headed. Our festival map reveals groves and amenities for your stay, while our carefully
                curated timetable ensures you&apos;ll discover every artist and enjoy the magical corners of
                our wilderness at just the right moment.
            </p>
            <Image className="rounded-lg" src="/endemit-festival/map/endemit-festival-map-2025.webp"
                   alt="Endemit 2025 festival map" width={3000} height={4263}/>

            <Image className="rounded-lg" src="/endemit-festival/timetable/endemit-festival-timetable-2025.png"
                   alt="Endemit 2025 festival timetable" width={1523} height={676}/>
        </div>
    );
}
