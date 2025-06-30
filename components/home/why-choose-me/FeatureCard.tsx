import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="relative w-full max-w-sm">
            <Card className="p-6 bg-white border border-gray-300 dark:bg-background dark:border-gray-800 text-white">
                <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center dark:bg-white bg-black rounded-full mb-4">
                        {icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                </CardHeader>

                <CardContent>
                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{description}</p>
                </CardContent>

                <BorderBeam duration={8} size={100} />
            </Card>
        </div>
    );
};

export default FeatureCard;
