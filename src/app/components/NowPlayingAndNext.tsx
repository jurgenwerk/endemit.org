"use client";

import {ArtistWithTimestamp, artistConfig, eventConfig} from "@/app/(content_pages)/endemit-festival/config";
import {useEffect, useState, useMemo} from "react";
import ArtistCard from "@/app/components/ArtistCard";
import {formatDay, formatTime, getTimeUntil} from "@/app/lib/util";
import Image from "next/image";


export default function NowPlayingAndNext() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);

  // Convert artist data to include UTC timestamps
  const artistsWithTimestamps = useMemo((): ArtistWithTimestamp[] => {
    return artistConfig
      .filter((artist) => artist.day && artist.time)
      .map((artist) => {
        const [hours, minutes] = artist.time!.split(":").map(Number);
        const dayConfig = eventConfig.dates[artist.day as keyof typeof eventConfig.dates];

        // Create date in festival timezone
        const startDate = new Date(
          eventConfig.year,
          (eventConfig.month - 1), // Month is 0-indexed
          dayConfig,
          hours,
          minutes
        );

        const duration = artist.duration || 150; // Default 150 minutes if not specified
        const endDate = new Date(startDate.getTime() + duration * 60 * 1000);

        return {
          ...artist,
          startTime: startDate,
          endTime: endDate,
        };
      })
  }, []);

  const artistsSortedInOrder = useMemo((): ArtistWithTimestamp[] => {
    return [...artistsWithTimestamps]
      .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  }, [artistsWithTimestamps]);

  // Find currently playing artists
  const nowPlaying = useMemo(() => {
    return artistsSortedInOrder.filter((artist) => {
      const now = currentTime.getTime();
      return now >= artist.startTime.getTime() && now < artist.endTime.getTime();
    });
  }, [currentTime, artistsSortedInOrder]);

  // Find upcoming artists
  const upNext = useMemo(() => {
    const now = currentTime.getTime();
    const nextArtists: ArtistWithTimestamp[] = [];

    const stageArtists = artistsSortedInOrder
      .filter((artist) => artist.startTime.getTime() > now)
      .slice(0, 2);
    nextArtists.push(...stageArtists);

    return nextArtists.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  }, [currentTime, artistsSortedInOrder]);

  // Update current time every minute
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Live Status Section */}
      {nowPlaying.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold uppercase">Now Playing</h3>
          {nowPlaying.map((artist, index) => (
            <ArtistCard key={`live-${index}`} artist={artist} isLive={true} mounted={mounted}/>
          ))}
        </div>
      )}

      {/* Up Next Section */}
      {upNext.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold uppercase">Up Next</h3>
          <div className="grid gap-4">
            {upNext.map((artist, index) => (
              <div
                key={`next-${index}`}
                className="bg-blue-50 rounded-lg p-4 border "
              >
                <div className="flex justify-between items-center">
                  <Image src={artist.photo} alt={artist.name} width={100} height={100} className="rounded-lg" />
                  <div>
                    <h4 className="font-bold text-lg">{artist.name}</h4>
                    <p className="text-sm text-gray-600">
                      {artist.stage} • {formatDay(artist.startTime)}{" "}
                      {formatTime(artist.startTime)}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">
                        {getTimeUntil(currentTime, artist.startTime)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
