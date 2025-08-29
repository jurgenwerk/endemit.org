import EventCard, { EventProps } from "@/app/(components)/EventCard";
import React from "react";

interface EventListProps {
  title: string;
  events: EventProps[];
}

export default function EventList({ title, events }: EventListProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8 mt-12">{title}</h1>

      {events.map((event, index) => (
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
          >
            {event.children}
          </EventCard>
        </React.Fragment>
      ))}
    </div>
  );
}
