import Link from "next/link";
import Image from "next/image";

export default function PastEvents() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8 mt-12">PAST EVENTS</h1>
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
      </div>
    </div>
  );
}
