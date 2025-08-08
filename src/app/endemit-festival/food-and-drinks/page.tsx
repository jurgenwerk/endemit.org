"use client";

import Image from "next/image";

export default function FoodAndDrinks() {
  return (
    <div className="m-auto max-w-5xl space-y-8 p-5 text-black">
      <h2 className="text-4xl font-bold uppercase pt-16 lg:pt-10">
        Food and Drinks
      </h2>

      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          This year, food will come straight from the garden and stables of
          House Rener, our beloved Carinthian host and his family. We&apos;re
          going back to basics, reviving the legendary Carinthian burger and
          adding fresh specialties made of traditional ingredients.
        </p>

        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/endemit-festival/hrana1.jpeg"
            alt="Festival food preparation"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-xl leading-relaxed">
          Omnivores will be able to enjoy quesadillas stuffed with chicken,
          homegrown vegetables and spices or warm their bellies and hearts with
          the special Rener meat stew. And as usual we&apos;ll be breaking some
          eggs for breakfast: one for the ladies and two for the big boys.
        </p>

        <p className="text-xl leading-relaxed">
          Vegetarian options will be a thing, too. Fluffy bao buns filled with
          hummus, fresh salad, and chickpea patty (Falafel style) will be a good
          excuse to order a side of fries.
        </p>

        <p className="text-xl leading-relaxed">
          As for the drinks, we&apos;ll be in equally good hands. Kristjan and
          his crew, practically family by now, will be holding the fort night
          and day behind the bar. Juicy, hard, or skinny refreshments will be
          served cold, forever with a twist, and that signature smile the crew
          always brings to the table.
        </p>

        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/endemit-festival/hrana2.jpeg"
            alt="Festival food and drinks"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
