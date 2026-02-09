"use client";

import React from "react";
import { motion } from "framer-motion";

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  /** Dot size (default: 8) */
  dotSize?: number;
  /** Spacing between dots (default: 10) */
  spacing?: number;
  /** Animation duration (default: 30) */
  duration?: number;
  /** Color cycle duration (default: 6) */
  colorCycleDuration?: number;
  /** Background color (default: 'transparent') */
  backgroundColor?: string;
};

export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  colorCycleDuration = 6,
  backgroundColor = "transparent",
  className,
  style,
  ...props
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732; // Hexagonal spacing calculation

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
      style={{
        ...style,
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, rgba(255,0,0,0.55), transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(255,255,0,0.45), transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(0,255,0,0.45), transparent 60%),
          radial-gradient(ellipse at 50% 50%, rgba(0,0,255,0.55), transparent 60%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px,
          ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%
        `,
        // Fade edges so it feels like a premium background, not a texture slapped on.
        maskImage:
          "radial-gradient(800px 520px at 30% 18%, black 35%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(800px 520px at 30% 18%, black 35%, transparent 78%)",
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
        filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
      }}
      transition={{
        backgroundPosition: {
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
        filter: {
          duration: colorCycleDuration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      }}
      {...props}
    />
  );
}
