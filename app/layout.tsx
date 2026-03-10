import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { PosterNav } from "@/components/ui/poster-nav";
import { StructuredData } from "@/components/seo/structured-data";
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
        <StructuredData
          breadcrumbs={[
            { name: siteConfig.name, item: siteConfig.url }
          ]}
          includeVideos
        />
        <header className="fixed inset-x-0 top-0 z-50">
          <div className="site-header-bg w-full px-5 py-5 backdrop-blur-xl md:px-10">
            <div className="mx-auto max-w-[1500px]">
              <PosterNav />
            </div>
          </div>
        </header>
        <main className="pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
