const pricing = [
  {
    title: "Standard Eye Test",
    price: "NPR 500",
    description: "Suitable for a routine assessment with prescription and basic vision checks.",
  },
  {
    title: "Children's Eye Test",
    price: "NPR 300",
    description: "Gentle and age-appropriate screening for younger patients and school vision needs.",
  },
  {
    title: "Contact Lens Assessment",
    price: "NPR 800",
    description: "Includes fitting guidance, comfort checks, and lens suitability recommendations.",
  },
];

export function PricingTable() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pricing.map((item) => (
        <article key={item.title} className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Transparent pricing</p>
          <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
          <p className="mt-3 text-3xl font-semibold text-foreground">{item.price}</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
        </article>
      ))}
    </div>
  );
}