import React from "react";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
  size?: number;       // optional size for the beam (e.g. 400, 500)
  duration?: number;   // animation duration in seconds (default 6)
  delay?: number;      // animation delay in seconds (default 0)
}

export const TracingBeam: React.FC<TracingBeamProps> = ({
  children,
  className = "",
  size = 400,
  duration = 6,
  delay = 0,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* The animated beam */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full opacity-50 blur-xl"
        style={{
          width: size,
          height: size / 3,
          background:
            "linear-gradient(90deg, transparent, #7c3aed, #a78bfa, #7c3aed, transparent)",
          animation: `tracingBeam ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Content on top */}
      <div className="relative z-10">{children}</div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes tracingBeam {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
