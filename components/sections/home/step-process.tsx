"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

type Step = {
  number: string;
  title: string;
  description: string;
};

type StepProcessProps = {
  steps: Step[];
};

export function StepProcess({ steps }: StepProcessProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatedSection className="rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:p-8">
      <div className="relative grid gap-6 lg:grid-cols-3 lg:gap-8">
        {!shouldReduceMotion ? (
          <motion.div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-10 hidden h-px origin-left bg-gradient-to-r from-primary via-accent to-primary/20 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : null}

        {steps.map((step, index) => (
          <motion.article
            key={step.number}
            className="relative rounded-[1.5rem] border border-border/80 bg-background/70 p-6"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.65, delay: index * 0.12 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
              {step.number}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}