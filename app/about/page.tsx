import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "Discover the story, mission, and ministry focus behind Rene & Tracy, a gospel music duo based in Kigali, Rwanda."
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A married gospel duo carrying worship, testimony, and spiritual transformation."
        description="From Kigali to the nations, Rene & Tracy exist to reveal Christ through songs, gatherings, and ministry expressions marked by excellence and intimacy."
      />
      <section className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass-card gold-ring relative overflow-hidden rounded-[2.5rem]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/artist-couple.svg"
                alt="Portrait of Rene and Tracy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="space-y-8">
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Artist Story</p>
            <p className="mt-4 text-sm leading-8 text-ink/75">
              Since 2020, Rene & Tracy have been building a ministry rooted in worship, family, and the revelation of Christ. Their sound blends devotional sincerity with polished contemporary gospel production, creating music that speaks both to intimate prayer spaces and large congregational moments.
            </p>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Mission</p>
            <p className="mt-4 text-sm leading-8 text-ink/75">
              Their mission, Nations Intimately Experiencing In Christ Realities, defines every release and appearance. The duo serves with the conviction that worship should lead people into transformation, healing, and a deeper awareness of who they are in Christ.
            </p>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Ministry Focus</p>
            <p className="mt-4 text-sm leading-8 text-ink/75">
              Rene & Tracy partner with churches, worship movements, conferences, and curated events that value spiritual depth, beauty, and excellence in presentation.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
