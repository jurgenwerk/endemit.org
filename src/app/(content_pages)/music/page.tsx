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
        className="rounded-md"
        allow="autoplay"
        className="mt-4"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2164932096&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
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
          Obscur · Emit 002 · Sep 6 2025
        </a>
      </div>

      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        className="rounded-md"
        allow="autoplay"
        className="mt-8"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2140222152&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
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
          Rhaegal · Emit 001 · Aug 23 2025
        </a>
      </div>
    </div>
  );
}
