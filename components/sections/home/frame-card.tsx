import Image from "next/image";
import Link from "next/link";

type FrameCardProps = {
  image: string;
  alt: string;
  name: string;
  brand: string;
  price: string;
  label: string;
  ctaLabel?: string;
};

export function FrameCard({
  image,
  alt,
  name,
  brand,
  price,
  label,
  ctaLabel = "View",
}: FrameCardProps) {
  return (
    <article className="min-w-[18rem] snap-start overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] bg-[linear-gradient(135deg,_rgba(13,110,110,0.08),_rgba(245,166,35,0.08))] p-6">
        <Image src={image} alt={alt} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 320px" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm">
          {label}
        </span>
      </div>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {brand}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">{name}</h3>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-base font-semibold text-primary">{price}</span>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-button border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}