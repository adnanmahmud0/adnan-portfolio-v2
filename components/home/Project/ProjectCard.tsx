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
import { BorderBeam } from "@/components/magicui/border-beam";

interface ProjectCardProps {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  onOpen: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  onOpen,
}) => {
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
        <Button onClick={onOpen}>Open</Button>
        <CoolMode>
          <Button variant="secondary">Like</Button>
        </CoolMode>
      </CardFooter>
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      />
    </Card>
  );
};

export default ProjectCard;
