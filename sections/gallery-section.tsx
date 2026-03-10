import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryItems } from "@/data/site";

export function GallerySection() {
  return (
    <section className="section-shell space-y-10">
      <Reveal>
        <SectionHeading
          eyebrow="Gallery"
          title="Portraits, worship nights, and ministry moments with editorial polish."
          copy="A premium visual archive that reflects the duo’s elegant style, spiritual atmosphere, and modern gospel identity."
        />
      </Reveal>
      <Reveal delay={0.1}>
        <GalleryGrid items={galleryItems} />
      </Reveal>
    </section>
  );
}
