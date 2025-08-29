"use client";

import Headline from "@/app/events/issun-boshi-vinyl-release/(components)/Headline";

export default function LocationPage() {
  return (
    <div className="m-auto max-w-5xl space-y-6 p-5 font-typo">
      <Headline title="Location" />

      <p className="text-xl font-light">
        The event will be held at Kader, Grad Kodeljevo, Ul. Carla Benza 20,
        Ljubljana, Slovenija, on 20th of September 2025.
      </p>
      <div className="w-full overflow-hidden">
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
  );
}
