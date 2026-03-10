import { LinkButton } from "@/components/ui/link-button";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Ministry",
  path: "/ministry",
  description: "Invite Rene & Tracy for worship nights, church events, conferences, and ministry gatherings."
});

const ministryPoints = [
  "Church worship nights and conferences",
  "Christian marriage and family events",
  "Private ministry gatherings and prayer rooms",
  "Leadership, worship, and testimony sessions"
];

export default function MinistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministry"
        title={siteConfig.mission}
        description="Rene & Tracy minister with a focus on ushering people into deep experiences of Christ through worship, testimony, and spiritually intentional gatherings."
      />
      <section className="section-shell grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <Reveal className="glass-card rounded-[2rem] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">How They Serve</p>
          <div className="mt-6 grid gap-4">
            {ministryPoints.map((point) => (
              <div key={point} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-ink/75">
                {point}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="glass-card gold-ring rounded-[2rem] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Booking</p>
          <p className="mt-5 text-sm leading-8 text-ink/75">
            For churches, ministries, conferences, and curated private worship experiences, contact the team to discuss availability, vision, and event flow.
          </p>
          <div className="mt-8">
            <LinkButton href="/contact">Invite for Ministry</LinkButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
