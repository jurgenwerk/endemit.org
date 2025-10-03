import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export interface EventProps {
  id: string;
  title: string;
  annotation?: string;
  dateString: string;
  location: string;
  artists: string[];
  imageSrc?: string;
  href?: string;
  children?: React.ReactNode;
  options?: {
    isPastEvent?: boolean;
    isTicketsAvailable?: boolean;
    openInNewTab?: boolean;
  };
  visible: {
    link: boolean;
    event: boolean;
    image: boolean;
  };
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
  options,
  visible: { link: linkVisible, image: imageVisible },
}: EventProps) {
  const shouldShowLink = linkVisible && href;
  const shouldShowImage = imageVisible && imageSrc;

  return (
    <div className={clsx(!shouldShowLink && "cursor-not-allowed")}>
      <Link
        href={shouldShowLink ? href : ""}
        target={href?.startsWith("http") ? "_blank" : "_self"}
        className={clsx(
          "block focus:outline-0 active:outline-0 mt-2 hover:scale-[1.02] transition-all duration-300 active:scale-[0.995]",
          !shouldShowLink && "pointer-events-none"
        )}
      >
        <div className={clsx("pt-4 pb-6 min-h-[220px] md:h-[220px]")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full">
            {shouldShowImage && (
              <div className="relative h-48 md:h-full overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
                {children}
              </div>
            )}
            {!shouldShowImage && (
              <div>
                <div
                  className="w-full h-48 md:h-full flex items-center justify-center bg-stone-700 rounded-md "
                  style={{
                    backgroundImage: "url('/images/worms.png')",
                    backgroundRepeat: "repeat",
                    backgroundBlendMode: "color-burn",
                    backgroundSize: "40%",
                  }}
                >
                  <div className="text-center">
                    <Image
                      src={"/images/endemit-logo.png"}
                      alt={"Event image coming soon"}
                      width={48}
                      height={48}
                      className="mx-auto mb-2 opacity-70"
                    />
                    <div className="text-stone-400 font-medium">
                      Details coming soon
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white uppercase">
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
              {options?.isTicketsAvailable && (
                <div className="mt-4">
                  <span className="px-2 py-1 bg-white text-black animate-pulse text-md rounded-md flex w-fit gap-x-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      role="img"
                      color="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.75 20.75H20C21.5188 20.75 22.75 19.5188 22.75 18V14.5C22.75 14.0858 22.4142 13.75 22 13.75C21.0335 13.75 20.25 12.9665 20.25 12C20.25 11.0335 21.0335 10.25 22 10.25C22.4142 10.25 22.75 9.91421 22.75 9.5V6C22.75 4.48122 21.5188 3.25 20 3.25H9.75V20.75ZM8.25 3.25H4C2.48122 3.25 1.25 4.48122 1.25 6V9.5C1.25 9.91421 1.58579 10.25 2 10.25C2.9665 10.25 3.75 11.0335 3.75 12C3.75 12.9665 2.9665 13.75 2 13.75C1.58579 13.75 1.25 14.0858 1.25 14.5V18C1.25 19.5188 2.48122 20.75 4 20.75H8.25L8.25 3.25Z"
                        fill="#000000"
                      ></path>
                    </svg>
                    Tickets now available
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
