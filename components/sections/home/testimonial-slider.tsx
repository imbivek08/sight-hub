"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const active = testimonials[activeIndex];

  return (
    <AnimatedSection className="rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Patient stories
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground">Trusted by families</h2>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`View review from ${testimonial.name}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(13,110,110,0.08),_rgba(245,166,35,0.08))] p-6 sm:p-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={active.name}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, x: -28 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex gap-1 text-accent" aria-hidden="true">
              {Array.from({ length: active.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground sm:text-xl">
              “{active.quote}”
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-foreground">{active.name}</p>
              <p className="text-sm text-muted-foreground">{active.role}</p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`View review from ${testimonial.name}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-border"
            }`}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}