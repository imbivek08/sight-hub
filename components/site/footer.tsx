import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, Phone, PlayCircle } from "lucide-react";

const quickLinks = [
  { href: "/eye-test", label: "Eye Test" },
  { href: "/glasses", label: "Glasses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Website", icon: Globe },
  { href: "https://instagram.com", label: "Chat", icon: MessageCircle },
  { href: "https://youtube.com", label: "Video", icon: PlayCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <section>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-muted-foreground">
                Sight Hub
              </span>
              <span className="font-serif text-xl font-semibold text-foreground">
                Eye Clinic
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            Affordable eye care, transparent pricing, and trusted frame options for
            families across Kathmandu.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <address className="mt-5 space-y-3 not-italic text-sm text-muted-foreground">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              <span>New Baneshwor, Kathmandu, Nepal</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              <a href="tel:+977-9841000000" className="transition hover:text-primary">
                +977-9841000000
              </a>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              <a href="mailto:hello@sighthubclinic.com" className="transition hover:text-primary">
                hello@sighthubclinic.com
              </a>
            </p>
          </address>
          <p className="mt-5 text-sm text-muted-foreground">
            Sun–Fri 9AM–6PM, Sat 10AM–4PM
          </p>
        </section>
      </div>

      <div className="border-t border-border/80 bg-muted/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Sight Hub Eye Clinic. All rights reserved.</p>
          <p>Kathmandu, Nepal</p>
        </div>
      </div>
    </footer>
  );
}