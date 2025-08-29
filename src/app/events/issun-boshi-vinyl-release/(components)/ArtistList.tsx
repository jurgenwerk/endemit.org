"use client";

import { useMemo, useState } from "react";
import {
  artistConfig,
  ArtistWithTimestamp,
  eventConfig,
} from "@/app/events/issun-boshi-vinyl-release/(config)";

import ArtistCard from "@/app/(components)/ArtistCard";

export default function ArtistList() {
  const [sortBy, setSortBy] = useState<SortOption>("default");

  type SortOption = "default" | "timestamp";

  // Convert artist data to include UTC timestamps
  const artistsWithTimestamps = useMemo((): ArtistWithTimestamp[] => {
    return artistConfig
      .filter(artist => artist.day && artist.time)
      .map(artist => {
        const [hours, minutes] = artist.time!.split(":").map(Number);
        const dayConfig =
          eventConfig.dates[artist.day as keyof typeof eventConfig.dates];

        // Create date in festival timezone
        const startDate = new Date(
          eventConfig.year,
          eventConfig.month - 1, // Month is 0-indexed
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
      });
  }, []);

  // Sort artists based on selected option
  const sortedArtists = useMemo(() => {
    if (sortBy === "timestamp") {
      return [...artistsWithTimestamps].sort(
        (a, b) => a.startTime.getTime() - b.startTime.getTime()
      );
    }
    // Default: maintain original config order
    return artistsWithTimestamps;
  }, [artistsWithTimestamps, sortBy]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold uppercase">Lineup</h3>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 ">
          <span className="text-sm font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortOption)}
            className="px-1 py-1 border border-gray-300 rounded text-sm bg-white text-issun-boshi-purple"
          >
            <option value="default">Default</option>
            <option value="timestamp">Performance Time</option>
          </select>
        </div>
      </div>

      <div className="space-y-12">
        {sortedArtists.map((artist, index) => (
          <ArtistCard
            key={`all-${index}`}
            artist={artist}
            cardClassName={"bg-black/20"}
            nameClassName={"text-issun-boshi-yellow"}
            descriptionClassName={"text-white/80 font-light"}
            timeClassName={"text-issun-boshi-orange"}
          />
        ))}
      </div>
    </div>
  );
}
