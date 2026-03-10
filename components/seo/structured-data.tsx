"use client";

import { BreadcrumbJsonLd, VideoJsonLd } from "next-seo";
import { videos } from "@/data/site";
import { createOrganizationJsonLd } from "@/lib/seo";

type StructuredDataProps = {
  breadcrumbs?: Array<{ name: string; item: string }>;
  includeVideos?: boolean;
};

export function StructuredData({
  breadcrumbs,
  includeVideos = false
}: StructuredDataProps) {
  const organizationJsonLd = createOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {breadcrumbs ? (
        <BreadcrumbJsonLd
          itemListElements={breadcrumbs.map((breadcrumb, index) => ({
            position: index + 1,
            name: breadcrumb.name,
            item: breadcrumb.item
          }))}
        />
      ) : null}
      {includeVideos
        ? videos.map((video) => (
            <VideoJsonLd
              key={video.title}
              name={video.title}
              description={video.description}
              contentUrl={video.embedUrl}
              embedUrl={video.embedUrl}
              thumbnailUrls={[video.thumbnail]}
              uploadDate={video.uploadDate}
            />
          ))
        : null}
    </>
  );
}
