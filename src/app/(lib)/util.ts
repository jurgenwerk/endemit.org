import { EventProps } from "@/app/(components)/EventCard";
import events from "@/app/(config)/events.config";
import { PrismicRichTextBlock } from "@/app/(types)/prismic";

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

export function richTextToPlainText(richText: PrismicRichTextBlock[]): string {
  return richText.map(block => block.text).join("\n");
}

export function richTextToHTML(richText: PrismicRichTextBlock[]): string {
  return richText
    .map(block => {
      let text = block.text;

      // Apply spans (formatting)
      const sortedSpans = [...block.spans].sort((a, b) => b.start - a.start);
      sortedSpans.forEach(span => {
        const before = text.slice(0, span.start);
        const content = text.slice(span.start, span.end);
        const after = text.slice(span.end);

        switch (span.type) {
          case "strong":
            text = `${before}<strong>${content}</strong>${after}`;
            break;
          case "em":
            text = `${before}<em>${content}</em>${after}`;
            break;
          case "hyperlink":
            text = `${before}<a href="${span.data?.url}">${content}</a>${after}`;
            break;
        }
      });

      // Wrap in appropriate tag
      switch (block.type) {
        case "heading4":
          return `<h4>${text}</h4>`;
        case "list-item":
          return `<li>${text}</li>`;
        case "o-list-item":
          return `<li>${text}</li>`;
        default:
          return `<p>${text}</p>`;
      }
    })
    .join("");
}
