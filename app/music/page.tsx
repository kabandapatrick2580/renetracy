import { MusicCard } from "@/components/music-card";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { musicReleases } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Music",
  path: "/music",
  description: "Listen to gospel singles and worship releases from Rene & Tracy."
});

export default function MusicPage() {
  return (
    <>
      <PageHero
        eyebrow="Music"
        title="A growing catalogue of worship-driven gospel releases."
        description="Discover songs created for intimate devotion, live worship, and Christ-centered reflection."
        primaryHref="/contact"
        primaryLabel="Request EPK"
      />
      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {musicReleases.map((release, index) => (
            <Reveal key={release.title} delay={index * 0.08}>
              <MusicCard release={release} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
