import Link from "next/link";

interface BreadcrumbSegment {
  label: string;
  path: string; // Just the segment, not full path
}

interface BreadcrumbProps {
  segments: BreadcrumbSegment[];
  separator?: string;
  className?: string;
}

export default function Breadcrumb({
  segments,
  separator = ">",
  className = "",
}: BreadcrumbProps) {
  // Build cumulative paths
  const items = segments.map((segment, index) => {
    const href = segments
      .slice(0, index + 1)
      .map(s => s.path)
      .join("/");

    return {
      label: segment.label,
      href: href || "/",
    };
  });

  return (
    <nav className={`flex gap-x-2 items-center ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex gap-x-2 items-center">
            <Link
              href={item.href}
              className={isLast ? "text-gray-400" : "hover:underline"}
            >
              {item.label}
            </Link>
            {!isLast && <span className="text-gray-500">{separator}</span>}
          </div>
        );
      })}
    </nav>
  );
}
