"use client";

import EventCard, { EventProps } from "@/app/(components)/EventCard";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface EventListProps {
  title: string;
  events: EventProps[];
}

// Separate the component that uses useSearchParams
function EventListContent({ title, events }: EventListProps) {
  const searchParams = useSearchParams();
  const showAllParam = searchParams.get("show");

  // Filter events based on visibility unless show=All
  const showHiddenContent = showAllParam?.toUpperCase() === "ALL";
  const filteredEvents = showHiddenContent
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
            isTicketsAvailable={event.isTicketsAvailable}
            visible={{
              link: showHiddenContent || event.visible.link,
              image: showHiddenContent || event.visible.image,
              event: event.visible.event,
            }}
          >
            {event.children}
          </EventCard>
        </React.Fragment>
      ))}
    </div>
  );
}

// Main component with Suspense boundary
export default function EventList({ title, events }: EventListProps) {
  return (
    <Suspense fallback={<div className="text-white">Loading events...</div>}>
      <EventListContent title={title} events={events} />
    </Suspense>
  );
}
