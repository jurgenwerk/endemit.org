import events from "@/app/(config)/events.config";
import EventList from "@/app/(components)/EventList";
import EndemitSubscribe from "@/app/(components)/EndemitSubscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Endemit events are rare moments when these inner worlds surface, shaped with care, emotion, and intent. No two are the same, but all come from the same place.",
  openGraph: {
    images: ["/images/og/endemit-og.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function EventsPage() {
  return (
    <div className="lg:max-w-3xl mx-auto sm:max-w-full pt-24 px-6 lg:pt-16">
      <EventList
        title="UPCOMING EVENTS"
        events={events.filter(event => !event.isPastEvent)}
      />
      <EventList
        title="PAST EVENTS"
        events={events.filter(event => event.isPastEvent)}
      />
      <EndemitSubscribe />
    </div>
  );
}
