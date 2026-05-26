import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Award, BadgeCheck, HeartHandshake } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Sight Hub Optical Shop",
    description:
      "Meet the team, learn our story, and see the trust signals behind Sight Hub Eye Clinic in Kathmandu.",
    openGraph: {
      title: "About Sight Hub Optical Shop",
      description:
        "Meet the team, learn our story, and see the trust signals behind Sight Hub Eye Clinic in Kathmandu.",
      type: "website",
    },
  };
}

const stats = [
  { value: "250+", label: "Patients Served" },
  { value: "3+", label: "Years Experience" },
  { value: "500+", label: "Frame Styles" },
];

const team = [
  {
    name: "Mr Bikash Gupta",
    role: "Ophthalmic Assistant",
    description: "Focused on clear diagnostics, patient education, and comfortable treatment plans.",
  },
  {
    name: "Mr Suman Kumar Prajapati",
    role: "Ophthalmic Assistant",
    description: "Helps children and families with gentle, age-appropriate eye care and advice.",
  },
];

const badges = [
  { icon: Award, label: "Registered eye care team" },
  { icon: BadgeCheck, label: "Clean, modern clinic" },
  { icon: HeartHandshake, label: "Patient-first service" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border/60 bg-[linear-gradient(180deg,_#ffffff_0%,_#f9f9f7_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">About Us</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
              A clinic built around trust, comfort, and clear vision
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Sight Hub Optical Shop serves Kathmandu valley with transparent pricing, friendly experts, and a curated frame selection for every age.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">From a local practice to a modern eye care destination</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              We started with a simple goal: make eye care affordable and easy to understand. Today, our clinic combines careful exams, modern frame choices, and a calm experience for families across Kathmandu.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Every visit is guided by transparent pricing, honest recommendations, and the belief that good eye care should feel welcoming rather than overwhelming.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-[var(--radius-card)] border border-border bg-white p-6 text-center shadow-sm">
                  <p className="font-serif text-4xl font-semibold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {badges.map((badge) => (
                <article key={badge.label} className="flex flex-col items-center gap-3 rounded-[var(--radius-card)] border border-border bg-white p-5 text-center shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <badge.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium text-foreground">{badge.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" delay={0.05}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Our Team</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
            Friendly experts you can talk to
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,_rgba(13,110,110,0.18),_rgba(245,166,35,0.18))] text-2xl font-semibold text-primary">
                {member.name.split(" ").map((part) => part[0]).join("")}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{member.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}