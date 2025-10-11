import { EventProps } from "@/components/event/EventCard";
import events from "@/config/events.config";
import { PrismicRichTextBlock } from "@/types/prismic";
import { Country } from "@/types/country";
import countryConfig from "@/config/countries.config";
import { ProductCategory } from "@/types/product";
import { isProductTicket } from "@/domain/product/product.rules";
import { CartItem } from "@/types/cart";

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

export const getRegionFromCountry = (country: Country) => {
  const countryData = countryConfig[country];

  if (countryData) {
    return countryData.region;
  } else {
    return null;
  }
};

export const getPriceInCents = (price: number) => {
  return Math.round(price * 100);
};

export const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
};

export const categoriesWithSlugs = Object.values(ProductCategory).map(
  category => ({
    name: category,
    slug: createSlug(category),
  })
);

export const categoryFromSlug = (slug: string) => {
  const category = categoriesWithSlugs.find(cat => cat.slug === slug);
  return category ? category.name : null;
};

export const getComplementaryTicketModel = (
  items: CartItem[],
  defaultValue: string | boolean = ""
) => {
  return items
    .filter(item => isProductTicket(item))
    .flatMap(item =>
      Array.from({ length: item.quantity }, (_, index) => ({
        [`ticket-${item.id}-${index + 1}-name`]: defaultValue,
      }))
    )
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
};
