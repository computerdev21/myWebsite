import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { PortfolioContent } from "../../types/portfolio";

type SiteShellProps = {
  children: ReactNode;
  content: PortfolioContent;
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Experience", label: "Work" },
  { href: "/Projects", label: "Projects" },
  { href: "/Skills", label: "Skills" },
  { href: "/Hobbies", label: "Life" },
  { href: "/Email", label: "Contact" },
];

export function SiteShell({ children, content }: SiteShellProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const activePath = useMemo(() => router.pathname, [router.pathname]);

  return (
    <div className="min-h-screen bg-[var(--surface-base)] text-[var(--ink-strong)]">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-[color:rgba(248,247,243,0.8)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-strong)] text-sm font-semibold uppercase tracking-[0.3em] text-white">
              DC
            </span>
            <span className="font-[family:var(--font-display)] text-lg tracking-[0.08em]">
              {content.profile.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? activePath === "/"
                  : activePath.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? "bg-[var(--ink-strong)] text-white"
                      : "text-[var(--ink-soft)] hover:bg-white hover:text-[var(--ink-strong)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={content.profile.resumeUrl || "#"}
              className="rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm text-[var(--ink-strong)] transition hover:bg-[var(--ink-strong)] hover:text-white"
            >
              {content.profile.resumeLabel}
            </a>
            <Link
              href="/Email"
              className="rounded-full bg-[var(--accent-strong)] px-5 py-2 text-sm text-white shadow-[0_14px_40px_rgba(23,76,255,0.22)] transition hover:-translate-y-0.5"
            >
              Let&apos;s build
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-soft)] bg-white text-[var(--ink-strong)] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/50 bg-[var(--surface-base)] px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? activePath === "/"
                    : activePath.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-2xl px-4 py-3 text-base ${
                      active
                        ? "bg-[var(--ink-strong)] text-white"
                        : "bg-white text-[var(--ink-strong)]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={content.profile.resumeUrl || "#"}
                className="rounded-2xl border border-[var(--line-strong)] px-4 py-3 text-base text-[var(--ink-strong)]"
              >
                {content.profile.resumeLabel}
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/50 bg-[var(--surface-muted)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <p className="font-[family:var(--font-display)] text-2xl tracking-[0.08em]">
              {content.profile.name}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
              {content.contact.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-[var(--ink-soft)] lg:items-end">
            <div className="flex flex-wrap gap-4">
              {content.profile.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${content.profile.email}`}>{content.profile.email}</a>
              <Link href="/admin">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
