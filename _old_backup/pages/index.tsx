import Link from "next/link";
import Image from "next/image";
import type { InferGetServerSidePropsType } from "next";
import { SeoHead } from "../Components/portfolio/SeoHead";
import { SectionHeading } from "../Components/portfolio/SectionHeading";
import { SiteShell } from "../Components/portfolio/SiteShell";
import { withPortfolioContent } from "../lib/portfolio-content";

export const getServerSideProps = withPortfolioContent;

export default function HomePage({
  content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const featuredProjects = content.projects.filter((project) => project.featured);

  return (
    <>
      <SeoHead content={content} />
      <SiteShell content={content}>
        <section className="relative overflow-hidden border-b border-white/40 bg-[var(--surface-base)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(23,76,255,0.16),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(242,98,59,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.64),rgba(248,247,243,0.92))]" />
          <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
            <div className="absolute inset-10 rounded-[40px] bg-white/55 backdrop-blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.5),transparent_48%)]" />
            <Image
              src={content.profile.heroImage}
              alt={`${content.profile.name} hero`}
              fill
              className="object-cover object-center opacity-60 mix-blend-multiply"
              priority
            />
          </div>

          <div className="relative mx-auto grid min-h-[calc(100svh-81px)] max-w-7xl items-center gap-16 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8 lg:py-20">
            <div className="max-w-2xl animate-rise">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
                {content.profile.availability}
              </p>
              <h1 className="mt-6 font-[family:var(--font-display)] text-5xl leading-[0.98] text-[var(--ink-strong)] sm:text-6xl lg:text-7xl">
                {content.profile.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-soft)] sm:text-xl">
                {content.profile.subtitle}
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-[var(--ink-soft)]">
                {content.profile.intro}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/Projects"
                  className="rounded-full bg-[var(--ink-strong)] px-6 py-3 text-sm font-medium text-white shadow-[0_24px_50px_rgba(21,32,64,0.18)] transition hover:-translate-y-0.5"
                >
                  View selected work
                </Link>
                <Link
                  href="/Email"
                  className="rounded-full border border-[var(--line-strong)] px-6 py-3 text-sm font-medium text-[var(--ink-strong)] transition hover:bg-white"
                >
                  Start a conversation
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-[var(--ink-soft)]">
                {content.profile.socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>

              <div className="mt-14 grid gap-8 border-t border-[var(--line-soft)] pt-8 sm:grid-cols-3">
                {content.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-[family:var(--font-display)] text-4xl text-[var(--ink-strong)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[28rem] animate-float">
                <div className="absolute -left-6 top-10 h-20 w-20 rounded-full bg-[rgba(23,76,255,0.18)] blur-2xl" />
                <div className="absolute -right-8 bottom-4 h-24 w-24 rounded-full bg-[rgba(242,98,59,0.18)] blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_36px_120px_rgba(24,39,75,0.18)] backdrop-blur-2xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                    <Image
                      src={content.profile.profileImage}
                      alt={content.profile.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80vw, 28rem"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-[1.4rem] bg-[var(--surface-muted)] px-4 py-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                        Based in
                      </p>
                      <p className="mt-2 text-sm font-medium text-[var(--ink-strong)]">
                        {content.profile.location}
                      </p>
                    </div>
                    <div className="h-12 w-px bg-[var(--line-soft)]" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                        Focus
                      </p>
                      <p className="mt-2 text-sm font-medium text-[var(--ink-strong)]">
                        AI, Web3, product systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What I Build"
            title="Technical depth with product taste."
            description="I work best where architecture, product judgment, and speed all matter at once."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {content.focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="border-t border-[var(--line-strong)] pt-6"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-[family:var(--font-display)] text-3xl leading-tight text-[var(--ink-strong)]">
                  {area.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/40 bg-[var(--surface-muted)]">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="About"
                title={content.about.summary}
                description={content.about.detail}
              />
            </div>

            <div className="grid gap-10">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_28px_90px_rgba(24,39,75,0.1)]">
                <div className="relative h-72">
                  <Image
                    src={content.profile.aboutImage}
                    alt="Visual section"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {content.about.principles.map((principle) => (
                  <div key={principle} className="rounded-[1.6rem] bg-white px-5 py-6">
                    <p className="text-sm leading-7 text-[var(--ink-soft)]">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="A few projects I’d put in front of any hiring team or founder."
              description="These are the projects that best represent how I think, build, and polish."
            />
            <Link href="/Projects" className="text-sm text-[var(--accent-strong)]">
              See all projects
            </Link>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/Projects/${project.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_70px_rgba(24,39,75,0.08)] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[var(--ink-subtle)]">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-4 font-[family:var(--font-display)] text-3xl text-[var(--ink-strong)]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(23,76,255,0.06))]">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
                Contact
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl leading-tight text-[var(--ink-strong)] sm:text-5xl">
                {content.contact.headline}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
                {content.contact.availabilityNote}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/Email"
                className="rounded-full bg-[var(--accent-strong)] px-6 py-3 text-sm font-medium text-white"
              >
                Contact me
              </Link>
              {content.profile.resumeUrl ? (
                <a
                  href={content.profile.resumeUrl}
                  className="rounded-full border border-[var(--line-strong)] px-6 py-3 text-sm font-medium text-[var(--ink-strong)]"
                >
                  Download resume
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
