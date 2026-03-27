import { useMemo, useState } from 'react';
import { savePortfolioContent, getPortfolioContent, resetPortfolioContent, type Experience, type Project } from '../lib/portfolio-content';
import { usePortfolioContent } from '../lib/usePortfolioContent';

const adminSections = ['Dashboard', 'Projects', 'Experience', 'Resume', 'Contact', 'Site Settings'] as const;
type AdminSection = (typeof adminSections)[number];

const parseList = (value: string) => value.split(',').map((v) => v.trim()).filter(Boolean);

export default function AdminPage() {
  const data = usePortfolioContent();
  const [section, setSection] = useState<AdminSection>('Dashboard');
  const [passcode, setPasscode] = useState('');
  const [authed, setAuthed] = useState(sessionStorage.getItem('portfolio-admin-ok') === '1');

  if (!authed) {
    return (
      <div className="pt-28 max-w-md mx-auto px-4">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h1 className="text-2xl font-semibold mb-2">Admin Access</h1>
          <p className="text-sm text-muted-foreground mb-4">Enter passcode. Default is <code>admin123</code> unless <code>VITE_ADMIN_PASSCODE</code> is configured.</p>
          <input className="w-full rounded-xl border border-border bg-secondary px-4 py-3 mb-3" type="password" value={passcode} onChange={(e) => setPasscode(e.target.value)} />
          <button
            onClick={() => {
              const expected = (import.meta.env.VITE_ADMIN_PASSCODE as string | undefined) ?? 'admin123';
              if (passcode === expected) {
                sessionStorage.setItem('portfolio-admin-ok', '1');
                setAuthed(true);
              }
            }}
            className="w-full rounded-xl bg-gradient-to-r from-apple-blue to-apple-purple text-white py-3"
          >
            Unlock Admin
          </button>
        </div>
      </div>
    );
  }

  const sortedProjects = useMemo(() => [...data.projects].sort((a, b) => a.sortOrder - b.sortOrder), [data.projects]);
  const sortedExperience = useMemo(() => [...data.experiences].sort((a, b) => a.sortOrder - b.sortOrder), [data.experiences]);

  const updateContent = (updater: (current: ReturnType<typeof getPortfolioContent>) => void) => {
    const current = getPortfolioContent();
    updater(current);
    savePortfolioContent(current);
  };

  const upsertProject = (project: Project) => {
    updateContent((current) => {
      const idx = current.projects.findIndex((item) => item.id === project.id);
      if (idx >= 0) current.projects[idx] = project;
      else current.projects.push(project);
    });
  };

  const upsertExperience = (experience: Experience) => {
    updateContent((current) => {
      const idx = current.experiences.findIndex((item) => item.id === experience.id);
      if (idx >= 0) current.experiences[idx] = experience;
      else current.experiences.push(experience);
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid lg:grid-cols-[220px_1fr] gap-6">
        <aside className="rounded-2xl border border-border bg-card p-4 h-fit sticky top-24">
          <h2 className="font-semibold mb-3">Admin</h2>
          <nav className="space-y-1">
            {adminSections.map((item) => (
              <button key={item} onClick={() => setSection(item)} className={`w-full text-left px-3 py-2 rounded-xl text-sm ${section === item ? 'bg-foreground text-background' : 'hover:bg-secondary'}`}>
                {item}
              </button>
            ))}
          </nav>
          <button onClick={() => { resetPortfolioContent(); }} className="mt-4 w-full px-3 py-2 rounded-xl border border-border text-sm">Reset Seed Data</button>
        </aside>

        <main className="rounded-2xl border border-border bg-card p-6">
          {section === 'Dashboard' && (
            <div>
              <h1 className="text-3xl font-semibold mb-6">Content Overview</h1>
              <div className="grid sm:grid-cols-3 gap-4">
                <StatCard label="Projects" value={String(data.projects.length)} />
                <StatCard label="Experience Items" value={String(data.experiences.length)} />
                <StatCard label="Inbox Submissions" value={String(data.submissions.length)} />
              </div>
            </div>
          )}

          {section === 'Projects' && (
            <CollectionEditor
              title="Projects"
              items={sortedProjects}
              onMove={(id, direction) => updateContent((current) => {
                const list = [...current.projects].sort((a, b) => a.sortOrder - b.sortOrder);
                const index = list.findIndex((item) => item.id === id);
                const swap = direction === 'up' ? index - 1 : index + 1;
                if (index < 0 || swap < 0 || swap >= list.length) return;
                [list[index].sortOrder, list[swap].sortOrder] = [list[swap].sortOrder, list[index].sortOrder];
                current.projects = list;
              })}
              onDelete={(id) => updateContent((current) => { current.projects = current.projects.filter((item) => item.id !== id); })}
              renderForm={(item, onDone) => (
                <ProjectForm
                  initial={item as Project | undefined}
                  maxOrder={data.projects.length + 1}
                  onSubmit={(payload) => { upsertProject(payload); onDone(); }}
                />
              )}
            />
          )}

          {section === 'Experience' && (
            <CollectionEditor
              title="Experience"
              items={sortedExperience}
              onMove={(id, direction) => updateContent((current) => {
                const list = [...current.experiences].sort((a, b) => a.sortOrder - b.sortOrder);
                const index = list.findIndex((item) => item.id === id);
                const swap = direction === 'up' ? index - 1 : index + 1;
                if (index < 0 || swap < 0 || swap >= list.length) return;
                [list[index].sortOrder, list[swap].sortOrder] = [list[swap].sortOrder, list[index].sortOrder];
                current.experiences = list;
              })}
              onDelete={(id) => updateContent((current) => { current.experiences = current.experiences.filter((item) => item.id !== id); })}
              renderForm={(item, onDone) => (
                <ExperienceForm
                  initial={item as Experience | undefined}
                  maxOrder={data.experiences.length + 1}
                  onSubmit={(payload) => { upsertExperience(payload); onDone(); }}
                />
              )}
            />
          )}

          {section === 'Resume' && (
            <SettingsPanel title="Resume Settings">
              <Field label="Resume Title" value={data.resume.title} onChange={(value) => updateContent((current) => { current.resume.title = value; })} />
              <Field label="Resume URL" value={data.resume.resumeUrl} onChange={(value) => updateContent((current) => { current.resume.resumeUrl = value; })} />
              <Field label="Embed URL" value={data.resume.embedUrl} onChange={(value) => updateContent((current) => { current.resume.embedUrl = value; })} />
            </SettingsPanel>
          )}

          {section === 'Contact' && (
            <SettingsPanel title="Contact / Inbox Settings">
              <Field label="Target Email" value={data.contact.targetEmail} onChange={(value) => updateContent((current) => { current.contact.targetEmail = value; })} />
              <Toggle label="Store submissions" checked={data.contact.storeSubmissions} onChange={(value) => updateContent((current) => { current.contact.storeSubmissions = value; })} />
              <Toggle label="Send notifications" checked={data.contact.sendNotifications} onChange={(value) => updateContent((current) => { current.contact.sendNotifications = value; })} />
              <p className="text-xs text-muted-foreground">Email delivery contract is scaffolded. Integrate a server endpoint/provider and use these flags as runtime controls.</p>
            </SettingsPanel>
          )}

          {section === 'Site Settings' && (
            <SettingsPanel title="Public Hero Settings">
              <Field label="Hero title" value={data.site.heroTitle} onChange={(value) => updateContent((current) => { current.site.heroTitle = value; })} />
              <Field label="Hero subtitle" value={data.site.heroSubtitle} onChange={(value) => updateContent((current) => { current.site.heroSubtitle = value; })} />
              <Field label="Hero summary" value={data.site.heroSummary} multiline onChange={(value) => updateContent((current) => { current.site.heroSummary = value; })} />
            </SettingsPanel>
          )}
        </main>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-border bg-secondary/50 p-4"><p className="text-sm text-muted-foreground">{label}</p><p className="text-3xl font-semibold">{value}</p></div>;
}

function SettingsPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="space-y-4"><h1 className="text-3xl font-semibold">{title}</h1>{children}</div>;
}

function Field({ label, value, onChange, multiline }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean }) {
  return (
    <label className="block">
      <p className="text-sm mb-1">{label}</p>
      {multiline ? <textarea value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-border bg-secondary px-3 py-2" rows={4} /> : <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-border bg-secondary px-3 py-2" />}
    </label>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return <button onClick={() => onChange(!checked)} className="flex items-center justify-between rounded-xl border border-border bg-secondary px-3 py-2 w-full"><span>{label}</span><span>{checked ? 'On' : 'Off'}</span></button>;
}

function CollectionEditor<T extends { id: string; name?: string; role?: string; featured: boolean }>({
  title,
  items,
  onMove,
  onDelete,
  renderForm,
}: {
  title: string;
  items: T[];
  onMove: (id: string, direction: 'up' | 'down') => void;
  onDelete: (id: string) => void;
  renderForm: (item: T | null, onDone: () => void) => React.ReactNode;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const editingItem = items.find((item) => item.id === editingId) ?? null;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <button onClick={() => setEditingId('new')} className="px-4 py-2 rounded-xl bg-foreground text-background text-sm">Add {title.slice(0, -1)}</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-muted-foreground border-b border-border"><th className="py-2">Name</th><th>Featured</th><th>Actions</th></tr></thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-border/60">
                <td className="py-3">{item.name ?? item.role}</td>
                <td>{item.featured ? 'Yes' : 'No'}</td>
                <td className="space-x-2">
                  <button onClick={() => onMove(item.id, 'up')}>↑</button>
                  <button onClick={() => onMove(item.id, 'down')}>↓</button>
                  <button onClick={() => setEditingId(item.id)}>Edit</button>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingId && <div className="mt-6 rounded-2xl border border-border p-4 bg-secondary/30">{renderForm(editingId === 'new' ? null : editingItem, () => setEditingId(null))}</div>}
    </div>
  );
}

function ProjectForm({ initial, maxOrder, onSubmit }: { initial?: Project; maxOrder: number; onSubmit: (project: Project) => void }) {
  const [value, setValue] = useState<Project>(initial ?? {
    id: crypto.randomUUID(), slug: '', name: '', subtitle: '', shortDescription: '', fullDescription: '', category: '', featured: false, tags: [], techStack: [], coverImage: '/project-archetype.jpg', galleryImages: [], links: {}, timeframe: '', highlights: [], metrics: [], sortOrder: maxOrder,
  });

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">{initial ? 'Edit Project' : 'New Project'}</h2>
      <Field label="Name" value={value.name} onChange={(name) => setValue((v) => ({ ...v, name }))} />
      <Field label="Slug" value={value.slug} onChange={(slug) => setValue((v) => ({ ...v, slug }))} />
      <Field label="Subtitle" value={value.subtitle} onChange={(subtitle) => setValue((v) => ({ ...v, subtitle }))} />
      <Field label="Short Description" value={value.shortDescription} onChange={(shortDescription) => setValue((v) => ({ ...v, shortDescription }))} multiline />
      <Field label="Full Description" value={value.fullDescription} onChange={(fullDescription) => setValue((v) => ({ ...v, fullDescription }))} multiline />
      <Field label="Tech stack (comma-separated)" value={value.techStack.join(', ')} onChange={(next) => setValue((v) => ({ ...v, techStack: parseList(next) }))} />
      <Field label="Highlights (comma-separated)" value={value.highlights.join(', ')} onChange={(next) => setValue((v) => ({ ...v, highlights: parseList(next) }))} />
      <Field label="Cover image path" value={value.coverImage} onChange={(coverImage) => setValue((v) => ({ ...v, coverImage }))} />
      <Toggle label="Featured" checked={value.featured} onChange={(featured) => setValue((v) => ({ ...v, featured }))} />
      <button onClick={() => onSubmit(value)} className="px-4 py-2 rounded-xl bg-foreground text-background">Save Project</button>
    </div>
  );
}

