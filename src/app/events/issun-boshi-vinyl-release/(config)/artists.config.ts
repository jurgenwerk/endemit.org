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
    photo: "/endemit-festival/artists/obscur.jpeg",
    description:
      "Obscur channels the energy into the dancefloor with a sound that's raw, industrial and hypnotic. His work with Modularz, Paralelo and Newrhythmic labels speaks volumes about his music skills, his passion for the techno genre transcending his producer persona to deliver zestful performances. His sets are dense and physical, pulling the listener towards a rift of dark frequency range without losing forward momentum.",
    day: "Saturday",
    time: "23:30",
    duration: 150,
  },
  {
    name: "MMali",
    photo: "/endemit-festival/artists/mmali.jpeg",
    description:
      "MMali brings our annual Endemit journey to a close with an ever emotional performance, shaped by the rarest ambient, trance, post-rock and experimental techno gems. His sets transcend genres to reflect his playful, explorative and delicately hardened character, who knows just when to stir up the dancefloor raw or cradle it gently, immersing the tribe in the feelings of affinity, deep gratitude and yearning for the next gathering.",
    day: "Saturday",
    time: "05:00",
    duration: 300,
  },

];
