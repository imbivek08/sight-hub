"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, TimerReset, Users } from "lucide-react";

export function EyeTestHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top,_rgba(13,110,110,0.14),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#f9f9f7_100%)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Eye Test
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
            Affordable Eye Test in Kathmandu | Sight Hub Eye Clinic
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Book a thorough eye check with transparent pricing, friendly guidance, and options for children,
            contact lens fittings, and comprehensive testing.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Clear prescriptions" },
              { icon: Users, label: "Family-friendly care" },
              { icon: TimerReset, label: "Fast appointments" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative h-[22rem] w-full max-w-[28rem] rounded-[2rem] border border-border bg-white shadow-[0_30px_80px_-40px_rgba(13,110,110,0.35)]"
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_38%,_rgba(13,110,110,0.12),_transparent_28%),radial-gradient(circle_at_50%_50%,_rgba(245,166,35,0.14),_transparent_32%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-44 w-72 rounded-[999px] border-[10px] border-primary/80 bg-[linear-gradient(180deg,_#fdfdfc,_#eef7f7)]">
                <motion.div
                  className="absolute inset-x-10 top-1/2 h-16 -translate-y-1/2 rounded-full bg-primary/15"
                  animate={shouldReduceMotion ? undefined : { scaleX: [1, 0.98, 1] }}
                  transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[inset_0_0_0_10px_rgba(255,255,255,0.35)]"
                  animate={shouldReduceMotion ? undefined : { x: [-4, 4, -4] }}
                  transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}