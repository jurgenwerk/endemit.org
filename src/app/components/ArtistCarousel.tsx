"use client";
import {ArtistWithTimestamp, artistConfig, eventConfig} from "@/app/(content_pages)/endemit-festival/config";
import {useEffect, useState, useMemo, useRef, memo, useCallback} from "react";
import ArtistSnippet from "@/app/components/ArtistSnippet";

interface ArtistCarouselProps {
  headline?: string;
}

const getArtistsWithTimestamps = (): ArtistWithTimestamp[] => {
  return artistConfig
    .filter((artist) => artist.day && artist.time)
    .map((artist) => {
      const [hours, minutes] = artist.time!.split(":").map(Number);
      const dayConfig = eventConfig.dates[artist.day as keyof typeof eventConfig.dates];

      const startDate = new Date(
        eventConfig.year,
        (eventConfig.month - 1),
        dayConfig,
        hours,
        minutes
      );
      const duration = artist.duration || 150;
      const endDate = new Date(startDate.getTime() + duration * 60 * 1000);

      return {
        ...artist,
        startTime: startDate,
        endTime: endDate,
      };
    });
};

const ARTISTS_WITH_TIMESTAMPS = getArtistsWithTimestamps();
const ARTISTS_SORTED_BY_TIME = [...ARTISTS_WITH_TIMESTAMPS]
  .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

const getTimelineItems = (timelineArtists: ArtistWithTimestamp[]) => {
  const items: Array<{
    type: 'artist' | 'day-divider';
    artist?: ArtistWithTimestamp;
    day?: string;
    date?: Date;
    id: string;
  }> = [];

  let currentDay = '';

  timelineArtists.forEach((artist, index) => {
    const artistDay = artist.day;

    if (artistDay && artistDay !== currentDay) {
      items.push({
        type: 'day-divider',
        day: artistDay,
        date: artist.startTime,
        id: `day-${artistDay}-${artist.startTime.getTime()}`
      });
      currentDay = artistDay;
    }

    items.push({
      type: 'artist',
      artist,
      id: `artist-${artist.id || artist.name}-${index}`
    });
  });

  return items;
};

function ArtistCarousel({headline = 'Up next'}: ArtistCarouselProps) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const lastScrollTimeRef = useRef<number>(0);

  const currentTimeStamp = useMemo(() => currentTime.getTime(), [currentTime]);

  // Only recalculate when artists actually change their status (not every minute)
  const timelineArtists = useMemo(() => {
    return ARTISTS_SORTED_BY_TIME.filter((artist) => {
      return artist.endTime.getTime() > currentTimeStamp;
    });
  }, [currentTimeStamp]);

  const timelineItems = useMemo(() => {
    return getTimelineItems(timelineArtists);
  }, [timelineArtists]);

  const isArtistLive = useCallback((artist: ArtistWithTimestamp) => {
    return currentTimeStamp >= artist.startTime.getTime() &&
      currentTimeStamp < artist.endTime.getTime();
  }, [currentTimeStamp]);

  // Debounced scroll function
  const scrollToRelevantArtist = useCallback(() => {
    if (!mounted || !scrollContainerRef.current || timelineItems.length === 0) return;

    const now = Date.now();
    // Debounce scroll updates to prevent excessive scrolling
    if (now - lastScrollTimeRef.current < 5000) return;

    const firstRelevantIndex = timelineItems.findIndex(item => {
      if (item.type === 'artist' && item.artist) {
        return item.artist.endTime.getTime() > currentTimeStamp;
      }
      return false;
    });

    if (firstRelevantIndex > 0) {
      const scrollToIndex = Math.max(0, firstRelevantIndex - 1);
      const itemWidth = 320;
      scrollContainerRef.current.scrollTo({
        left: scrollToIndex * itemWidth,
        behavior: 'smooth'
      });
      lastScrollTimeRef.current = now;
    }
  }, [mounted, currentTimeStamp, timelineItems]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDown, startX, scrollLeft]);

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDown(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!scrollContainerRef.current) return;
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  }, []);


  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll effect with debouncing
  useEffect(() => {
    scrollToRelevantArtist();
  }, [scrollToRelevantArtist]);

  if (!mounted) {
    return null;
  }

  if (timelineItems.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-4">
      <h3 className="text-2xl font-bold uppercase">{headline}</h3>
      <div
        ref={scrollContainerRef}
        className={`flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth select-none ${
          isDown ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x proximity',
          overscrollBehavior: 'contain',
          scrollBehavior: 'smooth'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onWheel={handleWheel}
      >
        {timelineItems.map((item) => {
          if (item.type === 'day-divider') {
            return (
              <div
                key={item.id}
                className="flex-shrink-0 flex items-center justify-center bg-gray-900 bg-opacity-25 rounded-lg w-10"
              >
                <div className="text-black text-opacity-80  text-sm font-bold uppercase whitespace-nowrap rotate-90">
                  {item.day}
                </div>
              </div>
            );
          }

          if (item.type === 'artist' && item.artist) {
            const isLive = isArtistLive(item.artist);
            return (
              <div
                key={item.id}
                className="flex-shrink-0 min-w-[300px] max-w-[300px]"
                style={{scrollSnapAlign: 'start'}}
              >
                <ArtistSnippet
                  currentTime={currentTime}
                  artist={item.artist}
                  isLive={isLive}
                />
              </div>
            );
          }

          return null;
        })}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default memo(ArtistCarousel);
