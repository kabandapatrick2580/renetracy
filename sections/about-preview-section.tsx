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
        <SectionHeading
          eyebrow="About The Duo"
          title="Worship carried by intimacy, testimony, and Christ-centered excellence."
          copy={`${siteConfig.name} are a Kigali-based married gospel duo serving through music, worship, and ministry. Their message is clear: ${siteConfig.mission}. Every song and gathering is designed to lead people deeper into communion with Christ, healing, and spiritual transformation.`}
        />
      </Reveal>
    </section>
  );
}
