export interface Artist {
  name: string;
  photo: string;
  description: string;
  day?: "Saturday" | "Sunday";
  time?: string;
  duration?: number; // Duration in minutes
  hiddenInBio?: boolean;
}

export interface ArtistWithTimestamp extends Artist {
  startTime: Date;
  endTime: Date;
  id?: string;
}

export const artistConfig: Artist[] = [
  {
    name: "Inland",
    photo: "/images/issun-boshi-vinyl-release/artists/inland.jpeg",
    description:
      "Inland is closing the Endemit vinyl release event as a special guest of honour - MMali’s creative and spiritual brother-by-heart, who mastered the Issun-Boshi EP and contributed his own remix. Ed is a British producer and DJ with residency in Berlin, where he regularly releases explorative techno and ambient productions on his home label Counterchange and mixes heavier stuff in Berghain or stirs up Monday mornings in Panorama. In Kader, he will start his techno set as Inland, while we can expect more playfulness at dawn.",
    day: "Sunday",
    time: "02:00",
    duration: 240,

  },
  {
    name: "MMali",
    photo: "/images/issun-boshi-vinyl-release/artists/mmali.jpeg",
    description:
      "Establishing his persona as one of the most creative and versatile Slovenian underground DJs, MMali is about to add production skills to his RA biography. 20 September is a historical date for Matej and his Endemit crew - an official release of his first EP on their home label. MMali is going to warm up the floor in Kader with his own tracks, heavily influenced by his love of melodic and percussive-heavy genres and the selections he makes when mixing as  Issun-Boshi, his ambient alter ego.",
    day: "Saturday",
    time: "22:00",
    duration: 240,
  },
  {
    name: "Rahul",
    photo: "/images/issun-boshi-vinyl-release/artists/rahul.jpeg",
    description: "",
    day: "Saturday",
    time: "19:00",
    duration: 180,
    hiddenInBio: true,
  },
];
