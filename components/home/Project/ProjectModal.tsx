/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/magicui/tracing-beam";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    techStack?: string;
    repoLink?: string;
    liveLink?: string;
    features?: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <TracingBeam size={600} duration={8} className="rounded-lg bg-gray-900 p-8 max-w-3xl w-full relative">
          <Button
            variant="ghost"
            className="absolute top-4 right-4 text-white"
            onClick={onClose}
          >
            Close
          </Button>

          <h2 className="text-4xl font-bold mb-4 text-white">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.description}</p>

          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-lg mb-6 w-full object-cover max-h-96"
            />
          )}

          {project.techStack && (
            <p className="mb-2 text-gray-400">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
          )}

          {project.features && (
            <p className="mb-4 text-gray-400">
              <strong>Features:</strong> {project.features}
            </p>
          )}

          <div className="flex space-x-4">
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-purple-400"
              >
                GitHub Repo
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-400"
              >
                Live Demo
              </a>
            )}
          </div>

        </TracingBeam>
      </div>
    </>
  );
};

export default ProjectModal;
