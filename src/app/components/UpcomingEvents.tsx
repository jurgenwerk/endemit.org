import Link from "next/link";
import Image from "next/image";

export default function UpcomingEvents() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">UPCOMING EVENTS</h1>
      <div>
        <div className="border-b border-[#333333] pt-4 pb-4">
          <div>
            <span className="text-lg md:text-xl font-bold text-white">
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
            <span className="text-lg md:text-xl font-bold text-white">TBA</span>
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
