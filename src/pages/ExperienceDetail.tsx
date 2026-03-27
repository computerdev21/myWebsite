import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { usePortfolioContent } from '../lib/usePortfolioContent';

export default function ExperienceDetailPage() {
  const { slug } = useParams();
  const { experiences } = usePortfolioContent();
  const item = experiences.find((exp) => exp.slug === slug);

  if (!item) {
    return <div className="pt-32 text-center">Experience not found. <Link className="text-apple-blue" to="/experience">Back to experience</Link></div>;
  }

  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/experience" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="w-4 h-4" /> Back to Experience</Link>
      <img src={item.coverImage} alt={item.role} className="w-full h-[320px] object-cover rounded-3xl border border-border mb-8" />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <p className="text-sm text-apple-blue mb-2">{item.companyDisplayName}</p>
            <h1 className="text-4xl font-bold mb-2">{item.role}</h1>
            <p className="text-muted-foreground">{item.dateRange} · {item.location}</p>
          </div>

          <section className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">Professional Overview</h2>
            <p className="text-muted-foreground leading-7">{item.fullDescription}</p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">Responsibilities & Achievements</h2>
            <ul className="space-y-2">
              {item.bullets.map((b) => <li key={b} className="text-muted-foreground">• {b}</li>)}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="bg-card border border-border rounded-2xl p-5">
            <h3 className="font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => <span key={tech} className="px-2.5 py-1 rounded-full bg-secondary text-xs">{tech}</span>)}
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-5">
            <h3 className="font-semibold mb-3">Impact Snapshot</h3>
            {item.metrics.length ? item.metrics.map((metric) => (
              <div key={metric.label} className="bg-secondary/60 rounded-xl p-3 mb-2">
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-sm font-medium">{metric.value}</p>
              </div>
            )) : <p className="text-sm text-muted-foreground">Metrics can be added from Admin.</p>}
          </section>
        </aside>
      </div>
    </div>
  );
}
