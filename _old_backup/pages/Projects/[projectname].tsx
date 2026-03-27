import Image from "next/image";
import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { SeoHead } from "../../Components/portfolio/SeoHead";
import { SiteShell } from "../../Components/portfolio/SiteShell";
import { readPortfolioContent } from "../../lib/portfolio-content";
import type { PortfolioContent } from "../../types/portfolio";

export const getServerSideProps: GetServerSideProps<{
  content: PortfolioContent;
  projectSlug: string;
}> = async (context) => {
  const content = await readPortfolioContent();
  const projectSlug = String(context.params?.projectname || "");

  return {
    props: {
      content,
      projectSlug,
    },
  };
};

export default function ProjectDetailPage({
  content,
  projectSlug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const project = content.projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return (
      <>
        <SeoHead content={content} title="Project not found" />
        <SiteShell content={content}>
          <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Missing page
            </p>
            <h1 className="mt-5 font-[family:var(--font-display)] text-5xl text-[var(--ink-strong)]">
              Project not found
            </h1>
            <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
              That project entry doesn&apos;t exist in the current portfolio content.
            </p>
            <Link
              href="/Projects"
              className="mt-8 inline-flex rounded-full bg-[var(--ink-strong)] px-6 py-3 text-sm text-white"
            >
              Back to projects
            </Link>
          </section>
        </SiteShell>
      </>
    );
  }

  return (
    <>
      <SeoHead
        content={content}
        title={project.name}
        description={project.description}
      />
      <SiteShell content={content}>
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Link href="/Projects" className="text-sm text-[var(--accent-strong)]">
            Back to all projects
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
                {project.category}
              </p>
              <h1 className="mt-5 font-[family:var(--font-display)] text-5xl leading-tight text-[var(--ink-strong)] sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--ink-subtle)]">
                {project.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[var(--ink-strong)] px-6 py-3 text-sm text-white"
                  >
                    View live
                  </a>
                ) : null}
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[var(--line-strong)] px-6 py-3 text-sm text-[var(--ink-strong)]"
                  >
                    View code
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-white/70 bg-white p-5 shadow-[0_24px_70px_rgba(24,39,75,0.08)] sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-subtle)]">
                  Role
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--ink-strong)]">{project.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-subtle)]">
                  Timeline
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--ink-strong)]">{project.period}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-subtle)]">
                  Status
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--ink-strong)]">{project.status}</p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[2.3rem] border border-white/70 bg-white shadow-[0_32px_100px_rgba(24,39,75,0.12)]">
            <div className="relative aspect-[16/8]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="border-y border-white/40 bg-[var(--surface-muted)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
                About the build
              </p>
              {project.longDescription.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 max-w-3xl text-base leading-8 text-[var(--ink-soft)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-[2rem] bg-white px-6 py-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-subtle)]">
                Snapshot
              </p>
              <div className="mt-5 space-y-5">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-sm text-[var(--ink-subtle)]">{metric.label}</p>
                    <p className="mt-1 font-[family:var(--font-display)] text-2xl text-[var(--ink-strong)]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Technology
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-[var(--ink-strong)]">
              The stack behind it
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--line-soft)] bg-white px-4 py-2 text-sm text-[var(--ink-soft)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Highlights
            </p>
            <div className="mt-8 grid gap-4">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.6rem] border border-white/70 bg-white px-5 py-5 text-sm leading-7 text-[var(--ink-soft)] shadow-[0_18px_60px_rgba(24,39,75,0.08)]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Challenges
            </p>
            <div className="mt-8 grid gap-4">
              {project.challenges.map((challenge) => (
                <div
                  key={challenge.title}
                  className="rounded-[1.6rem] border border-white/70 bg-white px-5 py-5 shadow-[0_18px_60px_rgba(24,39,75,0.08)]"
                >
                  <h3 className="font-medium text-[var(--ink-strong)]">{challenge.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                    {challenge.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
