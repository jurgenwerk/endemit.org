import {ArtistWithTimestamp} from "@/app/(content_pages)/endemit-festival/config";
import Image from "next/image";
import {formatDay, formatTime} from "@/app/lib/util";
import clsx from "clsx";

interface ArtistCardProps {
  artist: ArtistWithTimestamp;
  isLive?: boolean;
  mounted?: boolean;
}

export default function ArtistCard({artist, isLive = false, mounted = false}: ArtistCardProps) {
  return (
    <div
      className={clsx("bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg",
        isLive ? "border-2 border-black" : "")}
    >
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Artist Photo */}
        <div className="lg:w-1/3 flex-shrink-0">
          <div className="relative w-full rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={artist.photo}
              alt={artist.name}
              width={isLive ? 200 : 400}
              height={isLive ? 300 : 600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                      <div class="w-full h-64 lg:h-80 flex items-center justify-center bg-gray-300">
                        <div class="text-center">
                          <div class="text-6xl mb-2">🎵</div>
                          <div class="text-gray-600 font-medium">Photo Coming Soon</div>
                        </div>
                      </div>
                  `;
                }
              }}
            />
          </div>
        </div>

        {/* Artist Info */}
        <div className="lg:w-2/3 flex flex-col justify-center">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 uppercase">
              {artist.name}
            </h3>
            {isLive && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                LIVE NOW
              </span>
            )}
          </div>
          {!isLive && (
          <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
            {artist.description}
          </p>)}

          {/* Stage and Time Info */}
          <div className="mt-4 space-y-2">
            <div className="text-lg lg:text-xl font-bold text-gray-900 uppercase">
             {!isLive && mounted && formatDay(artist.startTime)} {isLive && mounted && "PLAYING NOW" } {mounted && formatTime(artist.startTime)} -{" "}
              {mounted && formatTime(artist.endTime)} @ {artist.stage}
            </div>
          </div>
        </div>
      </div>
    </div>)

}
