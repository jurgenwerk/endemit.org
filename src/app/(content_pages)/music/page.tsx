import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Sets, mixes, and productions from the Endemit team and live recordings from our events.",
  openGraph: {
    images: ["/images/og/endemit-og.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Music() {
  return (
    <div className="lg:max-w-3xl mx-auto  sm:max-w-full pt-24 px-4 lg:pt-16">
      <h1 className="text-3xl font-bold text-white mb-8">MUSIC</h1>

      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-xl">
          <span className="font-bold text-3xl  tracking-wider text-white">
            emit
          </span>{" "}
          <br></br>A creative outlet where we publish a series of sets, mixes,
          and productions coming from Endemit team, and music recorded at
          Endemit events.
        </p>
      </div>

      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        className="rounded-md mt-4"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2178144495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
          marginTop: "6px",
        }}
      >
        <a
          href="https://soundcloud.com/ende-mit"
          title="Endemit"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Endemit
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/ende-mit/emit-003"
          title="Emit 003"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Emit 003 · Amanda Mussi · Oct 4 2025 (recorded live at Cvetke v
          Jeseni, at Kader Kodeljevo, Nov 29 2024)
        </a>
      </div>

      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        className="rounded-md mt-8"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2164932096&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
          marginTop: "6px",
        }}
      >
        <a
          href="https://soundcloud.com/ende-mit"
          title="Endemit"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Endemit
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/ende-mit/emit-002"
          title="Emit 002"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Emit 002 · Obscur · Sep 6 2025
        </a>
      </div>

      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        className="rounded-md mt-8"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2140222152&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
          marginTop: "6px",
        }}
      >
        <a
          href="https://soundcloud.com/ende-mit"
          title="Endemit"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Endemit
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/ende-mit/rhaegal-emit-001"
          title="Rhaegal - Emit 001"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Emit 001 · Rhaegal · Aug 23 2025
        </a>
      </div>
    </div>
  );
}
