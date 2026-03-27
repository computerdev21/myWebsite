import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Link2, Presentation, Video } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { usePortfolioContent } from '../lib/usePortfolioContent';

const linkIcons = {
  githubUrl: Github,
  liveUrl: ExternalLink,
  docUrl: Link2,
  slidesUrl: Presentation,
  videoUrl: Video,
};

const linkLabels = {
  githubUrl: 'GitHub',
  liveUrl: 'Live Demo',
  docUrl: 'Documentation',
  slidesUrl: 'Slides',
  videoUrl: 'Video',
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const { projects } = usePortfolioContent();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <div className="pt-32 text-center">Project not found. <Link className="text-apple-blue" to="/projects">Back to projects</Link></div>;
  }

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="w-4 h-4" /> Back to Projects</Link>
        <img src={project.coverImage} alt={project.name} className="w-full h-[360px] object-cover rounded-3xl border border-border mb-8" />
        <p className="text-sm text-apple-blue mb-2">{project.category} · {project.timeframe}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.name}</h1>
        <p className="text-xl text-muted-foreground mb-8">{project.subtitle}</p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-semibold text-2xl mb-3">Overview</h2>
              <p className="text-muted-foreground leading-7">{project.fullDescription}</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-semibold text-2xl mb-3">Key Achievements</h2>
              <ul className="space-y-2">
                {project.highlights.map((h) => <li key={h} className="text-muted-foreground">• {h}</li>)}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-semibold text-2xl mb-3">Media & Embeds</h2>
              <p className="text-sm text-muted-foreground">This section is media-ready. Attach screenshots, walkthrough videos, or product demos from Admin.</p>
            </div>
          </div>

          <motion.aside initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((item) => <span key={item} className="px-2.5 py-1 rounded-full bg-secondary text-xs">{item}</span>)}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-semibold mb-3">Highlights</h3>
              <div className="grid gap-3">
                {project.metrics.length ? project.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-secondary/60 p-3">
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="text-sm font-medium">{m.value}</p>
                  </div>
                )) : <p className="text-sm text-muted-foreground">Add metrics from Admin to surface quant impact.</p>}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-semibold mb-3">Links</h3>
              <div className="space-y-2">
                {Object.entries(project.links).filter(([, value]) => !!value).map(([key, value]) => {
                  const Icon = linkIcons[key as keyof typeof linkIcons];
                  return (
                    <a href={value} target="_blank" rel="noreferrer" key={key} className="flex items-center gap-2 text-sm text-foreground hover:text-apple-blue">
                      <Icon className="w-4 h-4" /> {linkLabels[key as keyof typeof linkLabels]}
                    </a>
                  );
                })}
                {!Object.values(project.links).some(Boolean) && <p className="text-sm text-muted-foreground">No external links yet.</p>}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
