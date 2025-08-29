import { ArtistWithTimestamp } from "@/app/events/(past)/endemit-festival/(config)";
import Image from "next/image";
import { formatDay, formatTime, getTimeUntil } from "@/app/(lib)/util";
import clsx from "clsx";

interface ArtistSnippetProps {
  artist: ArtistWithTimestamp;
  isLive?: boolean;
  currentTime: Date;
}

export default function ArtistSnippet({
  artist,
  isLive = false,
  currentTime,
}: ArtistSnippetProps) {
  return (
    <div
      className={clsx(
        " rounded-lg p-4 border select-none pointer-events-none shadow-md bg-white/80 backdrop-blur-sm",
        isLive ? "bg-purple-50" : ""
      )}
    >
      <div className="flex justify-between items-center gap-4">
        <Image
          src={artist.photo}
          alt={artist.name}
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="flex-1">
          <h4 className="font-bold text-xl">{artist.name}</h4>
          <div className="text-lg text-gray-600">
            {!isLive &&
              `${formatDay(artist.startTime)}, ${formatTime(artist.startTime)}`}
            {isLive && (
              <span className="animate-pulse text-red-600 flex gap-1 items-center">
                <span className="inline-block bg-red-600 rounded-full w-2 h-2 -mt-1"></span>
                LIVE NOW
              </span>
            )}
          </div>
          <div>
            {!isLive && getTimeUntil(currentTime, artist.startTime)}
            {artist.stage && <span>&nbsp;@ {artist.stage}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
