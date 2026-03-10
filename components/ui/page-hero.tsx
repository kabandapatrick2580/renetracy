import { LinkButton } from "@/components/ui/link-button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Book Now"
}: PageHeroProps) {
  return (
    <section className="section-shell pb-10 pt-20">
      <div className="glass-card gold-ring overflow-hidden rounded-[2.5rem] p-8 md:p-12">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-none tracking-[0.05em] text-ink md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72">{description}</p>
        <div className="mt-8">
          <LinkButton href={primaryHref}>{primaryLabel}</LinkButton>
        </div>
      </div>
    </section>
  );
}
