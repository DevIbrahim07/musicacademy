"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { div } from "motion/react-client";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Joining this music academy completely changed my confidence. The instructors are supportive, professional, and truly passionate about teaching music. My guitar skills improved faster than I expected.",
    name: "Ali Raza",
    title: "Guitar Student",
  },
  {
    quote:
      "The live practice sessions and friendly environment make learning fun. I started as a beginner in vocals, and now I can perform in front of people without fear.",
    name: "Ayesha Khan",
    title: "Vocal Training Student",
  },
  {
    quote:
      "What I love most is the personalized attention. The teachers focus on technique, rhythm, and creativity. It’s more than classes — it’s a musical journey.",
    name: "Hamza Malik",
    title: "Piano Learner",
  },
  {
    quote:
      "My son joined this academy for drums, and the growth is amazing. The academy builds discipline, confidence, and a real love for music.",
    name: "Sara Ahmed",
    title: "Parent of Student",
  },
  {
    quote:
      "From theory to performance, everything is well structured. The jam sessions and showcases motivate students to push their limits and enjoy learning music every day.",
    name: "Usman Tariq",
    title: "Music Academy Performer",
  },
];

function TestimonialCards() {
  return (
    <div
      className="relative flex h-200 w-full items-center justify-center bg-white
     dark:bg-black"
    >
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center 
      justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]
       dark:bg-black"
      ></div>
      <p className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        <div
          className="h-160 w-full dark:bg-black dark:bg-grid-white/[0.2] relative items-center justify-center overflow-hidden
    flex flex-col"
        >
          <h2 className="text-center font-bold z-10 text-3xl mb-8 text-black ">
            Here our Harmony: voice of success
          </h2>
          <div className="flex justify-center overflow-hidden w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
              {" "}
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}

export default TestimonialCards;
