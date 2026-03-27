import type { InferGetServerSidePropsType } from "next";
import { SeoHead } from "../Components/portfolio/SeoHead";
import { SectionHeading } from "../Components/portfolio/SectionHeading";
import { SiteShell } from "../Components/portfolio/SiteShell";
import { withPortfolioContent } from "../lib/portfolio-content";

export const getServerSideProps = withPortfolioContent;

export default function ExperiencePage({
  content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <SeoHead
        content={content}
        title="Work"
        description="Professional experience across full-stack engineering, AI systems, and blockchain product development."
      />
      <SiteShell content={content}>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Experience"
            title="A path through product, infrastructure, AI, and blockchain."
            description="I like roles where I can move between execution details and bigger product outcomes without losing either."
          />

          <div className="mt-16 space-y-10">
            {content.experience.map((item, index) => (
              <article
                key={`${item.company}-${item.date}`}
                className="grid gap-6 rounded-[2rem] border border-white/70 bg-white/80 px-6 py-8 shadow-[0_24px_70px_rgba(24,39,75,0.08)] backdrop-blur xl:grid-cols-[13rem_minmax(0,1fr)]"
              >
                <div className="border-b border-[var(--line-soft)] pb-5 xl:border-b-0 xl:border-r xl:pb-0 xl:pr-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                    {item.date}
                  </p>
                  <p className="text-sm leading-7 text-[var(--ink-soft)]">
                    {item.location}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    {item.company}
                  </p>
                  <h2 className="mt-3 font-[family:var(--font-display)] text-3xl text-[var(--ink-strong)]">
                    {item.role}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--ink-soft)]">
                    {item.summary}
                  </p>

                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-[1.4rem] bg-[var(--surface-muted)] px-4 py-4 text-sm leading-7 text-[var(--ink-soft)]"
                      >
                        {point}
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm leading-7 text-[var(--ink-soft)]">
                    <span className="font-medium text-[var(--ink-strong)]">Stack:</span>{" "}
                    {item.techStack}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </SiteShell>
    </>
  );
}
