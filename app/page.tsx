import Hero from "@/components/home/Hero/Hero";
import Skill from "@/components/home/Skill/Skill";
import WhyChooseMe from "@/components/home/why-choose-me/WhyChooseMe";



export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <WhyChooseMe />
      <Skill />
    </div>
  );
}