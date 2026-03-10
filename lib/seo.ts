import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = ""
}: MetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      type: "website",
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: "/images/og-image.svg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} gospel artist website`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/images/og-image.svg"]
    }
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    genre: "Gospel",
    foundingLocation: {
      "@type": "Place",
      name: siteConfig.location
    },
    slogan: siteConfig.mission,
    sameAs: ["https://youtube.com/", "https://instagram.com/", "https://spotify.com/"]
  };
}
