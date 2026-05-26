import { Sparkles, Stethoscope, TimerReset } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FeatureCard } from "./feature-card";
import { FrameCard } from "./frame-card";
import { HeroSection } from "./hero-section";
import { StepProcess } from "./step-process";
import { TestimonialSlider } from "./testimonial-slider";

const features = [
  {
    icon: Sparkles,
    title: "Affordable Pricing",
    description:
      "Clear rates for eye tests and frames so families know what to expect before they walk in.",
  },
  {
    icon: Stethoscope,
    title: "Expert Optometrists",
    description:
      "Experienced eye care professionals delivering accurate assessments and practical guidance.",
  },
  {
    icon: TimerReset,
    title: "Same-Day Glasses",
    description:
      "Streamlined frame selection and quick dispensing for many prescription needs.",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Your Test",
    description:
      "Reserve a time that fits your day, online or by phone, with friendly support from our team.",
  },
  {
    number: "02",
    title: "Get Your Prescription",
    description:
      "A careful eye examination gives you a clear prescription and the next steps for your vision needs.",
  },
  {
    number: "03",
    title: "Choose Your Frames",
    description:
      "Pick from budget-friendly and premium styles, including options for kids and sunglasses.",
  },
];

const frames = [
  {
    image: "/images/frame-round.svg",
    alt: "Round titanium eyeglass frame in a warm neutral finish",
    name: "Aster Round",
    brand: "Sight Hub House Collection",
    price: "NPR 999",
    label: "Popular",
  },
  {
    image: "/images/frame-square.svg",
    alt: "Square acetate eyeglass frame with modern matte styling",
    name: "North Square",
    brand: "Urban Vision",
    price: "NPR 1,499",
    label: "New",
  },
  {
    image: "/images/frame-kids.svg",
    alt: "Lightweight kids eyeglass frame in bright blue",
    name: "Tiny Trail",
    brand: "Kids Choice",
    price: "NPR 1,199",
    label: "Kids",
  },
  {
    image: "/images/frame-sun.svg",
    alt: "Sunglasses frame with gradient lens styling",
    name: "Sol Amber",
    brand: "Sunline",
    price: "NPR 2,400",
    label: "Sunglasses",
  },
];

const testimonials = [
  {
    quote:
      "The eye test was thorough, the pricing was clear, and I got my glasses the same day. Exactly what I needed.",
    name: "Sita K.",
    role: "Teacher, Kathmandu",
    rating: 5,
  },
  {
    quote:
      "My son’s exam was calm and friendly. The optometrist explained everything in simple language.",
    name: "Ramesh T.",
    role: "Parent, Baneshwor",
    rating: 5,
  },
  {
    quote:
      "Good selection of frames and honest recommendations. The whole process felt efficient and professional.",
    name: "Anita M.",
    role: "Designer, Lalitpur",
    rating: 5,
  },
];

export function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sight Hub Eye Clinic",
            image: "https://sight-hub.example.com/images/frame-round.svg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Madhyapur Thimi",
              addressLocality: "Kathmandu",
              addressCountry: "NP",
            },
            telephone: "",
            openingHours: ["Su-Fr 09:00-18:00", "Sa 10:00-16:00"],
          }),
        }}
      />
      <HeroSection />

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
            Care that balances price, expertise, and speed
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" delay={0.05}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            How It Works
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
            Three simple steps to better vision
          </h2>
        </div>
        <div className="mt-10">
          <StepProcess steps={steps} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" delay={0.08}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Featured Frames
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
              Hand-picked styles starting from NPR 999
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Browse bestselling options for daily wear, lightweight comfort, kids, and sun protection.
          </p>
        </div>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
          {frames.map((frame) => (
            <FrameCard key={frame.name} {...frame} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" delay={0.12}>
        <TestimonialSlider testimonials={testimonials} />
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" delay={0.15}>
        <div className="overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-primary-foreground shadow-[0_30px_80px_-40px_rgba(13,110,110,0.7)] sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                Book Your Free Eye Test Today
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-[2.7rem]">
                Ready to check your vision with a team you can trust?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                Reserve an appointment, ask a question, or stop by our Kathmandu clinic to get started.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="/eye-test"
                className="inline-flex items-center justify-center rounded-button bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:-translate-y-0.5"
              >
                Book Appointment
              </a>
              <a
                href="tel:+977-9841000000"
                className="inline-flex items-center justify-center rounded-button border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call +977-9841000000
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}