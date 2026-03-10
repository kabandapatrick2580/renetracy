import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { VideoGrid } from "@/components/video-grid";
import { videos } from "@/data/site";

export function FeaturedVideoSection() {
  return (
    <section className="section-shell space-y-10">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Videos"
          title="Visual worship moments with a cinematic ministry presence."
          copy="Explore live sessions, official visuals, and intimate worship recordings designed to carry the atmosphere of prayer and encounter beyond the room."
        />
      </Reveal>
      <Reveal delay={0.1}>
        <VideoGrid items={videos.slice(0, 2)} />
      </Reveal>
    </section>
  );
}
