import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { InferGetServerSidePropsType } from "next";
import { SeoHead } from "../../Components/portfolio/SeoHead";
import { SectionHeading } from "../../Components/portfolio/SectionHeading";
import { SiteShell } from "../../Components/portfolio/SiteShell";
import { withPortfolioContent } from "../../lib/portfolio-content";

export const getServerSideProps = withPortfolioContent;

export default function ProjectsPage({
  content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const categories = useMemo(
    () =>
      ["All"].concat(
        Array.from(
          new Set(content.projects.map((project) => project.category))
        )
      ),
    [content.projects]
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? content.projects
      : content.projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <SeoHead
        content={content}
        title="Projects"
        description="A portfolio of projects spanning AI tooling, blockchain systems, and full-stack product work."
      />
      <SiteShell content={content}>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Projects"
            title="A working portfolio across AI, Web3, and product systems."
            description="Some projects are polished products, some are infrastructure-heavy builds, and some are experiments that taught me how to ship better."
          />

          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm transition ${
                  activeCategory === category
                    ? "bg-[var(--ink-strong)] text-white"
                    : "border border-[var(--line-soft)] bg-white text-[var(--ink-soft)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {visibleProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/Projects/${project.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_70px_rgba(24,39,75,0.08)] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className="mt-4 font-[family:var(--font-display)] text-3xl text-[var(--ink-strong)]">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-xs text-[var(--ink-soft)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </SiteShell>
    </>
  );
}
