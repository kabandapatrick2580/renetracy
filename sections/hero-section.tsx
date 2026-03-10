"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/link-button";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Rene and Tracy hero portrait"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-black/40" />
      <div className="section-shell relative flex min-h-[calc(100vh-5rem)] items-end pb-20 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
            Kigali, Rwanda • Gospel Music Ministry
          </p>
          <h1 className="font-serif text-6xl leading-none tracking-[0.08em] text-ink md:text-8xl">
            Rene & Tracy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/80 md:text-lg">
            A cinematic worship expression shaped by marriage, ministry, and a call to draw nations into intimate realities in Christ.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <LinkButton href="/music">Listen</LinkButton>
            <LinkButton href="/videos" variant="secondary">
              Watch
            </LinkButton>
            <LinkButton href="/about" variant="secondary">
              About
            </LinkButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
