import { useState } from "react";
import type { InferGetServerSidePropsType } from "next";
import { SeoHead } from "../Components/portfolio/SeoHead";
import { SectionHeading } from "../Components/portfolio/SectionHeading";
import { SiteShell } from "../Components/portfolio/SiteShell";
import { withPortfolioContent } from "../lib/portfolio-content";

export const getServerSideProps = withPortfolioContent;

export default function ContactPage({
  content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json();

      if (!response.ok || payload.error) {
        throw new Error(payload.error || "Unable to send message.");
      }

      setStatus("success");
      setFeedback("Message sent. I’ll get back to you as soon as I can.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "The form could not send right now. Use the email link below instead."
      );
    }
  }

  return (
    <>
      <SeoHead
        content={content}
        title="Contact"
        description="Reach out to Dev Chetal for product engineering, AI, blockchain, or startup collaboration."
      />
      <SiteShell content={content}>
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title={content.contact.headline}
                description={content.contact.description}
              />

              <div className="mt-10 space-y-6 rounded-[2rem] border border-white/70 bg-white px-6 py-7 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${content.profile.email}`}
                    className="mt-2 block text-lg text-[var(--ink-strong)]"
                  >
                    {content.profile.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                    Location
                  </p>
                  <p className="mt-2 text-base text-[var(--ink-soft)]">
                    {content.profile.location}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-subtle)]">
                    Best fit
                  </p>
                  <p className="mt-2 text-base leading-8 text-[var(--ink-soft)]">
                    {content.contact.availabilityNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-white/70 bg-white px-6 py-7 shadow-[0_24px_70px_rgba(24,39,75,0.08)] sm:px-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                Send a note
              </p>
              <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, name: event.target.value }))
                    }
                    className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 text-[var(--ink-strong)] outline-none transition focus:border-[var(--accent-strong)]"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, email: event.target.value }))
                    }
                    className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 text-[var(--ink-strong)] outline-none transition focus:border-[var(--accent-strong)]"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Message</span>
                  <textarea
                    required
                    rows={7}
                    value={form.message}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, message: event.target.value }))
                    }
                    className="rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-4 text-[var(--ink-strong)] outline-none transition focus:border-[var(--accent-strong)]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-fit rounded-full bg-[var(--ink-strong)] px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                </button>

                {feedback ? (
                  <p
                    className={`text-sm leading-7 ${
                      status === "success"
                        ? "text-[#146c43]"
                        : "text-[#b42318]"
                    }`}
                  >
                    {feedback}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
