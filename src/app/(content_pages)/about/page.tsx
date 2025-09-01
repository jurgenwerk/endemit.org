import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Endemit is a cultural association and a collective of individuals drawn to sound, code, and image, quietly crafting in their own time.",
  openGraph: {
    images: ["/images/endemit-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function About() {
  return (
    <div className="lg:max-w-3xl mx-auto sm:max-w-full pt-24 px-6 lg:pt-16">
      <h1 className="text-3xl font-bold text-white mb-8">ABOUT</h1>

      <div className="space-y-6 text-gray-300">
        <p className="text-lg leading-relaxed">
          Endemit is a cultural association and a collective of individuals
          drawn to sound, code, and image, quietly crafting in their own time.
          Each project is a reflection of personal obsessions and shared values.
        </p>

        <p className="text-lg leading-relaxed">
          Our gatherings are rare moments when these inner worlds surface,
          shaped with care, emotion, and intent. No two are the same, but all
          come from the same place.
        </p>

        <p className="text-lg leading-relaxed">
          We move only when the moment is right. When we do, we build spaces
          that invite presence for ourselves, and for those who find us.
        </p>

        <p className="text-lg leading-relaxed">
          We&apos;ll keep creating as long as there&apos;s something inside
          worth expressing.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">
            CONSTITUTION OF THE ENDEMIT CULTURAL ASSOCIATION
          </h2>
          <div>
            🔗 &nbsp;
            <a
              href="/docs/Statut_Endemit_31.7.2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 link"
            >
              Statut ENDEMIT 31.7.2025 (slo)
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">MEMBERSHIP</h2>
          <p className="text-lg leading-relaxed mb-4">
            To enjoy the perks of being a member of the Endemit cultural
            association, fill the form and send it to{" "}
            <a href="mailto:endemit@endemit.org" className="text-gray-300 link">
              endemit@endemit.org
            </a>
            . You can also to hand a signed membership application to a fellow
            member in person.
          </p>
          <div className="space-y-2">
            <div>
              🔗 &nbsp;
              <a
                href="/docs/ENDEMIT%20pristopna%20slo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 link"
              >
                ENDEMIT pristopna izjava (slo)
              </a>
            </div>
            <div>
              🔗 &nbsp;
              <a
                href="/docs/ENDEMIT%20pristopna%20ang.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 link"
              >
                ENDEMIT membership application (en)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">CONTACT</h2>
          <p className="text-gray-400">
            For bookings, collaborations, or general inquiries:
          </p>
          <p className="text-gray-300 mt-2">
            <a href="mailto:endemit@endemit.org" className="text-gray-300 link">
              endemit@endemit.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
