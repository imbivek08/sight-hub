import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { EyeTestHero } from "@/components/sections/eye-test/hero";
import { BookingForm } from "@/components/sections/eye-test/booking-form";
import { FAQAccordion } from "@/components/sections/eye-test/faq-accordion";
import { PricingTable } from "@/components/sections/eye-test/pricing-table";
import { Award, Baby, CheckCircle2, Contact2, Glasses, PhoneCall } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Affordable Eye Test in Madhyapur Thimi-02",
    description:
      "Book an affordable eye test in Kathmandu with transparent pricing, expert optometrists, and online appointment requests.",
    openGraph: {
      title: "Affordable Eye Test in Kathmandu | Sight Hub Optical Shop",
      description:
        "Book an affordable eye test in Kathmandu with transparent pricing, expert optometrists, and online appointment requests.",
      type: "website",
    },
  };
}

const whatToExpect = [
  {
    icon: CheckCircle2,
    title: "Vision history review",
    description: "We start with your symptoms, lifestyle, and any existing prescriptions.",
  },
  {
    icon: Glasses,
    title: "Testing and measurement",
    description: "We check clarity, eye alignment, and your prescription using clinic equipment.",
  },
  {
    icon: PhoneCall,
    title: "Next-step guidance",
    description: "You receive practical advice for glasses, contact lenses, or a follow-up visit.",
  },
];

const testTypes = [
  {
    icon: Award,
    title: "Comprehensive Eye Test",
    description: "A full assessment for adults who want a complete prescription and general eye health review.",
  },
  {
    icon: Baby,
    title: "Children's Eye Test",
    description: "Gentle examinations adapted for younger patients and school vision screening needs.",
  },
  {
    icon: Contact2,
    title: "Contact Lens Test",
    description: "Lens fitting and comfort checks for new or returning contact lens wearers.",
  },
];

const faqItems = [
  {
    question: "How long does an eye test take?",
    answer:
      "Most appointments take around 20 to 30 minutes depending on the tests required and any discussion about lenses or glasses.",
  },
  {
    question: "Do I need to bring anything?",
    answer:
      "If you already wear glasses or contact lenses, bring them along. A list of current medications can also help the optometrist.",
  },
  {
    question: "Can I book for my child?",
    answer:
      "Yes. We regularly see children and provide calm, age-appropriate exams with clear explanations for parents and guardians.",
  },
];

export default function EyeTestPage() {
  return (
    <div>
      <EyeTestHero />

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">What to Expect</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
            A calm process with clear explanations at every step
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whatToExpect.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" delay={0.05}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Tests Offered
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
            Three common tests for different needs
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testTypes.map((item) => (
            <article key={item.title} className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      {/* <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" delay={0.08}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Pricing</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
            Transparent prices before you walk in
          </h2>
        </div>
        <div className="mt-10">
          <PricingTable />
        </div>
      </AnimatedSection> */}

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" delay={0.1}>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
              Questions patients ask most often
            </h2>
            <div className="mt-10">
              <FAQAccordion items={faqItems} />
            </div>
          </div>

          <BookingForm />
        </div>
      </AnimatedSection>
    </div>
  );
}