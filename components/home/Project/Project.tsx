// app/project/page.tsx or wherever you render the component
'use client';

import Header from "@/components/header/Header";
import type { FC } from "react";
import { projectData } from "./projectData";
import ProjectCard from "./ProjectCard";


const Project: FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header
        title={"Selected Work"}
        subTitle={"Elevating Brands with Design Brilliance"}
        textSiz="textSiz='sm:text-6xl md:text-7xl lg:text-8xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
