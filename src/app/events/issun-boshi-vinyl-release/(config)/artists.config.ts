export interface Artist {
  name: string;
  photo: string;
  description: string;
  day?: "Saturday" | "Sunday";
  time?: string;
  duration?: number; // Duration in minutes
}

export interface ArtistWithTimestamp extends Artist {
  startTime: Date;
  endTime: Date;
  id?: string;
}

export const artistConfig: Artist[] = [
  {
    name: "Inland",
    photo: "/issun-boshi-vinyl-release/artists/inland.jpeg",
    description:
      "MMali brings our annual Endemit journey to a close with an ever emotional performance, shaped by the rarest ambient, trance, post-rock and experimental techno gems. His sets transcend genres to reflect his playful, explorative and delicately hardened character, who knows just when to stir up the dancefloor raw or cradle it gently, immersing the tribe in the feelings of affinity, deep gratitude and yearning for the next gathering.",
    day: "Sunday",
    time: "03:00",
    duration: 150,
  },
  {
    name: "MMali",
    photo: "/issun-boshi-vinyl-release/artists/mmali.jpeg",
    description:
      "MMali brings our annual Endemit journey to a close with an ever emotional performance, shaped by the rarest ambient, trance, post-rock and experimental techno gems. His sets transcend genres to reflect his playful, explorative and delicately hardened character, who knows just when to stir up the dancefloor raw or cradle it gently, immersing the tribe in the feelings of affinity, deep gratitude and yearning for the next gathering.",
    day: "Saturday",
    time: "22:00",
    duration: 300,
  },

];
