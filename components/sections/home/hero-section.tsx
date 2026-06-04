"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CircleDollarSign, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(13,110,110,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(245,166,35,0.18),_transparent_25%),linear-gradient(180deg,_#f9f9f7_0%,_#ffffff_100%)]">
      <div className="absolute inset-0 -z-10 opacity-70">
        <motion.div
          aria-hidden="true"
          className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full bg-primary/10 blur-2xl"
          animate={shouldReduceMotion ? undefined : { y: [0, -16, 0], x: [0, 8, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[12%] top-[10%] h-36 w-36 rounded-full bg-accent/20 blur-3xl"
          animate={shouldReduceMotion ? undefined : { y: [0, 18, 0], x: [0, -10, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/75 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Madhyapur eye care with transparent pricing
          </motion.div>

          <motion.h1
            className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.75rem]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            See the World Clearly — Affordable Eye Care for Everyone
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            Expert optometrists, same-day glasses options, and honest pricing for
            families across Kathmandu, from eye tests to modern frames.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/eye-test"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_18px_40px_-20px_rgba(245,166,35,0.95)] transition hover:-translate-y-0.5 hover:shadow-lg motion-safe:animate-[pulse_3.5s_ease-in-out_infinite]"
            >
              Book Eye Test
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/glasses"
              className="inline-flex items-center justify-center rounded-button border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              Browse Glasses
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-3 sm:grid-cols-3"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            {[
              { icon: CircleDollarSign, label: "Free Test" },
              { icon: ShieldCheck, label: "Trusted clinical care" },
              { icon: Sparkles, label: "Different verities of glasses" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-[2rem] border border-border/70 bg-white/50 shadow-[0_30px_80px_-40px_rgba(13,110,110,0.35)] backdrop-blur" />
          <div className="relative grid w-full max-w-xl gap-4 rounded-[2rem] p-6 sm:grid-cols-2">
            <motion.div
              className="rounded-[1.5rem] border border-border/80 bg-white p-5 shadow-sm"
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex h-40 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,_rgba(13,110,110,0.14),_rgba(245,166,35,0.14))]">
                <div className="relative h-20 w-36 rounded-full border-[6px] border-primary/70">
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-24 -translate-x-1/2 -translate-y-1/2 bg-primary/70" />
                  <div className="absolute -left-7 top-1/2 h-1.5 w-8 -translate-y-1/2 rounded-full bg-primary/70" />
                  <div className="absolute -right-7 top-1/2 h-1.5 w-8 -translate-y-1/2 rounded-full bg-primary/70" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Same-day glasses
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Choose frames after your prescription and leave with a clearer view.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-[1.5rem] border border-border/80 bg-primary p-5 text-primary-foreground shadow-sm"
              animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex h-40 items-center justify-center rounded-[1.25rem] bg-white/10">
                <div className="h-28 w-28 rounded-full border border-white/40 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.9),_rgba(255,255,255,0.18)_45%,_rgba(255,255,255,0)_70%)] shadow-[inset_0_0_30px_rgba(255,255,255,0.35)]" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                  Expert optometrists
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Friendly assessments, clear prescriptions, and a calm clinic experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}