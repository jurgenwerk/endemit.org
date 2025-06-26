import Link from "next/link";
import Image from "next/image";

export default function UpcomingEvents() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">UPCOMING EVENTS</h1>
      <div>
        <Link
          href="/endemit-festival"
          className="block focus:outline-none mt-2 "
        >
          <div className="border-b border-[#333333] pt-4 pb-6 h-[220px]">
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="relative h-full">
                <Image
                  src="/endemit-festival/cover-without-border.jpg"
                  alt="Endemit Festival 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  ENDEMIT FESTIVAL
                </h3>
                <p className="text-gray-400 mb-3">15-17 Aug 2025 • Libeliče</p>
                {/* <p className="text-sm text-gray-400">
                  RENE WISE • BESTE HIRA • PVTR • BEKO • VINTER • RHAEGAL •
                  MATERIAL OBJECT • TONSKE • OBSCUR • MMALI
                </p> */}
                <div className="text-sm text-gray-400">
                  RENE WISE • BESTE HIRA • PVTR • BEKO • VINTER • MMALI •
                  RHAEGAL • DJ LABRANA • OMNIA VOX • MATERIAL OBJECT • TONSKE •
                  OBSCUR
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Endemit Label Release Event */}
        <div className="border-b border-[#333333] pt-4 pb-4">
          <div>
            <span className="text-xl font-bold text-white">
              ENDEMIT LABEL RELEASE PARTY
            </span>
            <span className="text-gray-400 ml-3">
              20 Sep 2025, Grad Kodeljevo
            </span>
            <span className="text-sm text-gray-400 ml-3">INLAND • MMALI</span>
          </div>
        </div>

        {/* X Event */}
        <div className="border-b border-[#333333] pt-4 pb-4">
          <div>
            <span className="text-xl font-bold text-white">TBA</span>
            <span className="text-gray-400 ml-3">
              21 Nov 2025, Grad Kodeljevo
            </span>
            <span className="text-sm text-gray-400 ml-3">PULSO • RHAEGAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
