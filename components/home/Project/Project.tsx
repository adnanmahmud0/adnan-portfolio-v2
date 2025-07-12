'use client';

import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import type { FC } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal"; // Make sure you have this component

interface ProjectType {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  // Add other fields if needed: techStack, repoLink, etc.
}

const Project: FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Header
        title="Selected Work"
        subTitle="Elevating Brands with Design Brilliance"
        textSiz="textSiz='sm:text-6xl md:text-7xl lg:text-8xl"
      />

      {loading ? (
        <p className="text-center text-lg">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              _id={project._id}          // Pass correct ID
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              onOpen={() => setSelectedProject(project)} // Open modal on click
            />
          ))}
        </div>
      )}

      {/* Modal for project details */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Project;
