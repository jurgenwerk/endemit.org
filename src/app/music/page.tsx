import type { Metadata } from "next";
import LandingPageSidebar from "@/app/components/LandingPageSidebar";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Sets, mixes, and productions coming from Endemit team, or music recorded at Endemit events.",
  openGraph: {
    title: "Music | Endemit",
    description:
      "Sets, mixes, and productions coming from Endemit team, or music recorded at Endemit events.",
    images: ["/endemit-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Music() {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <LandingPageSidebar />
      {/* Main Content */}
      <div
        className="lg:pl-72 bg-[radial-gradient(ellipse_1200px_800px_at_50%_50%,_var(--tw-gradient-stops))] from-gray-950 via-black to-black"
        style={{ height: "100vh" }}
      >
        <div className="lg:max-w-3xl mx-auto space-y-8 sm:max-w-full pt-24 px-4 lg:pt-16">
          <h1 className="text-3xl font-bold text-white mb-8">MUSIC</h1>

          {/* Emit Section */}
          <div className="space-y-4">
            {/* <h2 className="text-2xl font-bold text-white">
              <b>Emit</b>
            </h2> */}
            <p className="text-gray-300 leading-relaxed text-xl">
              <span className="font-bold text-3xl  tracking-wider text-white">
                emit
              </span>{" "}
              <br></br>A creative outlet where we publish a series of sets,
              mixes, and productions coming from Endemit team, or music recorded
              at Endemit events.
            </p>
          </div>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
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
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
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
              Rhaegal - Emit 001
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}
