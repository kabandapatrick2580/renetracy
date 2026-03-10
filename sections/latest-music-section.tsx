import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { MusicCard } from "@/components/music-card";
import { musicReleases } from "@/data/site";

export function LatestMusicSection() {
  return (
    <section className="section-shell space-y-10">
      <Reveal>
        <SectionHeading
          eyebrow="Latest Music"
          title="Songs shaped for devotion, congregational worship, and spiritual renewal."
          copy="Each release carries the duo’s gospel identity with polished production, lyrical depth, and a ministry-first sound that resonates locally and globally."
        />
      </Reveal>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {musicReleases.map((release, index) => (
          <Reveal key={release.title} delay={index * 0.08}>
            <MusicCard release={release} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
