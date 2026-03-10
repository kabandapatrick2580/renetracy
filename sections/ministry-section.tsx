import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function MinistrySection() {
  return (
    <section className="section-shell">
      <Reveal>
        <div className="glass-card gold-ring grid gap-10 rounded-[2.5rem] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <SectionHeading
              eyebrow="Ministry"
              title={siteConfig.mission}
              copy="Beyond performance, Rene & Tracy steward worship environments where people encounter Christ, receive healing, and grow in spiritual clarity. Their ministry serves churches, conferences, worship nights, and intimate gatherings."
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <LinkButton href="/contact">Invite for Ministry</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Book for Events
            </LinkButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
