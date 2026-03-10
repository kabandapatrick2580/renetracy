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
  const displayLabel = eyebrow.toUpperCase();

  return (
    <section className="pb-6 pt-0 md:pb-8">
      <div className="poster-shell w-full">
        <div className="poster-panel relative overflow-hidden border-y border-gold/20 px-5 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.16),transparent_35%)]" />
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-gold/15 pb-6">
              <p className="hero-kicker">{eyebrow}</p>
              <LinkButton href={primaryHref}>{primaryLabel}</LinkButton>
            </div>
            <div className="relative">
              <p className="hero-display max-w-5xl text-sand/18">{displayLabel}</p>
              <div className="relative z-10 -mt-4 max-w-4xl md:-mt-10">
                <h1 className="font-serif text-4xl leading-[0.92] tracking-[0.04em] text-ink md:text-6xl lg:text-7xl">
                  {title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72">{description}</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gold/15 pt-5">
              <p className="hero-kicker">Rene & Tracy • Gospel Music Ministry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
