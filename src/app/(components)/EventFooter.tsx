import Link from "next/link";

interface EventFooterProps {
  ticketsLink?: string;
  ticketsText?: string;
  locationName?: string;
  locationAddress?: string;
  locationLink?: string;
}

export default function EventFooter({
  ticketsLink,
  ticketsText,
  locationName,
  locationAddress,
  locationLink,
}: EventFooterProps) {
  if (!ticketsLink || !ticketsText || !locationName) {
    return null;
  }

  return (
    <div className="fixed bottom-0 m-0 w-full lg:hidden z-50">
      <div className="flex flex-row justify-between bg-black p-3.5 lg:px-5 lg:py-3">
        {ticketsLink && ticketsText && (
          <div className="my-auto flex">
            <Link
              href={ticketsLink}
              className="block rounded-md border px-5  py-1 font-medium hover:text-gray-100"
              style={{ paddingTop: "7px", letterSpacing: "0.6px" }}
            >
              {ticketsText}
            </Link>
          </div>
        )}

        {locationName && locationAddress && locationLink && (
          <div
            className="flex flex-col justify-between text-sm text-right"
            style={{ paddingTop: "3px" }}
          >
            <Link href={locationLink} className="hover:opacity-70">
              <div className="text-right">{locationName}</div>
              <div>{locationAddress}</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
