import { EventProps } from "@/app/(components)/EventCard";
import Image from "next/image";

const events: EventProps[] = [
  {
    id: "issun-boshi-vinyl-release",
    title: "Issun-bōshi vinyl release",
    dateString: "20 Sep 2025",
    location: "Grad Kodeljevo",
    artists: ["INLAND", "MMALI"],
    imageSrc: "/images/issun-boshi-vinyl-release/cover-without-border.jpg",
    href: "/events/issun-boshi-vinyl-release",
    visible: {
      link: true,
      event: true,
      image: true,
    },
    isTicketsAvailable: true,
    children: (
      <Image
        src="/images/issun-boshi-vinyl-release/album/issun-boshi-record.webp"
        alt="Issun-bōshi  Vinyl release"
        width={220}
        height={220}
        className="animate-slow-spin mt-20 -ml-20"
      />
    ),
  },
  {
    id: "tba-nov-2025",
    title: "TBA",
    annotation: "[MORE INFO SOON]",
    dateString: "21 Nov 2025",
    location: "Grad Kodeljevo",
    artists: ["PULSO", "RHAEGAL"],
    visible: {
      link: false,
      event: true,
      image: false,
    },
  },

  // Past events
  {
    id: "endemit-festival",
    title: "ENDEMIT FESTIVAL",
    annotation: "[PRIVATE GATHERING]",
    dateString: "15-17 Aug 2025",
    location: "Libeliče",
    artists: [
      "RENE WISE",
      "BESTE HIRA",
      "PVTR",
      "BEKO",
      "VINTER",
      "MMALI",
      "RHAEGAL",
      "DJ LABRANA",
      "OMNIA VOX",
      "MATERIAL OBJECT",
      "TONSKE",
      "OBSCUR",
    ],
    imageSrc: "/images/endemit-festival/cover-without-border.jpg",
    href: "/events/endemit-festival",
    isPastEvent: true,
    visible: {
      link: true,
      event: true,
      image: true,
    },
  },
  {
    id: "ius-primae-noctis",
    title: "IUS PRIMAE NOCTIS",
    dateString: "Jun 20 2025",
    location: "Grad Kodeljevo",
    artists: ["MOKILOK", "UNKNOWN TEXTURE", "RHAEGAL", "MMALI"],
    imageSrc: "/images/ius-primae-noctis/cover.jpg",
    href: "/events/ius-primae-noctis",
    isPastEvent: true,
    visible: {
      link: true,
      event: true,
      image: true,
    },
  },
];

export default events;
