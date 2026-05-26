import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Sight Hub Eye Clinic",
    description:
      "Contact Sight Hub Eye Clinic in Kathmandu for appointments, questions, directions, and support.",
    openGraph: {
      title: "Contact Sight Hub Eye Clinic",
      description:
        "Contact Sight Hub Eye Clinic in Kathmandu for appointments, questions, directions, and support.",
      type: "website",
    },
  };
}

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    text: "New Baneshwor, Kathmandu, Nepal",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "+977-9841000000",
  },
  {
    icon: Mail,
    title: "Email",
    text: "hello@sighthubclinic.com",
  },
  {
    icon: Clock3,
    title: "Hours",
    text: "Sun–Fri 9AM–6PM, Sat 10AM–4PM",
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      <WhatsAppButton />

      <section className="border-b border-border/60 bg-[linear-gradient(180deg,_#ffffff_0%,_#f9f9f7_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Contact</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
              Talk to our clinic team in Kathmandu
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Ask about eye tests, glasses, pricing, or directions. We are ready to help you plan your visit.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item) => (
                <article key={item.title} className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
              <iframe
                title="Sight Hub Eye Clinic location in Kathmandu"
                src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
                loading="lazy"
                className="h-[24rem] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" delay={0.05}>
        <div className="rounded-[2rem] bg-primary px-6 py-8 text-primary-foreground shadow-[0_30px_80px_-40px_rgba(13,110,110,0.65)] sm:px-10 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                Need quick directions?
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-[2.3rem]">
                Call or message us and we will guide you to the clinic.
              </h2>
            </div>
            <a
              href="tel:+977-9841000000"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}