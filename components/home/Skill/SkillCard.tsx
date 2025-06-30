

import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { WarpBackground } from "@/components/magicui/warp-background";



interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard: FC<SkillCardProps> = ({ title, description }) => {
  return (

    <WarpBackground>
      <Card className="w-80">
        <CardContent className="flex flex-col gap-2 p-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </WarpBackground>

  );
};

export default SkillCard;
