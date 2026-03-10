"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";
import { LinkButton } from "@/components/ui/link-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type PosterNavProps = {
  compactLabel?: string;
};

export function PosterNav({ compactLabel = "RT" }: PosterNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between gap-4">
      <Link
        href="/"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/60 font-serif text-sm uppercase tracking-[0.2em] text-sand"
      >
        {compactLabel}
      </Link>
      <div className="hidden items-center gap-8 lg:flex">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`hero-kicker transition ${active ? "text-gold" : "text-sand/85 hover:text-ink"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <LinkButton href="/contact">Book Now</LinkButton>
      </div>
    </div>
  );
}
