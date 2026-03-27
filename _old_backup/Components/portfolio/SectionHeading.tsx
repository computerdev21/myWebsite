type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[family:var(--font-display)] text-4xl leading-tight text-[var(--ink-strong)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
