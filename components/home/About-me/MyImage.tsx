/* eslint-disable @next/next/no-img-element */

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export function MyImage() {
  return (
    <NeonGradientCard className="max-w-xl">
      <img
        src="/assest/adnan.png" 
        alt="Neon Card Image"
        className=""
      />

    </NeonGradientCard>
  );
}
