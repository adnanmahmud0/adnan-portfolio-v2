'use client'

import AboutMe from "@/components/home/About-me/AboutMe";
import Hero from "@/components/home/Hero/Hero";
import Project from "@/components/home/Project/Project";
import { MarqueeDemo } from "@/components/home/Review/MarqueeDemo";
import Skill from "@/components/home/Skill/Skill";
import WhyChooseMe from "@/components/home/why-choose-me/WhyChooseMe";



export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <WhyChooseMe />
      <Project />
      <Skill />
      <AboutMe />
      <MarqueeDemo />
    </div>
  );
}