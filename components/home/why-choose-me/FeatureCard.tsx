import React from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BoxReveal } from "@/components/magicui/box-reveal";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="relative w-full max-w-sm">
            <BorderBeam
                duration={8}
                size={100}
                className="absolute inset-0 z-10"
            />

            <div className="p-6 bg-white border border-gray-300 dark:bg-background dark:border-gray-800">
                <div className="text-white p-6">
                    <BoxReveal boxColor={"#808080"} duration={0.5}>
                        <div className="w-12 h-12 flex items-center justify-center dark:bg-white bg-black rounded-full mb-4">
                            {icon}
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#808080"} duration={0.5}>
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                    </BoxReveal>
                    <BoxReveal boxColor={"#808080"} duration={0.5}>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{description}</p>
                    </BoxReveal>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
