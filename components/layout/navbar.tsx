"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { navItems, siteConfig } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-[1500px] rounded-[1.75rem] border border-gold/15 bg-canvas/85 px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/55 font-serif text-sm uppercase tracking-[0.2em] text-sand"
          >
            RT
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.68rem] uppercase tracking-[0.28em] transition ${
                  active ? "text-gold" : "text-sand/80 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-sand px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-canvas transition hover:bg-gold md:inline-flex"
            >
              Book Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="rounded-full border border-white/10 p-2 text-ink lg:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <HiXMark size={22} /> : <HiBars3BottomRight size={22} />}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="mx-auto mt-3 max-w-[1500px] rounded-[1.5rem] border border-gold/15 bg-stone/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-ink/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-full bg-sand px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-canvas"
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
