'use client'

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Ripple } from "@/components/magicui/ripple";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SpinningText } from "@/components/magicui/spinning-text";
import Image from "next/image";
import type { FC } from 'react';
import { WordRotate } from "@/components/magicui/word-rotate";
import { FaGithub, FaLinkedin, FaBehance, FaWhatsapp, FaEnvelope } from "react-icons/fa";




const Hero: FC = () => {
    return (
        <>
            <div className="bg-background">
                <div className="relative flex h-screen  w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
                    <div className="flex justify-center mt-40">
                        <RainbowButton variant="outline">🟢 Available for Work</RainbowButton>
                    </div>
                    <div className="text-center leading-none md:text-[150px] text-[70px] font-medium tracking-tighter dark:text-white text-black">
                        <TextAnimate animation="blurIn" as="div">ADNAN</TextAnimate>
                        <TextAnimate animation="blurIn" as="div">MAHMUD</TextAnimate>
                    </div>
                    <div className="z-10 md:mt-[-120px] mt-[-55px]">
                        <Image src='/assest/adnan.png' width={550} height={550} alt={""} />
                    </div>
                    <Ripple className="mt-[-150px]" />
                </div>
                <div className="md:absolute bottom-1/6 left-1/10 md:mt-0 mt-[-100px]">
                    <div className="size-full max-w-lg flex flex-col items-end justify-center overflow-hidden pt-8 dark:text-white text-black text-right ml-auto">
                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                            <WordRotate className="text-5xl font-semibold"
                                words={["Front-end Developer", "Web Developer", "Backend Developer", "MERN Stack Developer", "Full Stack Web Developer", "Researcher", "AI Model Developer", "AI Developer"]}
                            />
                        </BoxReveal>

                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                            <div className="mt-6">
                                <p>
                                    Frontend Developer passionate about building responsive and user-friendly web applications, with
                                    experience in React, Next.js, and Tailwind CSS. Seeking to contribute to innovative teams through
                                    impactful real-world projects.
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                            <div className="mt-6 flex items-center justify-end gap-4 text-2xl text-black dark:text-white">
                                <a href="https://github.com/adnanmahmud99" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub className="hover:text-[#333]" />
                                </a>
                                <a href="https://www.linkedin.com/in/adnanmahmud99" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin className="hover:text-[#0077b5]" />
                                </a>
                                <a href="https://www.behance.net/adnanmahmud99" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                                    <FaBehance className="hover:text-[#1769ff]" />
                                </a>
                                <a href="https://wa.me/8801327228777" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <FaWhatsapp className="hover:text-[#25d366]" />
                                </a>
                                <a href="mailto:me.adnanmahmud99@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                                    <FaEnvelope className="hover:text-[#ea4335]" />
                                </a>
                            </div>
                        </BoxReveal>

                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                            <InteractiveHoverButton className="mt-[1.6rem] border dark:border-white border-black self-end">
                                Download CV
                            </InteractiveHoverButton>
                        </BoxReveal>
                    </div>
                </div>
                <div className="md:absolute bottom-1/4 right-1/4 md:mt-0 mt-[-100px]">
                    <SpinningText reverse className="text-2xl text-white" duration={6} radius={6}>
                        adnanmahmud99 • adnanmahmud99 •
                    </SpinningText>
                </div>
            </div>
        </>
    );
}
export default Hero;