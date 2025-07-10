"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export function DockDemo() {
  return (
    <div className="relative px-6 py-4">
      <Dock iconMagnification={60} iconDistance={80} className="w-fit">
        <DockIcon className="bg-white/10 dark:bg-black/10 rounded-full p-2">
          <a
            href="https://github.com/adnanmahmud99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="size-6 text-black dark:text-white hover:text-[#333]" />
          </a>
        </DockIcon>

        <DockIcon className="bg-white/10 dark:bg-black/10 rounded-full p-2">
          <a
            href="https://www.linkedin.com/in/adnanmahmud99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="size-6 text-black dark:text-white hover:text-[#0077b5]" />
          </a>
        </DockIcon>

        <DockIcon className="bg-white/10 dark:bg-black/10 rounded-full p-2">
          <a
            href="https://www.behance.net/adnanmahmud99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <FaBehance className="size-6 text-black dark:text-white hover:text-[#1769ff]" />
          </a>
        </DockIcon>

        <DockIcon className="bg-white/10 dark:bg-black/10 rounded-full p-2">
          <a
            href="https://wa.me/8801327228777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="size-6 text-black dark:text-white hover:text-[#25d366]" />
          </a>
        </DockIcon>

        <DockIcon className="bg-white/10 dark:bg-black/10 rounded-full p-2">
          <a
            href="mailto:me.adnanmahmud99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope className="size-6 text-black dark:text-white hover:text-[#ea4335]" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}
