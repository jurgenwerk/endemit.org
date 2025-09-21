import Headline from "@/app/events/(past)/issun-boshi-vinyl-release/(components)/Headline";
import Link from "next/link";
import type { Metadata } from "next";
import CoverFooter from "@/app/events/(past)/issun-boshi-vinyl-release/(components)/CoverFooter";

export const metadata: Metadata = {
  title: "Location",
};

export default function LocationPage() {
  return (
    <>
      <div className="max-w-5xl space-y-6 p-5 lg:px-12 font-typo flex-1 max-lg:pb-16">
        <Headline title="Location" />

        <p className="text-xl font-light">
          The event will be held at Kader, Grad Kodeljevo,{" "}
          <Link
            className={"link text-issun-boshi-yellow"}
            target={"_blank"}
            href={
              "https://www.google.com/maps/place/Kader+grad+Kodeljevo/@46.0452138,14.5450977,694a,35y,291.35h,63.48t/data=!3m1!1e3!4m6!3m5!1s0x47652d17cb626b19:0x79adf6a1b99302d9!8m2!3d46.0502643!4d14.5309968!16s%2Fg%2F11wc9x53n3?hl=en&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            Ul. Carla Benza 20 Ljubljana, Slovenija
          </Link>
          , , on 20<sup>th</sup> of September 2025.
        </p>
        <div className="w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.0418093222634!2d14.530996799999999!3d46.050264299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d17cb626b19%3A0x79adf6a1b99302d9!2sKader%20grad%20Kodeljevo!5e0!3m2!1sen!2ssi!4v1729627787717!5m2!1sen!2ssi"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
      <CoverFooter />
    </>
  );
}
