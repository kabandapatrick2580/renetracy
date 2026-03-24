import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function AboutPreviewSection() {
  return (
    <section className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <Reveal>
        <div className="glass-card gold-ring relative overflow-hidden rounded-[2.5rem]">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/artist-couple.svg"
              alt="Rene and Tracy portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About The Duo"
            title="Worship carried by intimacy, testimony, and Christ-centered excellence."
            copy={`${siteConfig.name} are a Kigali-based married gospel duo serving through music, worship, and ministry. Every song and gathering is designed to lead people deeper into communion with Christ, healing, and spiritual transformation.`}
          />
          <div className="poster-overlay-card max-w-2xl rounded-[2rem] border border-gold/15 px-6 py-6 backdrop-blur-sm">
            <p className="hero-kicker mb-3">Mission</p>
            <p className="text-base font-medium leading-8 text-ink/80">
              {siteConfig.mission} through worship, ministry, and music that awaken intimacy with Christ and spiritual transformation.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
