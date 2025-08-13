"use client";

import {ArtistWithTimestamp,  artistConfig, eventConfig} from "@/app/(content_pages)/endemit-festival/config";
import {useMemo} from "react";
import ArtistCard from "@/app/components/ArtistCard";
import NowPlayingAndNext from "@/app/components/NowPlayingAndNext";


export default function Artists() {

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



    return (
        <div className="m-auto max-w-5xl space-y-6 p-5 text-black">
            <h2 className="text-4xl font-bold uppercase pt-16 lg:pt-10">Artists</h2>

            <NowPlayingAndNext />

            {/* All Artists (sorted by config order) */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase">Lineup</h3>
                <div className="space-y-12">
                    {artistsWithTimestamps.map((artist, index) => (
                        <ArtistCard key={`all-${index}`} artist={artist} mounted={true} />
                    ))}
                </div>
            </div>
        </div>
    );
}
