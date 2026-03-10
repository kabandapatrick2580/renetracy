"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { LinkButton } from "@/components/ui/link-button";

export function HeroSection() {
  return (
    <section className="pb-6 pt-0 md:pb-8">
      <div className="poster-shell w-full">
        <div className="poster-panel relative overflow-hidden border-y border-gold/20 px-5 pb-6 pt-8 md:px-10 md:pb-8 md:pt-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.16),transparent_35%)]" />
          <div className="relative flex min-h-[82vh] flex-col">
            <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 pt-2"
              >
                <p className="hero-kicker mb-4">Kigali, Rwanda • Gospel Music Ministry</p>
                <div className="relative">
                  <div className="hero-display flex flex-wrap items-end gap-x-4 leading-[0.8]">
                    <span>RENE</span>
                    <span>&</span>
                    <span>TRACY</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  <LinkButton href="/music">Listen</LinkButton>
                  <LinkButton href="/videos" variant="secondary">
                    Watch
                  </LinkButton>
                  <LinkButton href="/about" variant="secondary">
                    About
                  </LinkButton>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-8 flex-1"
              >
                <div className="poster-inset relative mx-auto min-h-[24rem] max-w-[1180px] overflow-hidden border border-gold/15 md:min-h-[33rem]">
                  <Image
                    src="/images/hero.png"
                    alt="Rene and Tracy hero portrait"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1280px) 100vw, 1180px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="poster-overlay-card absolute bottom-6 right-6 max-w-xs px-4 py-3 backdrop-blur-sm">
                    <p className="hero-body text-right">
                      Nations Intimately Experiencing In Christ Realities through worship, ministry, and songs that lead people deeper into communion with Christ.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.28 }}
              className="mx-auto mt-6 flex w-full max-w-[1500px] flex-col gap-4 border-t border-gold/15 pt-5 text-sand/80 md:flex-row md:items-center md:justify-between"
            >
              <p className="text-sm">Welcome to the house of Rene & Tracy.</p>
              <p className="hero-kicker text-center">Scroll Down</p>
              <div className="flex items-center gap-4 text-sm">
                <FaYoutube />
                <FaInstagram />
                <FaSpotify />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
