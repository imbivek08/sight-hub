"use client";

import { useMemo, useState } from "react";
import { FrameCard } from "@/components/sections/home/frame-card";

type FrameItem = {
  image: string;
  alt: string;
  name: string;
  brand: string;
  price: number;
  label: string;
  category: "men" | "women" | "kids" | "sunglasses";
};

type GlassesGalleryProps = {
  frames: FrameItem[];
};

const categories = ["all", "men", "women", "kids", "sunglasses"] as const;

export function GlassesGallery({ frames }: GlassesGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("all");
  const [maxPrice, setMaxPrice] = useState(5000);

  const filteredFrames = useMemo(() => {
    return frames.filter((frame) => {
      const matchesCategory = activeCategory === "all" || frame.category === activeCategory;
      return matchesCategory && frame.price <= maxPrice;
    });
  }, [activeCategory, frames, maxPrice]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-border bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category === "all"
                ? "All"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-2 text-sm text-muted-foreground">
          <label className="font-medium text-foreground">Price range</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={999}
              max={5000}
              step={100}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="h-2 w-56 accent-[color:var(--primary)]"
            />
            <span className="whitespace-nowrap font-medium text-foreground">Up to NPR {maxPrice}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredFrames.map((frame) => (
          <FrameCard
            key={frame.name}
            image={frame.image}
            alt={frame.alt}
            name={frame.name}
            brand={frame.brand}
            price={`NPR ${frame.price.toLocaleString()}`}
            label={frame.label}
            ctaLabel={frame.category === "sunglasses" ? "Try On" : "View"}
          />
        ))}
      </div>

      {filteredFrames.length === 0 ? (
        <p className="rounded-2xl border border-border bg-white px-5 py-4 text-sm text-muted-foreground">
          No frames match this filter. Try a wider price range.
        </p>
      ) : null}
    </div>
  );
}