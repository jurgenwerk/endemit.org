import EventCard, {EventProps} from "@/app/(components)/EventCard";

interface EventListProps {
  title: string;
  events: EventProps[]
}

export default function EventList({title, events}: EventListProps) {
  return <div>
      <h1 className="text-3xl font-bold text-white mb-8 mt-12">{title}</h1>

      {events.map((event, index) => (
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
          index={index}
        >
          {event.children}
        </EventCard>
      ))}
    </div>
}
