import { ArtistWithTimestamp } from "@/app/events/(past)/endemit-festival/(config)";
import Image from "next/image";
import { formatDay, formatTime } from "@/app/(lib)/util";
import { HTMLProps } from "react";
import clsx from "clsx";

interface ArtistCardProps {
  artist: ArtistWithTimestamp;
  cardClassName?: HTMLProps<HTMLElement>["className"];
  nameClassName?: HTMLProps<HTMLElement>["className"];
  descriptionClassName?: HTMLProps<HTMLElement>["className"];
  timeClassName?: HTMLProps<HTMLElement>["className"];
}

export default function ArtistCard({
  artist,
  cardClassName = "bg-white/80",
  nameClassName = "font-bold mb-4 text-gray-900",
  descriptionClassName = "text-gray-700 ",
  timeClassName = "font-bold text-gray-900",
}: ArtistCardProps) {
  return (
    <div
      className={clsx(
        "backdrop-blur-sm rounded-lg p-6 shadow-lg",
        cardClassName
      )}
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Artist Photo */}
        <div className="lg:w-1/3 flex-shrink-0">
          <div className="relative w-full rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={artist.photo}
              alt={artist.name}
              width={400}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                      <div class="w-full h-64 lg:h-80 flex items-center justify-center bg-gray-300">
                        <div class="text-center">
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
            <h3
              className={clsx(
                "text-2xl lg:text-3xl mb-4 uppercase",
                nameClassName
              )}
            >
              {artist.name}
            </h3>
          </div>

          <p
            className={clsx(
              "leading-relaxed text-sm lg:text-base",
              descriptionClassName
            )}
          >
            {artist.description}
          </p>

          {/* Stage and Time Info */}
          <div className="mt-4 space-y-2">
            <div
              className={clsx("text-lg lg:text-xl uppercase", timeClassName)}
            >
              {formatDay(artist.startTime)} {formatTime(artist.startTime)} -{" "}
              {formatTime(artist.endTime)}
              {artist.stage && ` @ ${artist.stage}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
