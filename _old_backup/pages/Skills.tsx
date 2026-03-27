import type { InferGetServerSidePropsType } from "next";
import { SeoHead } from "../Components/portfolio/SeoHead";
import { SectionHeading } from "../Components/portfolio/SectionHeading";
import { SiteShell } from "../Components/portfolio/SiteShell";
import { withPortfolioContent } from "../lib/portfolio-content";

export const getServerSideProps = withPortfolioContent;

export default function SkillsPage({
  content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <SeoHead
        content={content}
        title="Skills"
        description="Skills across frontend, backend, AI, data, and blockchain engineering."
      />
      <SiteShell content={content}>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I reach for when the product actually has to ship."
            description="The stack changes with the problem, but these are the systems and tools I’m most comfortable using to move from idea to working product."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {content.skillGroups.map((group) => (
              <article
                key={group.name}
                className="rounded-[2rem] border border-white/70 bg-white px-6 py-7 shadow-[0_24px_70px_rgba(24,39,75,0.08)]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                  {group.name}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-2 text-sm text-[var(--ink-soft)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </SiteShell>
    </>
  );
}
