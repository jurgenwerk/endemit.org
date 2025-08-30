export interface Artist {
  name: string;
  photo: string;
  description: string;
  stage?: "Dome" | "Day stage";
  day?: "Friday" | "Saturday" | "Sunday";
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
    name: "Rene Wise",
    photo: "/endemit-festival/artists/rene-wise.jpeg",
    stage: "Dome",
    day: "Sunday",
    time: "02:00",
    duration: 180,
    description:
      "Rene Wise delivers powerful, percussive techno to stir up movement. His signature sound is grounded and driving — raw but modern rhythm set in motion to create atmospheric soundscapes, where body and sound converge. Never overbearing, always precise and in control. He curates the imprint Moving Pressure, a label that reflects his sound aesthetic: stripped-down, groove-heavy techno, coming from a background of percussion. Obscur's recent release on the label connects our scene with Rene's through a shared sonic ethos — tight, raw, and deeply felt.",
  },
  {
    name: "Beste Hira",
    photo: "/endemit-festival/artists/beste-hira.jpeg",
    description:
      "Beste Hira brings a fearless approach to uplifting the dancefloor, making peace offerings of dense percussion, abstract melodies and compelling rhythms to perform a high-energy sonic ritual. Expect an intense, shape-shifting set that never ceases to follow its own narrative.",
    stage: "Dome",
    day: "Saturday",
    time: "01:00",
    duration: 180,
  },
  {
    name: "Vinter",
    photo: "/endemit-festival/artists/vinter.jpeg",
    description:
      "Vinter's sound is marked by his use of contrast — balancing between restraint and release, restraint never being a true option in his (mind)set. His music taste is sharp, yet somehow emotional, his selections setting the boundaries of techno to stone with precision and flair. He is a trusted presence to push the atmosphere to its limits right before the main act.",
    stage: "Dome",
    day: "Friday",
    time: "22:30",
    duration: 150,
  },
  {
    name: "Rhaegal",
    photo: "/endemit-festival/artists/rhaegal.jpeg",
    description:
      "Rhaegal has been stepping up his appearances, delivering dark masterpieces at each stop he has made on his ever evolving path as an artist. His closing sets are an underground experience of the vast emotional terrain, designed for exploring the inward sphere of the infinite. He also runs the label Hands of the Creator, dealing a hand of otherworldly sounds to the listener.",
    stage: "Dome",
    day: "Saturday",
    time: "04:00",
    duration: 240,
  },
  {
    name: "DJ Labrana",
    photo: "/endemit-festival/artists/labrana.jpeg",
    description:
      "Labrana is that rare sound-collecting beast who understands the music should speak to the mind without any preconceptions. Expect an uplifting daytime selection of house, disco and leftfield oddities. Playful yet deep, with just the right amount of unpredictability in pattern.",
    stage: "Day stage",
    day: "Saturday",
    time: "14:00",
    duration: 150,
  },
  {
    name: "Omnia Vox",
    photo: "/endemit-festival/artists/omnia-vox.jpeg",
    description:
      "Omnia Vox is a sculptor of soundscapes that breathe and shift their attention to the next stop of the unexplored with ease and natural flow. Using ambient, drone, and organic recordings, his sets are a much-needed decompression — a platform for reflection and reset.",
    stage: "Day stage",
    day: "Saturday",
    time: "16:30",
    duration: 150,
  },
  {
    name: "Material Object",
    photo: "/endemit-festival/artists/material-object.jpeg",
    description:
      "Material Object is a master of sonic architecture, constructing a multidimensional atmosphere of abstract techno, ambient and psychedelic components. A producer and performer, embraced by worldwide audiences and record labels, has evolved his style through collabs with the sensei of electronic music Pete Namlook and brought his distinct sound to venues like Berghain or Labyrinth festival. Originating from Aussieland, he is now establishing his new hub in Slovenia, debuting at Endemit amidst the Carinthian forest.",
    stage: "Dome",
    day: "Saturday",
    time: "19:00",
    duration: 150,
  },
  {
    name: "Beko",
    photo: "/endemit-festival/artists/beko.jpeg",
    description:
      "Beko blends hypnotic grooves with raw textures and a fine-tuned progressive touch. His sets, played exclusively on vinyl, are assembled with patience and sheer focus, guiding the listener through parallel mind states without ever losing the track. A true craftsman of on-point momentum.",
    stage: "Dome",
    day: "Friday",
    time: "20:30",
    duration: 120,
  },
  {
    name: "Pvtr",
    photo: "/endemit-festival/artists/pvtr.jpeg",
    description:
      "Pvtr has drawn up a blueprint for interlacing ambient techno with dub influences and meditative rhythms, encouraging a deep interaction between spacious yet subtle sonic structures. His gradual immersion in the vastness of the unknown invites stillness and focus, exploring the space between sound with much diligence and intent. Expect a thoughtful journey into the depths of techno.",
    stage: "Dome",
    day: "Friday",
    time: "18:00",
    duration: 150,
  },
  {
    name: "Tonske",
    photo: "/endemit-festival/artists/tonske.jpeg",
    description:
      "Tonske is a selector from Velenje, known for precise, groove-driven constructions built upon minimal foundations. His focus is on flow, tight transitions, and stripped-back control. He's also the mind behind Cogo, another Slovenian forward-thinking label dedicated to exploratory electronic music.",
    stage: "Dome",
    day: "Saturday",
    time: "21:30",
    duration: 120,
  },
  {
    name: "MMali",
    photo: "/endemit-festival/artists/mmali.jpeg",
    description:
      "MMali brings our annual Endemit journey to a close with an ever emotional performance, shaped by the rarest ambient, trance, post-rock and experimental techno gems. His sets transcend genres to reflect his playful, explorative and delicately hardened character, who knows just when to stir up the dancefloor raw or cradle it gently, immersing the tribe in the feelings of affinity, deep gratitude and yearning for the next gathering.",
    stage: "Dome",
    day: "Sunday",
    time: "05:00",
    duration: 300,
  },
  {
    name: "Obscur",
    photo: "/endemit-festival/artists/obscur.jpeg",
    description:
      "Obscur channels the energy into the dancefloor with a sound that's raw, industrial and hypnotic. His work with Modularz, Paralelo and Newrhythmic labels speaks volumes about his music skills, his passion for the techno genre transcending his producer persona to deliver zestful performances. His sets are dense and physical, pulling the listener towards a rift of dark frequency range without losing forward momentum.",
    stage: "Dome",
    day: "Saturday",
    time: "23:30",
    duration: 150,
  },
];
