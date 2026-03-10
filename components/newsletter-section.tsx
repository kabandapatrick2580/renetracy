export function NewsletterSection() {
  return (
    <section className="section-shell">
      <div className="glass-card gold-ring grid gap-10 overflow-hidden rounded-[2.5rem] bg-halo p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">Newsletter</p>
          <h2 className="font-serif text-4xl tracking-[0.05em] text-ink md:text-5xl">
            Stay close to every release and ministry moment.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink/72">
            Receive updates on new music, live worship nights, event invitations, and ministry announcements.
          </p>
        </div>
        <form className="grid gap-4 self-end" aria-label="Newsletter signup">
          <label className="text-sm text-ink/70" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            className="rounded-full border border-white/10 bg-black/30 px-5 py-4 text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-gold px-6 py-4 text-sm uppercase tracking-[0.2em] text-canvas transition hover:bg-sand"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
