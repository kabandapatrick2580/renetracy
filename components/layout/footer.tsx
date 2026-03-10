import Link from "next/link";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="section-shell grid gap-12 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-serif text-2xl tracking-[0.18em] text-ink">{siteConfig.name}</p>
          <p className="max-w-md text-sm leading-7 text-ink/70">{siteConfig.description}</p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-gold">Navigate</p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-ink/70 transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-gold">Follow</p>
          <div className="flex gap-4">
            <Link href="https://youtube.com/" aria-label="YouTube" className="rounded-full border border-white/10 p-3 text-ink/80 transition hover:border-gold hover:text-gold">
              <FaYoutube />
            </Link>
            <Link href="https://instagram.com/" aria-label="Instagram" className="rounded-full border border-white/10 p-3 text-ink/80 transition hover:border-gold hover:text-gold">
              <FaInstagram />
            </Link>
            <Link href="https://spotify.com/" aria-label="Spotify" className="rounded-full border border-white/10 p-3 text-ink/80 transition hover:border-gold hover:text-gold">
              <FaSpotify />
            </Link>
          </div>
          <p className="mt-6 text-sm text-ink/60">{siteConfig.email}</p>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-5 text-center text-xs uppercase tracking-[0.18em] text-ink/45">
        Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
