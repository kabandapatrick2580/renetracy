"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { navItems } from "@/data/site";
import { LinkButton } from "@/components/ui/link-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type PosterNavProps = {
  compactLabel?: string;
};

export function PosterNav({ compactLabel = "RT" }: PosterNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div>
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
          <LinkButton href="/contact" className="hidden md:inline-flex">
            Book Now
          </LinkButton>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-white/5 text-sand transition hover:border-gold hover:text-ink lg:hidden"
          >
            {open ? <HiXMark size={20} /> : <HiBars3BottomRight size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="mt-4 rounded-[1.5rem] border border-gold/20 bg-black/30 p-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-4 py-3 text-sm uppercase tracking-[0.2em] transition ${
                    active ? "bg-gold/15 text-gold" : "text-ink/85 hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <LinkButton href="/contact">Book Now</LinkButton>
          </div>
        </div>
      ) : null}
    </div>
  );
}
