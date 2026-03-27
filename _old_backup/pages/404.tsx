import Link from "next/link";
import { SeoHead } from "../Components/portfolio/SeoHead";
import { SiteShell } from "../Components/portfolio/SiteShell";
import content from "../content/portfolio.json";

export default function NotFoundPage() {
  return (
    <>
      <SeoHead content={content} title="Not found" />
      <SiteShell content={content}>
        <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
            404
          </p>
          <h1 className="mt-5 font-[family:var(--font-display)] text-5xl text-[var(--ink-strong)]">
            That page drifted out of orbit.
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--ink-soft)]">
            The link may be old, or the content may have moved to a cleaner home.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[var(--ink-strong)] px-6 py-3 text-sm text-white"
          >
            Return home
          </Link>
        </section>
      </SiteShell>
    </>
  );
}
