'use client'


import Header from "@/components/header/Header";
import type { FC } from "react";
import IconCloudDemo from "./IconCloudDemo";
import SkillCard from "./SkillCard";


const Skill: FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-7">
      <div className="py-7">
        <Header title={"My Skill"} subTitle={"What are My Skills"} textSiz='sm:text-6xl md:text-7xl lg:text-8xl' />
      </div>
      <div className="grid grid-cols-3">
        <div className="space-y-10">
          <SkillCard
            title="Frontend Development"
            description="HTML, CSS, JavaScript, React.js, Tailwind CSS, DaisyUI, Bootstrap, Next.js, Magic UI, Material Ui, Wordpress, TypeScript, Firebase etc"
          />
          <SkillCard
            title="Backend Development"
            description="Node.js, Express.js, Mongoose, PostgreSQL, MySQL, TypeScript, REST APIs, JWT and NextAuth, CRUD operations, etc"
          />
        </div>
        <div>
          <IconCloudDemo />
        </div>
        <div className="space-y-10">
          <SkillCard
            title="Graphic Design & UI/UX"
            description="AdobiXD, Figma, Photoshop, Illustrator, Filmora, TeleportHQ, Wireframe, Drawio, Photo Shoot, etc"
          />
          <SkillCard
            title="AI related work"
            description="Python, Deep Learning, Machine Learning, Self-supervise Learning, TensorFlow, Keras, Model Builder, Explainable AI, Preprocess, etc"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
