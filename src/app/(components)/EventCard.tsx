import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export interface EventProps {
  title: string;
  annotation?: string;
  dateString: string;
  location: string;
  artists: string[];
  imageSrc?: string;
  href?: string;
  children?: React.ReactNode;
  isPastEvent?: boolean;
  index: number;
}

export default function EventCard({
  artists,
  title,
  dateString,
  location,
  annotation,
  imageSrc,
  href,
  children,
  isPastEvent = false,
  index = 0
}: EventProps) {
  return (
    <Link
      href={href ? href : "#"}
      className={clsx(
        "block focus:outline-none mt-2 hover:scale-[1.02] transition-all duration-300 origin-left",
        !href && "pointer-events-none cursor-default",
        isPastEvent && "grayscale hover:grayscale-0 "
      )}
    >
      {imageSrc && (
        <div className={clsx("pt-4 pb-6 min-h-[220px] md:h-[220px]", index > 0 && "border-t border-[#333333]")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full">
            {imageSrc && (
              <div className="relative h-48 md:h-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
                {children}
              </div>
            )}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                {title}
                {annotation && (
                  <span className="text-sm md:text-base font-normal text-gray-400 ml-2">
                    {annotation}
                  </span>
                )}
              </h3>
              <p className="text-gray-400 mb-3">
                {dateString} • {location}
              </p>
              {artists && (
                <div className="text-xs md:text-sm text-gray-400">
                  {artists.map(
                    (artist, index) => `${index > 0 ? " • " : ""}${artist}`
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {!imageSrc && (
        <div className={clsx("pt-4 pb-4", index > 0 && "border-t border-[#333333]")}>
          <div>
            <span className="text-lg md:text-xl font-bold text-white">
              {title}
            </span>
            <span className="text-gray-400 ml-3">
              {dateString} • {location}
            </span>
            <span className="text-sm text-gray-400 ml-3">
              {artists.map(
                (artist, index) => `${index > 0 ? " • " : ""}${artist}`
              )}
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}
