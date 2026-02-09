"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent = [
  {
    title: "Expert Music Instructors",
    description:
      "Learn from professional musicians who guide you step by step. Our experienced instructors help students master instruments, vocals, rhythm, and music theory with personalized attention and practical training.",
    
  },
  {
    title: "Live Practice Sessions",
    description:
      "Practice in real time with teachers and fellow students. Join live classes, jam sessions, and workshops to improve your skills, timing, and confidence through hands-on musical experience.",
  
  },
  {
    title: "Performance & Growth",
    description:
      "Track your progress and perform with confidence. From beginner to advanced levels, we help you build stage presence, technique, and creativity through continuous feedback and showcases.",
    
  },
  {
    title: "Creative Learning Environment",
    description:
      "Never run out of inspiration. Our academy offers a motivating space where students explore different genres, collaborate, and express their musical identity with modern tools and guidance.",
   
  },
];

function WhyChooseUs() {
  return <StickyScroll content={musicSchoolContent} />;
}

export default WhyChooseUs;
