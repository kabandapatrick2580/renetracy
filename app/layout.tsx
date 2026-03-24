import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { PosterNav } from "@/components/ui/poster-nav";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-ink antialiased">
        <div className="edge-pattern edge-pattern-left" aria-hidden="true" />
        <div className="edge-pattern edge-pattern-right" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
        <header className="fixed inset-x-0 top-0 z-50">
          <div className="site-header-bg w-full px-5 py-5 backdrop-blur-xl md:px-10">
            <div className="mx-auto max-w-[1500px]">
              <PosterNav />
            </div>
          </div>
        </header>
        <main className="relative z-10 pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
