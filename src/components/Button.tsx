import Link from "next/link";
import clsx from "clsx";

export default function Button({
  href,
  children,
  size = "large",
  bgColor = "bg-gray-50",
  borderColor = "border-black",
  hoverBgColor = "bg-black",
}: {
  href: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  hoverBgColor?: string;
  bgColor?: string;
  borderColor?: string;
}) {
  const sizeClasses = {
    small: {
      text: "text-sm",
      padding: "px-3 py-0.5",
      hoverOffset: "group-hover:mb-0 group-hover:mr-0",
      animationSize: "w-32 h-32",
    },
    medium: {
      text: "text-lg",
      padding: "px-4 py-1",
      hoverOffset: "group-hover:mb-0 group-hover:mr-0",
      animationSize: "w-40 h-40",
    },
    large: {
      text: "text-xl",
      padding: "px-5 py-3",
      hoverOffset: "group-hover:mb-0 group-hover:mr-0",
      animationSize: "w-48 h-48",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <Link href={href} className="relative inline-block group">
      <span
        className={clsx(
          "relative z-[0] block overflow-hidden font-medium  text-gray-800 transition-colors duration-300 ease-out border-2  rounded-lg group-hover:text-white",
          currentSize.text,
          currentSize.padding,
          borderColor
        )}
      >
        <span
          className={clsx(
            "absolute inset-0 w-full h-full",
            bgColor,
            currentSize.padding
          )}
        ></span>
        <span
          className={clsx(
            "absolute left-0 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12  group-hover:-rotate-180 ease",
            currentSize.animationSize,
            hoverBgColor
          )}
        ></span>
        <span className="relative flex gap-2 group-hover:scale-105 transition-transform ease-in-out items-center">
          {children}
        </span>
      </span>
      <span
        className={clsx(
          "absolute -z-10 bottom-0 right-0 w-full transition-all duration-200 ease-linear ",
          currentSize.hoverOffset
        )}
      ></span>
    </Link>
  );
}
