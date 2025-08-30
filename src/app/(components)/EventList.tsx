"use client";

import EventCard, { EventProps } from "@/app/(components)/EventCard";
import React from "react";
import { useSearchParams } from "next/navigation";

interface EventListProps {
  title: string;
  events: EventProps[];
}

export default function EventList({ title, events }: EventListProps) {
  const searchParams = useSearchParams();
  const visibleParam = searchParams.get("visible");

  // Filter events based on visibility unless visible=All
  const showHiddenLinks = visibleParam?.toUpperCase() === "ALL";
  const filteredEvents = showHiddenLinks
    ? events
    : events.filter(event => event.visible.event !== false);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8 mt-12">{title}</h1>

      {filteredEvents.map((event, index) => (
        <React.Fragment key={`${event.title}-${index}`}>
          {index > 0 && (
            <hr
              key={`divider-${index}`}
              className="border-t border-[#333333] my-4"
            />
          )}
          <EventCard
            key={event.title}
            title={event.title}
            dateString={event.dateString}
            location={event.location}
            artists={event.artists}
            annotation={event.annotation}
            imageSrc={event.imageSrc}
            href={event.href}
            isPastEvent={event.isPastEvent}
            visible={{link: showHiddenLinks || event.visible.link, event: event.visible.event}}
          >
            {event.children}
          </EventCard>
        </React.Fragment>
      ))}
    </div>
  );
}
