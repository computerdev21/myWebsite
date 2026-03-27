import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type {
  ExperienceItem,
  PortfolioContent,
  Project,
  SkillGroup,
} from "../types/portfolio";

const emptyProject: Project = {
  slug: "new-project",
  name: "New Project",
  tagline: "",
  description: "",
  longDescription: "",
  image: "/portfolio/project-archetype.jpg",
  category: "AI",
  year: String(new Date().getFullYear()),
  featured: false,
  role: "",
  period: "",
  status: "Draft",
  tech: [],
  highlights: [],
  metrics: [],
  challenges: [],
  links: {},
};

const emptySkillGroup: SkillGroup = {
  name: "New Group",
  skills: [],
};

const emptyExperience: ExperienceItem = {
  company: "New Company",
  location: "",
  role: "",
  date: "",
  summary: "",
  points: [],
  techStack: "",
};

function parseCommaSeparated(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseLineSeparated(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [defaultPassword, setDefaultPassword] = useState(false);
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [status, setStatus] = useState("Checking session...");
  const [saveState, setSaveState] = useState("Idle");
  const [activeSection, setActiveSection] = useState<
    "profile" | "projects" | "skills" | "experience" | "resume"
  >("profile");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const [uploadingResume, setUploadingResume] = useState(false);

  const snapshot = useMemo(
    () => (content ? JSON.stringify(content) : ""),
    [content]
  );
  const [savedSnapshot, setSavedSnapshot] = useState("");

  const isDirty = !!content && snapshot !== savedSnapshot;

  useEffect(() => {
    async function loadSession() {
      const response = await fetch("/api/admin/session");
      const payload = await response.json();
      setAuthorized(payload.authorized);
      setDefaultPassword(payload.defaultPassword);

      if (payload.authorized) {
        await loadContent();
      } else {
        setStatus("Log in to edit the portfolio content.");
      }
    }

    loadSession();
  }, []);

  async function loadContent() {
    setStatus("Loading content...");
    const response = await fetch("/api/admin/content");
    const payload = await response.json();

    if (!response.ok) {
      setStatus(payload.error || "Unable to load content.");
      return;
    }

    setContent(payload.content);
    const nextSnapshot = JSON.stringify(payload.content);
    setSavedSnapshot(nextSnapshot);
    setStatus("Content loaded.");
  }

  function updateProject(nextProject: Project) {
    const nextProjects = [...(content?.projects || [])];
    nextProjects[selectedProjectIndex] = nextProject;
    setContent(content ? { ...content, projects: nextProjects } : content);
  }

  function updateSkillGroup(nextGroup: SkillGroup) {
    const nextGroups = [...(content?.skillGroups || [])];
    nextGroups[selectedSkillIndex] = nextGroup;
    setContent(content ? { ...content, skillGroups: nextGroups } : content);
  }

  function updateExperience(nextExperience: ExperienceItem) {
    const nextEntries = [...(content?.experience || [])];
    nextEntries[selectedExperienceIndex] = nextExperience;
    setContent(content ? { ...content, experience: nextEntries } : content);
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Signing in...");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const payload = await response.json();

    if (!response.ok) {
      setStatus(payload.error || "Unable to sign in.");
      return;
    }

    setAuthorized(true);
    setDefaultPassword(payload.defaultPassword);
    setPassword("");
    await loadContent();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });
    setAuthorized(false);
    setContent(null);
    setSavedSnapshot("");
    setStatus("Signed out.");
  }

  async function saveContent() {
    if (!content) {
      return;
    }

    setSaveState("Saving...");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });
    const payload = await response.json();

    if (!response.ok) {
      setSaveState(payload.error || "Unable to save.");
      return;
    }

    setContent(payload.content);
    setSavedSnapshot(JSON.stringify(payload.content));
    setSaveState("Saved");
  }

  async function handleResumeUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file || !content) {
      return;
    }

    setUploadingResume(true);
    setSaveState("Uploading resume...");

    const fileData = await file.arrayBuffer();
    const bytes = new Uint8Array(fileData);
    let binary = "";

    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });

    const response = await fetch("/api/admin/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filename: file.name,
        contentBase64: btoa(binary),
      }),
    });

    const payload = await response.json();
    setUploadingResume(false);

    if (!response.ok) {
      setSaveState(payload.error || "Resume upload failed.");
      return;
    }

    setContent({
      ...content,
      profile: {
        ...content.profile,
        resumeUrl: payload.url,
      },
    });
    setSaveState("Resume uploaded. Save changes to publish the link.");
  }

  if (!authorized) {
    return (
      <main className="min-h-screen bg-[var(--surface-base)] px-5 py-10 text-[var(--ink-strong)]">
        <div className="mx-auto max-w-md rounded-[2rem] border border-white/70 bg-white px-6 py-7 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
            Portfolio admin
          </p>
          <h1 className="mt-4 font-[family:var(--font-display)] text-4xl">
            Sign in
          </h1>
          <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
            This workspace edits the live portfolio content file used by the public site.
          </p>
          <form className="mt-8 grid gap-4" onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Admin password"
              className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
            />
            <button className="rounded-full bg-[var(--ink-strong)] px-5 py-3 text-sm text-white">
              Unlock admin
            </button>
          </form>
          <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{status}</p>
          {defaultPassword ? (
            <p className="mt-3 rounded-2xl bg-[rgba(242,98,59,0.12)] px-4 py-3 text-sm leading-7 text-[var(--ink-strong)]">
              `ADMIN_PASSWORD` is still using the default fallback. Change it before deploying.
            </p>
          ) : null}
        </div>
      </main>
    );
  }

  if (!content) {
    return (
      <main className="min-h-screen bg-[var(--surface-base)] px-5 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white px-6 py-8 text-[var(--ink-strong)] shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
          {status}
        </div>
      </main>
    );
  }

  const selectedProject = content.projects[selectedProjectIndex] || content.projects[0];
  const selectedSkill = content.skillGroups[selectedSkillIndex] || content.skillGroups[0];
  const selectedExperience =
    content.experience[selectedExperienceIndex] || content.experience[0];

  return (
    <main className="min-h-screen bg-[var(--surface-base)] px-4 py-5 text-[var(--ink-strong)] sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white px-5 py-5 shadow-[0_24px_70px_rgba(24,39,75,0.08)] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Admin workspace
            </p>
            <h1 className="mt-2 font-[family:var(--font-display)] text-4xl">
              Manage portfolio content
            </h1>
            <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
              Last content update: {new Date(content.updatedAt).toLocaleString()}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line-soft)] px-4 py-2 text-sm"
            >
              Open site
            </a>
            <button
              type="button"
              onClick={saveContent}
              className="rounded-full bg-[var(--ink-strong)] px-5 py-2 text-sm text-white"
            >
              {isDirty ? "Save changes" : "Save"}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-[var(--line-soft)] px-4 py-2 text-sm"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-3">
          {[
            { id: "profile", label: "Profile" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "experience", label: "Experience" },
            { id: "resume", label: "Resume" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                setActiveSection(item.id as typeof activeSection)
              }
              className={`rounded-full px-4 py-2 text-sm ${
                activeSection === item.id
                  ? "bg-[var(--ink-strong)] text-white"
                  : "border border-[var(--line-soft)] bg-white text-[var(--ink-soft)]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <p className="ml-auto text-sm leading-10 text-[var(--ink-soft)]">
            {saveState}
          </p>
        </div>

        {defaultPassword ? (
          <div className="mb-5 rounded-[1.6rem] bg-[rgba(242,98,59,0.12)] px-5 py-4 text-sm leading-7">
            `ADMIN_PASSWORD` is still using the default fallback. Add a real password in your environment before you deploy this.
          </div>
        ) : null}

        {activeSection === "profile" ? (
          <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="rounded-[2rem] border border-white/70 bg-white px-5 py-6 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <h2 className="font-[family:var(--font-display)] text-3xl">
                Core profile
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  {
                    label: "Name",
                    value: content.profile.name,
                    onChange: (value: string) =>
                      setContent({
                        ...content,
                        profile: { ...content.profile, name: value },
                      }),
                  },
                  {
                    label: "Title",
                    value: content.profile.title,
                    onChange: (value: string) =>
                      setContent({
                        ...content,
                        profile: { ...content.profile, title: value },
                      }),
                  },
                  {
                    label: "Location",
                    value: content.profile.location,
                    onChange: (value: string) =>
                      setContent({
                        ...content,
                        profile: { ...content.profile, location: value },
                      }),
                  },
                  {
                    label: "Email",
                    value: content.profile.email,
                    onChange: (value: string) =>
                      setContent({
                        ...content,
                        profile: { ...content.profile, email: value },
                      }),
                  },
                  {
                    label: "Availability",
                    value: content.profile.availability,
                    onChange: (value: string) =>
                      setContent({
                        ...content,
                        profile: { ...content.profile, availability: value },
                      }),
                  },
                  {
                    label: "Resume label",
                    value: content.profile.resumeLabel,
                    onChange: (value: string) =>
                      setContent({
                        ...content,
                        profile: { ...content.profile, resumeLabel: value },
                      }),
                  },
                  {
                    label: "Profile image",
                    value: content.profile.profileImage,
                    onChange: (value: string) =>
                      setContent({
                        ...content,
                        profile: { ...content.profile, profileImage: value },
                      }),
                  },
                  {
                    label: "Hero image",
                    value: content.profile.heroImage,
                    onChange: (value: string) =>
                      setContent({
                        ...content,
                        profile: { ...content.profile, heroImage: value },
                      }),
                  },
                ].map((field) => (
                  <label key={field.label} className="grid gap-2">
                    <span className="text-sm text-[var(--ink-soft)]">{field.label}</span>
                    <input
                      value={field.value}
                      onChange={(event) => field.onChange(event.target.value)}
                      className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Subtitle</span>
                <textarea
                  rows={3}
                  value={content.profile.subtitle}
                  onChange={(event) =>
                    setContent({
                      ...content,
                      profile: { ...content.profile, subtitle: event.target.value },
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Intro</span>
                <textarea
                  rows={4}
                  value={content.profile.intro}
                  onChange={(event) =>
                    setContent({
                      ...content,
                      profile: { ...content.profile, intro: event.target.value },
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white px-5 py-6 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <h2 className="font-[family:var(--font-display)] text-3xl">
                Metadata
              </h2>
              <div className="mt-6 grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Site title</span>
                  <input
                    value={content.meta.siteTitle}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        meta: { ...content.meta, siteTitle: event.target.value },
                      })
                    }
                    className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Site URL</span>
                  <input
                    value={content.meta.siteUrl}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        meta: { ...content.meta, siteUrl: event.target.value },
                      })
                    }
                    className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Site description</span>
                  <textarea
                    rows={5}
                    value={content.meta.siteDescription}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        meta: { ...content.meta, siteDescription: event.target.value },
                      })
                    }
                    className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                  />
                </label>
              </div>
            </div>
          </section>
        ) : null}

        {activeSection === "projects" && selectedProject ? (
          <section className="grid gap-5 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <div className="rounded-[2rem] border border-white/70 bg-white px-4 py-4 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-[family:var(--font-display)] text-2xl">Projects</h2>
                <button
                  type="button"
                  onClick={() => {
                    setContent({
                      ...content,
                      projects: [...content.projects, { ...emptyProject, slug: `project-${content.projects.length + 1}` }],
                    });
                    setSelectedProjectIndex(content.projects.length);
                  }}
                  className="rounded-full border border-[var(--line-soft)] px-3 py-1 text-sm"
                >
                  Add
                </button>
              </div>
              <div className="grid gap-2">
                {content.projects.map((project, index) => (
                  <button
                    key={`${project.slug}-${index}`}
                    type="button"
                    onClick={() => setSelectedProjectIndex(index)}
                    className={`rounded-[1.2rem] px-3 py-3 text-left ${
                      index === selectedProjectIndex
                        ? "bg-[var(--ink-strong)] text-white"
                        : "bg-[var(--surface-muted)] text-[var(--ink-strong)]"
                    }`}
                  >
                    <p className="text-sm font-medium">{project.name}</p>
                    <p className="mt-1 text-xs opacity-75">{project.category}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white px-5 py-6 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-[family:var(--font-display)] text-3xl">
                  Edit project
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    const nextProjects = content.projects.filter(
                      (_, index) => index !== selectedProjectIndex
                    );
                    setContent({ ...content, projects: nextProjects });
                    setSelectedProjectIndex(Math.max(0, selectedProjectIndex - 1));
                  }}
                  className="rounded-full border border-[rgba(180,35,24,0.2)] px-4 py-2 text-sm text-[#b42318]"
                >
                  Remove project
                </button>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ["Slug", selectedProject.slug, "slug"],
                  ["Name", selectedProject.name, "name"],
                  ["Category", selectedProject.category, "category"],
                  ["Year", selectedProject.year, "year"],
                  ["Role", selectedProject.role, "role"],
                  ["Period", selectedProject.period, "period"],
                  ["Status", selectedProject.status, "status"],
                  ["Image path", selectedProject.image, "image"]
                ].map(([label, value, key]) => (
                  <label key={label} className="grid gap-2">
                    <span className="text-sm text-[var(--ink-soft)]">{label}</span>
                    <input
                      value={String(value)}
                      onChange={(event) => {
                        updateProject({
                          ...selectedProject,
                          [key]: event.target.value,
                        } as Project);
                      }}
                      className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                    />
                  </label>
                ))}
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Live link</span>
                  <input
                    value={selectedProject.links.live || ""}
                    onChange={(event) =>
                      updateProject({
                        ...selectedProject,
                        links: {
                          ...selectedProject.links,
                          live: event.target.value,
                        },
                      })
                    }
                    className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">GitHub link</span>
                  <input
                    value={selectedProject.links.github || ""}
                    onChange={(event) =>
                      updateProject({
                        ...selectedProject,
                        links: {
                          ...selectedProject.links,
                          github: event.target.value,
                        },
                      })
                    }
                    className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Tagline</span>
                <input
                  value={selectedProject.tagline}
                  onChange={(event) =>
                    updateProject({
                      ...selectedProject,
                      tagline: event.target.value,
                    })
                  }
                  className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Description</span>
                <textarea
                  rows={3}
                  value={selectedProject.description}
                  onChange={(event) =>
                    updateProject({
                      ...selectedProject,
                      description: event.target.value,
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Long description</span>
                <textarea
                  rows={7}
                  value={selectedProject.longDescription}
                  onChange={(event) =>
                    updateProject({
                      ...selectedProject,
                      longDescription: event.target.value,
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Tech stack</span>
                  <textarea
                  rows={5}
                  value={selectedProject.tech.join(", ")}
                  onChange={(event) =>
                    updateProject({
                      ...selectedProject,
                      tech: parseCommaSeparated(event.target.value),
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
                <label className="grid gap-2">
                  <span className="text-sm text-[var(--ink-soft)]">Highlights</span>
                  <textarea
                  rows={5}
                  value={selectedProject.highlights.join("\n")}
                  onChange={(event) =>
                    updateProject({
                      ...selectedProject,
                      highlights: parseLineSeparated(event.target.value),
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
              </div>
              <label className="mt-4 flex items-center gap-3 text-sm text-[var(--ink-soft)]">
                <input
                  type="checkbox"
                  checked={selectedProject.featured}
                  onChange={(event) =>
                    updateProject({
                      ...selectedProject,
                      featured: event.target.checked,
                    })
                  }
                />
                Featured project
              </label>
            </div>
          </section>
        ) : null}

        {activeSection === "skills" && selectedSkill ? (
          <section className="grid gap-5 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <div className="rounded-[2rem] border border-white/70 bg-white px-4 py-4 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-[family:var(--font-display)] text-2xl">Skill groups</h2>
                <button
                  type="button"
                  onClick={() => {
                    setContent({
                      ...content,
                      skillGroups: [...content.skillGroups, { ...emptySkillGroup }],
                    });
                    setSelectedSkillIndex(content.skillGroups.length);
                  }}
                  className="rounded-full border border-[var(--line-soft)] px-3 py-1 text-sm"
                >
                  Add
                </button>
              </div>
              <div className="grid gap-2">
                {content.skillGroups.map((group, index) => (
                  <button
                    key={`${group.name}-${index}`}
                    type="button"
                    onClick={() => setSelectedSkillIndex(index)}
                    className={`rounded-[1.2rem] px-3 py-3 text-left ${
                      index === selectedSkillIndex
                        ? "bg-[var(--ink-strong)] text-white"
                        : "bg-[var(--surface-muted)] text-[var(--ink-strong)]"
                    }`}
                  >
                    {group.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white px-5 py-6 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <div className="flex items-center justify-between">
                <h2 className="font-[family:var(--font-display)] text-3xl">Edit skill group</h2>
                <button
                  type="button"
                  onClick={() => {
                    const nextGroups = content.skillGroups.filter(
                      (_, index) => index !== selectedSkillIndex
                    );
                    setContent({ ...content, skillGroups: nextGroups });
                    setSelectedSkillIndex(Math.max(0, selectedSkillIndex - 1));
                  }}
                  className="rounded-full border border-[rgba(180,35,24,0.2)] px-4 py-2 text-sm text-[#b42318]"
                >
                  Remove group
                </button>
              </div>

              <label className="mt-6 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Group name</span>
                <input
                  value={selectedSkill.name}
                  onChange={(event) =>
                    updateSkillGroup({
                      ...selectedSkill,
                      name: event.target.value,
                    })
                  }
                  className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Skills (comma separated)</span>
                <textarea
                  rows={10}
                  value={selectedSkill.skills.join(", ")}
                  onChange={(event) =>
                    updateSkillGroup({
                      ...selectedSkill,
                      skills: parseCommaSeparated(event.target.value),
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
            </div>
          </section>
        ) : null}

        {activeSection === "experience" && selectedExperience ? (
          <section className="grid gap-5 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <div className="rounded-[2rem] border border-white/70 bg-white px-4 py-4 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-[family:var(--font-display)] text-2xl">Experience</h2>
                <button
                  type="button"
                  onClick={() => {
                    setContent({
                      ...content,
                      experience: [...content.experience, { ...emptyExperience }],
                    });
                    setSelectedExperienceIndex(content.experience.length);
                  }}
                  className="rounded-full border border-[var(--line-soft)] px-3 py-1 text-sm"
                >
                  Add
                </button>
              </div>
              <div className="grid gap-2">
                {content.experience.map((item, index) => (
                  <button
                    key={`${item.company}-${index}`}
                    type="button"
                    onClick={() => setSelectedExperienceIndex(index)}
                    className={`rounded-[1.2rem] px-3 py-3 text-left ${
                      index === selectedExperienceIndex
                        ? "bg-[var(--ink-strong)] text-white"
                        : "bg-[var(--surface-muted)] text-[var(--ink-strong)]"
                    }`}
                  >
                    <p className="text-sm font-medium">{item.company}</p>
                    <p className="mt-1 text-xs opacity-75">{item.role}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white px-5 py-6 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <div className="flex items-center justify-between">
                <h2 className="font-[family:var(--font-display)] text-3xl">Edit experience</h2>
                <button
                  type="button"
                  onClick={() => {
                    const nextExperience = content.experience.filter(
                      (_, index) => index !== selectedExperienceIndex
                    );
                    setContent({ ...content, experience: nextExperience });
                    setSelectedExperienceIndex(Math.max(0, selectedExperienceIndex - 1));
                  }}
                  className="rounded-full border border-[rgba(180,35,24,0.2)] px-4 py-2 text-sm text-[#b42318]"
                >
                  Remove entry
                </button>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ["Company", selectedExperience.company, "company"],
                  ["Role", selectedExperience.role, "role"],
                  ["Location", selectedExperience.location, "location"],
                  ["Date", selectedExperience.date, "date"],
                  ["Tech stack", selectedExperience.techStack, "techStack"]
                ].map(([label, value, key]) => (
                  <label key={label} className="grid gap-2">
                    <span className="text-sm text-[var(--ink-soft)]">{label}</span>
                    <input
                      value={String(value)}
                      onChange={(event) =>
                        updateExperience({
                          ...selectedExperience,
                          [key]: event.target.value,
                        } as ExperienceItem)
                      }
                      className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Summary</span>
                <textarea
                  rows={4}
                  value={selectedExperience.summary}
                  onChange={(event) =>
                    updateExperience({
                      ...selectedExperience,
                      summary: event.target.value,
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Bullet points</span>
                <textarea
                  rows={8}
                  value={selectedExperience.points.join("\n")}
                  onChange={(event) =>
                    updateExperience({
                      ...selectedExperience,
                      points: parseLineSeparated(event.target.value),
                    })
                  }
                  className="rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 py-3 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
            </div>
          </section>
        ) : null}

        {activeSection === "resume" ? (
          <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_24rem]">
            <div className="rounded-[2rem] border border-white/70 bg-white px-5 py-6 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <h2 className="font-[family:var(--font-display)] text-3xl">
                Resume settings
              </h2>
              <label className="mt-6 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Public resume URL</span>
                <input
                  value={content.profile.resumeUrl}
                  onChange={(event) =>
                    setContent({
                      ...content,
                      profile: { ...content.profile, resumeUrl: event.target.value },
                    })
                  }
                  className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
              <label className="mt-4 grid gap-2">
                <span className="text-sm text-[var(--ink-soft)]">Resume label</span>
                <input
                  value={content.profile.resumeLabel}
                  onChange={(event) =>
                    setContent({
                      ...content,
                      profile: { ...content.profile, resumeLabel: event.target.value },
                    })
                  }
                  className="h-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] px-4 outline-none focus:border-[var(--accent-strong)]"
                />
              </label>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white px-5 py-6 shadow-[0_24px_70px_rgba(24,39,75,0.08)]">
              <h2 className="font-[family:var(--font-display)] text-3xl">
                Upload a new file
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                Upload a PDF, DOC, or DOCX file. The admin will place it in `public/resume/`
                and update the resume link in your draft content.
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                className="mt-6 block w-full text-sm"
              />
              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                {uploadingResume ? "Uploading..." : "Upload a file, then click Save changes."}
              </p>
              {content.profile.resumeUrl ? (
                <a
                  href={content.profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full border border-[var(--line-soft)] px-4 py-2 text-sm"
                >
                  Open current resume
                </a>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
