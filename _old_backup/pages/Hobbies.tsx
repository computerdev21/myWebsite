import type { InferGetServerSidePropsType } from "next";
import { SeoHead } from "../Components/portfolio/SeoHead";
import { SectionHeading } from "../Components/portfolio/SectionHeading";
import { SiteShell } from "../Components/portfolio/SiteShell";
import { withPortfolioContent } from "../lib/portfolio-content";

export const getServerSideProps = withPortfolioContent;

export default function HobbiesPage({
  content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <SeoHead
        content={content}
        title="Life"
        description="A few of the interests that shape how I think about craft, systems, and storytelling."
      />
      <SiteShell content={content}>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Life Beyond Work"
            title="The interests that keep my thinking elastic."
            description="Good product instincts do not only come from engineering. A lot of them come from the things I keep paying attention to when I’m off the clock."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {content.hobbies.map((hobby, index) => (
              <article
                key={hobby.title}
                className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_70px_rgba(24,39,75,0.08)]"
              >
                <div
                  className={`h-48 ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,rgba(23,76,255,0.9),rgba(76,177,255,0.58))]"
                      : index === 1
                      ? "bg-[linear-gradient(135deg,rgba(242,98,59,0.88),rgba(252,196,107,0.58))]"
                      : "bg-[linear-gradient(135deg,rgba(28,44,94,0.92),rgba(23,76,255,0.46))]"
                  }`}
                />
                <div className="px-6 py-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-subtle)]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-4 font-[family:var(--font-display)] text-3xl text-[var(--ink-strong)]">
                    {hobby.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
                    {hobby.description}
                  </p>
                  <p className="mt-5 border-t border-[var(--line-soft)] pt-5 text-sm leading-7 text-[var(--ink-soft)]">
                    {hobby.note}
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