function ExperienceForm({ initial, maxOrder, onSubmit }: { initial?: Experience; maxOrder: number; onSubmit: (experience: Experience) => void }) {
  const [value, setValue] = useState<Experience>(initial ?? {
    id: crypto.randomUUID(), slug: '', role: '', company: '', companyDisplayName: '', dateRange: '', location: '', shortDescription: '', fullDescription: '', bullets: [], technologies: [], featured: false, coverImage: '/about-visual.jpg', links: {}, metrics: [], sortOrder: maxOrder,
  });

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">{initial ? 'Edit Experience' : 'New Experience'}</h2>
      <Field label="Role" value={value.role} onChange={(role) => setValue((v) => ({ ...v, role }))} />
      <Field label="Slug" value={value.slug} onChange={(slug) => setValue((v) => ({ ...v, slug }))} />
      <Field label="Company display name" value={value.companyDisplayName} onChange={(companyDisplayName) => setValue((v) => ({ ...v, companyDisplayName }))} />
      <Field label="Date range" value={value.dateRange} onChange={(dateRange) => setValue((v) => ({ ...v, dateRange }))} />
      <Field label="Location" value={value.location} onChange={(location) => setValue((v) => ({ ...v, location }))} />
      <Field label="Short Description" value={value.shortDescription} onChange={(shortDescription) => setValue((v) => ({ ...v, shortDescription }))} multiline />
      <Field label="Full Description" value={value.fullDescription} onChange={(fullDescription) => setValue((v) => ({ ...v, fullDescription }))} multiline />
      <Field label="Bullets (comma-separated)" value={value.bullets.join(', ')} onChange={(next) => setValue((v) => ({ ...v, bullets: parseList(next) }))} />
      <Field label="Technologies (comma-separated)" value={value.technologies.join(', ')} onChange={(next) => setValue((v) => ({ ...v, technologies: parseList(next) }))} />
      <Field label="Cover image path" value={value.coverImage} onChange={(coverImage) => setValue((v) => ({ ...v, coverImage }))} />
      <Toggle label="Featured" checked={value.featured} onChange={(featured) => setValue((v) => ({ ...v, featured }))} />
      <button onClick={() => onSubmit(value)} className="px-4 py-2 rounded-xl bg-foreground text-background">Save Experience</button>
    </div>
  );
}
