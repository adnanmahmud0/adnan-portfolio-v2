// import Header from '@/components/header/Header';
import { FaBriefcase, FaPalette } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import type { FC } from 'react';
import FeatureCard from "./FeatureCard";
import Header from "@/components/header/Header";



const features = [
    {
        icon: <FaLaptopCode className="dark:text-black text-white text-3xl" />,
        title: "Technical Skills",
        description:
            "I have hands-on experience with modern frontend and backend tools through real-world projects.",
    },
    {
        icon: <FaBriefcase className="dark:text-black text-white text-3xl" />,
        title: "Professionalism",
        description:
            "I’ve worked in remote teams and also led a design team, showing both reliability and leadership.",
    },
    {
        icon: <FaPalette className="dark:text-black text-white text-3xl" />,
        title: "Design Sense",
        description:
            "My UI/UX knowledge helps me build user-friendly and visually appealing web applications.",
    },
];

const WhyChooseMe: FC = ({ }) => {
    return (
        <>
            <div className="py-30 bg-background">
                <div>
                    <Header title={"Why Choose me"} subTitle={'Why Work with Me'} />
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-15 bg-background py-7">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
export default WhyChooseMe;