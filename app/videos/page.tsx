import { VideoGrid } from "@/components/video-grid";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { videos } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Videos",
  path: "/videos",
  description: "Watch live worship sessions, acoustic ministry nights, and official videos from Rene & Tracy."
});

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="Live sessions and visuals that preserve the atmosphere of worship."
        description="A curated video library featuring ministry nights, acoustic worship, and cinematic gospel storytelling."
        primaryHref="/contact"
        primaryLabel="Invite For Worship"
      />
      <section className="section-shell">
        <Reveal>
          <VideoGrid items={videos} />
        </Reveal>
      </section>
    </>
  );
}
