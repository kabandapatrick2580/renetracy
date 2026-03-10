import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { galleryItems } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  path: "/gallery",
  description: "Browse premium portraits and ministry moments from Rene & Tracy."
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual archive with editorial warmth and worship atmosphere."
        description="Moments from portraits, worship gatherings, and the ministry journey of Rene & Tracy."
        primaryHref="/contact"
        primaryLabel="Book A Session"
      />
      <section className="section-shell">
        <Reveal>
          <GalleryGrid items={galleryItems} />
        </Reveal>
      </section>
    </>
  );
}
