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
    options: {
      isTicketsAvailable: true,
    },
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
    id: "road-zagreb-nov-2025",
    title: "Road! 𐔧 Endemit",
    annotation: "[GUEST PERFORMANCE]",
    dateString: "11 Oct 2025",
    location: "Depo Klub, Zagreb",
    artists: ["BEKO", "MMALI", "RHAEGAL"],
    href: "https://www.facebook.com/road3345/",
    imageSrc:
      "https://scontent.fmbx2-1.fna.fbcdn.net/v/t39.30808-6/539637298_762728143351327_3959348473966735835_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=103&ccb=1-7&_nc_sid=75d36f&_nc_ohc=k-lJWLX8YgUQ7kNvwHJicwN&_nc_oc=Adm-wLsQIQd5t4sMPFTQjmRU-4YlZt7Qe-ZRf1u99cjm-lc-5KXlJ3lvLBIkBCI5ziI&_nc_zt=23&_nc_ht=scontent.fmbx2-1.fna&_nc_gid=LB7jST-qCk-UTTEsYydd0Q&oh=00_Afaa9xkH0uZnI2hSgB9G-2UfxWxkBmqsY1GyF1iiABDw8Q&oe=68C8B2D8",
    visible: {
      link: true,
      event: true,
      image: true,
    },
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
    options: {
      isPastEvent: true,
    },
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
    options: {
      isPastEvent: true,
    },
    visible: {
      link: true,
      event: true,
      image: true,
    },
  },
];

export default events;
