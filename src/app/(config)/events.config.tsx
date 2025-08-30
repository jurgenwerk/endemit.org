import {EventProps} from "@/app/(components)/EventCard";
import Image from "next/image";

const events: EventProps[] = [
  {
    title: "Issun-Bōshi vinyl release",
    dateString: "20 Sep 2025",
    location: "Grad Kodeljevo",
    artists: ["INLAND", "MMALI"],
    imageSrc: "/issun-boshi-vinyl-release/cover-without-border.jpg",
    href: "/events/issun-boshi-vinyl-release",
    visible: {
      link: false,
      event: true
    },
    children:
      <Image
        src="/issun-boshi-vinyl-release/album/issun-boshi-record.png"
        alt="Issun Boshi Vinyl release"
        width={220}
        height={220}
        className="animate-spin mt-20 -ml-20"
      />
  },
  {
    title: "TBA",
    annotation: "[MORE INFO SOON]",
    dateString: "21 Nov 2025",
    location: "Grad Kodeljevo",
    artists: ["PULSO", "RHAEGAL"],
    visible: {
      link: false,
      event: true
    },
  },
  {
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
    imageSrc: "/endemit-festival/cover-without-border.jpg",
    href: "/events/endemit-festival",
    isPastEvent: true,
    visible: {
      link: true,
      event: true
    },
  },
  {
    title: "IUS PRIMAE NOCTIS",
    dateString: "Jun 20 2025",
    location: "Grad Kodeljevo",
    artists: ["MOKILOK", "UNKNOWN TEXTURE", "RHAEGAL", "MMALI"],
    imageSrc: "/ius-primae-noctis/cover.jpg",
    href: "/events/ius-primae-noctis",
    isPastEvent: true,
    visible: {
      link: true,
      event: true
    },
  },
];

export default events;
