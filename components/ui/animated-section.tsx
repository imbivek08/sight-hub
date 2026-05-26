"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}