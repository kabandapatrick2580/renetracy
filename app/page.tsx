import { AboutPreviewSection } from "@/sections/about-preview-section";
import { FeaturedVideoSection } from "@/sections/featured-video-section";
import { GallerySection } from "@/sections/gallery-section";
import { HeroSection } from "@/sections/hero-section";
import { LatestMusicSection } from "@/sections/latest-music-section";
import { MinistrySection } from "@/sections/ministry-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <FeaturedVideoSection />
      <LatestMusicSection />
      <GallerySection />
      <MinistrySection />
      <NewsletterSection />
    </>
  );
}
