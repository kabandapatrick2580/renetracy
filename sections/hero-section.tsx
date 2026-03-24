"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { LinkButton } from "@/components/ui/link-button";
import { heroSlides, siteConfig } from "@/data/site";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="pt-0">
      <div className="poster-shell w-full">
        <div className="poster-panel relative overflow-hidden border-y border-gold/20 px-5 py-8 md:px-10 md:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.16),transparent_35%)]" />
          <div className="relative flex min-h-[calc(100vh-6rem)] flex-col">
            <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 grid min-h-[calc(100vh-10rem)] items-stretch gap-8 pt-2 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
              >
                <div className="flex flex-col">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <p className="hero-kicker">Kigali, Rwanda • Gospel Music Ministry</p>
                    <div className="hidden items-center gap-2 md:flex">
                      {heroSlides.map((slide, index) => (
                        <button
                          key={slide.src}
                          type="button"
                          aria-label={`Show slide ${index + 1}`}
                          onClick={() => setActiveSlide(index)}
                          className={`h-2.5 rounded-full transition ${
                            index === activeSlide ? "w-10 bg-gold" : "w-2.5 bg-sand/35 hover:bg-sand/60"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="poster-inset relative min-h-[24rem] overflow-hidden border border-gold/15 md:min-h-[38rem]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={heroSlides[activeSlide].src}
                        initial={{ opacity: 0.2, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.2, scale: 0.98 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={heroSlides[activeSlide].src}
                          alt={heroSlides[activeSlide].alt}
                          fill
                          priority={activeSlide === 0}
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                      <div className="poster-overlay-card px-4 py-3 backdrop-blur-sm">
                        <p className="hero-kicker">{heroSlides[activeSlide].eyebrow}</p>
                      </div>
                      <div className="flex items-center gap-2 md:hidden">
                        {heroSlides.map((slide, index) => (
                          <button
                            key={slide.src}
                            type="button"
                            aria-label={`Show slide ${index + 1}`}
                            onClick={() => setActiveSlide(index)}
                            className={`h-2.5 rounded-full transition ${
                              index === activeSlide ? "w-8 bg-gold" : "w-2.5 bg-sand/35"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:pl-2">
                  <p className="hero-kicker mb-4">Married Gospel Duo • Since 2023</p>
                  <div className="hero-display leading-[0.84]">
                    <span className="block">RENE</span>
                    <span className="block">& TRACY</span>
                  </div>
                  <p className="mt-6 max-w-xl text-base leading-8 text-ink/80 md:text-lg">
                    {siteConfig.name} create worship environments through music, ministry, and visual storytelling that draw people into a deeper relationship with Christ.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <LinkButton href="/music">Listen</LinkButton>
                    <LinkButton href="/videos" variant="secondary">
                      Watch
                    </LinkButton>
                    <LinkButton href="/about" variant="secondary">
                      About
                    </LinkButton>
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
