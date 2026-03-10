type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : ""}>
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className={`section-copy mt-5 ${align === "center" ? "mx-auto" : ""}`}>{copy}</p>
    </div>
  );
}
