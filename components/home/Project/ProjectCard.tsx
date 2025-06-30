/* eslint-disable @next/next/no-img-element */
// components/ProjectCard.tsx
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lens } from "@/components/magicui/lens";
import { CoolMode } from "@/components/magicui/cool-mode";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card className="relative max-w-md shadow-none">
      <CardHeader>
        <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
          <img
            src={imageUrl}
            alt="Project"
            width={500}
            height={500}
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Button>Open</Button>
        <CoolMode>
          <Button variant="secondary">Like</Button>
        </CoolMode>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
