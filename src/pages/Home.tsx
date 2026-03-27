import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { getPortfolioContent, savePortfolioContent } from '../lib/portfolio-content';
import { usePortfolioContent } from '../lib/usePortfolioContent';

export default function Home() {
  const content = usePortfolioContent();
  const featuredProjects = [...content.projects].filter((p) => p.featured).sort((a, b) => a.sortOrder - b.sortOrder).slice(0, 3);
  const featuredExperience = [...content.experiences].filter((e) => e.featured).sort((a, b) => a.sortOrder - b.sortOrder);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const next = getPortfolioContent();
    if (next.contact.storeSubmissions) {
      next.submissions.unshift({
        id: crypto.randomUUID(),
        ...formState,
        submittedAt: new Date().toISOString(),
      });
      savePortfolioContent(next);
    }
    setStatus('sent');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-sm uppercase tracking-widest text-apple-blue mb-4">Design-forward engineering platform</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">{content.site.heroTitle}</h1>
        <p className="text-xl text-muted-foreground mb-3">{content.site.heroSubtitle}</p>
        <p className="max-w-3xl text-muted-foreground">{content.site.heroSummary}</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link to="/projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-apple-blue to-apple-purple text-white inline-flex items-center gap-2">View Projects <ArrowRight className="w-4 h-4" /></Link>
          <Link to="/experience" className="px-6 py-3 rounded-full border border-border bg-card">View Experience</Link>
          <Link to="/admin" className="px-6 py-3 rounded-full border border-border bg-card">Admin Dashboard</Link>
        </div>
      </section>

      <section className="bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6">Featured Builds</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.slug}`} className="rounded-2xl overflow-hidden border border-border bg-card card-hover">
                <img src={project.coverImage} alt={project.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{project.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Current Focus</h2>
          <div className="space-y-4">
            {featuredExperience.map((item) => (
              <Link key={item.id} to={`/experience/${item.slug}`} className="block rounded-2xl border border-border bg-card p-5 hover:border-apple-blue/40 card-hover">
                <p className="text-xs text-muted-foreground">{item.dateRange}</p>
                <h3 className="text-xl font-semibold mt-1">{item.role}</h3>
                <p className="text-apple-blue text-sm">{item.companyDisplayName}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>

        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border bg-card p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-sm text-muted-foreground mb-4">Messages route to {content.contact.targetEmail}. Storage and notification behavior are configurable in Admin settings.</p>
          <div className="space-y-3">
            <input required value={formState.name} onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))} className="w-full rounded-xl border border-border bg-secondary px-4 py-3" placeholder="Name" />
            <input required type="email" value={formState.email} onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))} className="w-full rounded-xl border border-border bg-secondary px-4 py-3" placeholder="Email" />
            <textarea required value={formState.message} onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))} rows={4} className="w-full rounded-xl border border-border bg-secondary px-4 py-3" placeholder="Message" />
            <button className="w-full rounded-xl bg-gradient-to-r from-apple-blue to-apple-purple text-white py-3 inline-flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Send</button>
            {status === 'sent' && <p className="text-sm text-apple-green">Message captured. Configure delivery integration from Admin.</p>}
          </div>
        </motion.form>
      </section>
    </div>
  );
}
