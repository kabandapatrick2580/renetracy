import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description: "Book Rene & Tracy for events, worship nights, and ministry invitations."
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bookings, ministry invitations, and event enquiries."
        description="Use the form below for event requests, worship collaborations, and booking conversations."
        primaryHref={`mailto:${siteConfig.email}`}
        primaryLabel="Email Booking Team"
      />
      <section className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass-card gold-ring rounded-[2.5rem] p-8 md:p-10">
          <form className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-ink/72">
                Name
              </label>
              <input id="name" type="text" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-ink focus:border-gold focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-ink/72">
                Email
              </label>
              <input id="email" type="email" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-ink focus:border-gold focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="event-type" className="text-sm text-ink/72">
                Event type
              </label>
              <input id="event-type" type="text" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-ink focus:border-gold focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-ink/72">
                Message
              </label>
              <textarea id="message" rows={6} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-ink focus:border-gold focus:outline-none" />
            </div>
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-4 text-sm uppercase tracking-[0.2em] text-canvas transition hover:bg-sand"
            >
              Send Enquiry
            </button>
          </form>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6">
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Booking Email</p>
            <p className="mt-4 text-xl text-ink">{siteConfig.email}</p>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Based In</p>
            <p className="mt-4 text-xl text-ink">{siteConfig.location}</p>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Availability</p>
            <p className="mt-4 text-sm leading-8 text-ink/72">
              Available for ministry invitations, conferences, worship nights, interviews, and curated international opportunities.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
