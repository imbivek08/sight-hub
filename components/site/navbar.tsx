"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Eye, Menu, Phone, X } from "lucide-react";

const navItems = [
  { href: "/eye-test", label: "Eye Test" },
  { href: "/glasses", label: "Glasses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-border/80 bg-white/95 shadow-sm backdrop-blur"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
              <Eye className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-muted-foreground">
                Sight Hub
              </span>
              <span className="font-serif text-xl font-semibold text-foreground">
                Optical Shop
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+977-9766361624"
              className="inline-flex items-center gap-2 rounded-button border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +977-9766361624
            </a>
            <Link
              href="/eye-test"
              className="inline-flex items-center justify-center rounded-button bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
            >
              Book Test
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-border bg-white text-foreground shadow-sm transition hover:border-primary hover:text-primary lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-border bg-white/98 lg:hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          } transition-[max-height] duration-300 ease-out`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-muted hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+977-9766361624"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-button bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call +977-9766361624
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}