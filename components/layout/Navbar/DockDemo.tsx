/* eslint-disable @next/next/no-img-element */
"use client";

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    FaLinkedin,
    FaBehance,
    FaWhatsapp,
    FaEnvelope,
    FaFileAlt,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import ModeToggle from "@/components/mode-toggle";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
    contact: {
        social: {
            Home: {
                name: "Home",
                url: "/",
                icon: HomeIcon,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/adnanmahmud99",
                icon: FaLinkedin,
            },
            Behance: {
                name: "Behance",
                url: "https://www.behance.net/adnanmahmud99",
                icon: FaBehance,
            },
            WhatsApp: {
                name: "WhatsApp",
                url: "https://wa.me/8801327228777",
                icon: FaWhatsapp,
            },
            Email: {
                name: "Send Email",
                url: "mailto:me.adnanmahmud99@gmail.com",
                icon: FaEnvelope,
            },
            Resume: {
                name: "Resume",
                url: "https://drive.google.com/file/d/your-resume-id/view",
                icon: FaFileAlt,
            },
        },
    },
};

export function DockDemo() {
    const { Home, ...otherSocials } = DATA.contact.social;

    return (
        <div className="flex flex-col items-center justify-center bg-background dark:bg-background-dark">
            <TooltipProvider>
                <Dock direction="middle">
                    {/* Logo */}
                    <DockIcon>
                        <img
                            src="/adnanLogo.svg"
                            alt="Adnan Mahmud Logo"
                            title="Adnan Mahmud"
                            className="size-12 rounded-full"
                        />
                    </DockIcon>

                    {/* Home Link */}
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={Home.url}
                                    aria-label={Home.name}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full"
                                    )}
                                >
                                    <Home.icon className="size-4 text-gray-800 dark:text-gray-200" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="dark:text-gray-900 text-gray-100">{Home.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                    {/* Other Social Links */}
                    {Object.entries(otherSocials).map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <social.icon className="size-4 text-gray-800 dark:text-gray-200" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="dark:text-gray-900 text-gray-100">{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    {/* Theme Toggle */}
                    <Separator
                        orientation="vertical"
                        className="h-full py-2 border-gray-300 dark:border-gray-700"
                    />
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="rounded-full">
                                    <ModeToggle />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="dark:text-gray-900 text-gray-100">Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}
