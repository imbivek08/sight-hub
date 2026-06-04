import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassesGallery } from "@/components/sections/glasses/glasses-gallery";
import { ArrowRight, Glasses, ShieldCheck, Sparkles } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Affordable Glasses & Frames in Kathmandu",
    description:
      "Browse affordable glasses and frames in Kathmandu with filters for men, women, kids, and sunglasses.",
    openGraph: {
      title: "Affordable Glasses & Frames in Kathmandu | Sight Hub Optical Shop",
      description:
        "Browse affordable glasses and frames in Kathmandu with filters for men, women, kids, and sunglasses.",
      type: "website",
    },
  };
}

const frames = [
  {
    image: "/images/sunglasses-women.jpeg",
    alt: "Round titanium eyeglass frame in a warm neutral finish",
    name: "Aster Round",
    brand: "Sight Hub House Collection",
    price: 999,
    label: "Popular",
    category: "men" as const,
  },
  {
    image: "/images/sunglasses-women.jpeg",
    alt: "Square acetate eyeglass frame with modern matte styling",
    name: "North Square",
    brand: "Urban Vision",
    price: 1499,
    label: "New",
    category: "women" as const,
  },
  {
    image: "/images/sunglasses-women.jpeg",
    alt: "Lightweight kids eyeglass frame in bright blue",
    name: "Tiny Trail",
    brand: "Kids Choice",
    price: 1199,
    label: "Kids",
    category: "kids" as const,
  },
  {
    image: "/images/sunglasses-women.jpeg",
    alt: "Sunglasses frame with gradient lens styling",
    name: "Sol Amber",
    brand: "Sunline",
    price: 2400,
    label: "Sunglasses",
    category: "sunglasses" as const,
  },
  {
    image: "/images/sunglasses-women.jpeg",
    alt: "Classic rounded frame styled for everyday wear",
    name: "Metro Arc",
    brand: "Sight Hub House Collection",
    price: 1800,
    label: "Best Seller",
    category: "men" as const,
  },
  {
    image: "/images/sunglasses-women.jpeg",
    alt: "Light acetate frame with soft edges and gold details",
    name: "Mira Soft",
    brand: "Urban Vision",
    price: 2200,
    label: "Premium",
    category: "women" as const,
  },
];

export default function GlassesPage() {
  return (
    <div>
      <section className="border-b border-border/60 bg-[radial-gradient(circle_at_top_right,_rgba(245,166,35,0.18),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#f9f9f7_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Glasses & Frames
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
              Affordable Glasses & Frames in Kathmandu | Sight Hub Optical Shop
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Explore styles for daily wear, kids, and sun protection.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Different verities
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-white p-6 shadow-sm">
            <div className="flex h-full min-h-[18rem] items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(13,110,110,0.1),_rgba(245,166,35,0.12))]">
              <Glasses className="h-24 w-24 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Lens fitting guidance",
                "Blue-light and sun options",
                "Kids and adult frames",
                "Budget-friendly choices",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Comfort-first fitting",
              description: "We help you find frames that fit your face, lifestyle, and prescription needs.",
            },
            {
              icon: ArrowRight,
              title: "Fast selection",
              description: "Use filters to narrow styles by category and price without leaving the page.",
            },
            {
              icon: Sparkles,
              title: "Transparent pricing",
              description: "Every card shows a clear NPR price so comparisons stay simple and honest.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" delay={0.05}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Catalog</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-[2.5rem]">
            Pick a frame that fits the way you live
          </h2>
        </div>
        <div className="mt-10">
          <GlassesGallery frames={frames} />
        </div>
      </AnimatedSection>
    </div>
  );
}