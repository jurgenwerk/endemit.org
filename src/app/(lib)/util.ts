import { EventProps } from "@/app/(components)/EventCard";
import events from "@/app/(config)/events.config";

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const formatDay = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });
};

export const getTimeUntil = (currentTime: Date, date: Date) => {
  const diff = date.getTime() - currentTime.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 10) {
    return null;
  } else if (hours > 0) {
    return `in ${hours}h ${minutes}m`;
  } else {
    return `in ${minutes}m`;
  }
};

export const getEventConfigById = (id: string): EventProps | undefined => {
  return events.find(
    (event: EventProps) => event.id.toLowerCase() === id.toLowerCase()
  );
};
