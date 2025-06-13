import Link from "next/link";
import Image from "next/image";

export default function UpcomingEvents() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">UPCOMING EVENTS</h1>
      <div>
        <Link href="/ius-primae-noctis" className="block focus:outline-none">
          <div className="border-b border-[#333333] pt-6 pb-6 h-[220px]">
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="relative h-full">
                <Image
                  src="/ius-primae-noctis/cover.jpg"
                  alt="IUS PRIMAE NOCTIS"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  IUS PRIMAE NOCTIS
                </h3>
                <p className="text-gray-400 mb-3">
                  Jun 20 2025 • Grad Kodeljevo
                </p>
                <p className="text-sm text-gray-400">
                  MOKILOK • UNKNOWN TEXTURE • RHAEGAL • MMALI
                </p>
              </div>
            </div>
          </div>
        </Link>

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
                  More info coming soon
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
