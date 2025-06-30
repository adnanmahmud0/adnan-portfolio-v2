import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
    images: {
    domains: ['i.ibb.co'],
  },
};

export default withFlowbiteReact(nextConfig);