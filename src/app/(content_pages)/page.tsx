import Link from "next/link";
import events from "@/app/(config)/events.config";
import EventList from "@/app/(components)/EventList";
import EndemitSubscribe from "@/app/(components)/EndemitSubscribe";

export default function Home() {
  return (
    <div className="lg:max-w-3xl mx-auto sm:max-w-full pt-24 px-6 lg:pt-16">
      <EventList
        title="UPCOMING EVENTS"
        events={events.filter(event => !event.isPastEvent)}
      />
      <div className="mt-4">
        <Link
          href="/events"
          className="text-sm text-gray-500 hover:text-gray-400"
        >
          + See past events
        </Link>
      </div>

      <EndemitSubscribe />
    </div>
  );
}
