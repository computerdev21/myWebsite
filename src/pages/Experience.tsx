import { Link } from 'react-router-dom';
import { usePortfolioContent } from '../lib/usePortfolioContent';

export default function ExperiencePage() {
  const { experiences } = usePortfolioContent();
  const sorted = [...experiences].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-12">
        <h1 className="text-5xl font-bold mb-4">Experience <span className="text-gradient">Timeline</span></h1>
        <p className="max-w-3xl text-muted-foreground">Professional profile pages covering enterprise software delivery, AI systems, and full stack execution.</p>
      </section>

      <div className="space-y-6">
        {sorted.map((exp) => (
          <Link key={exp.id} to={`/experience/${exp.slug}`} className="block rounded-2xl border border-border bg-card p-6 hover:border-apple-blue/30 card-hover">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h2 className="text-2xl font-semibold">{exp.role}</h2>
              <span className="text-sm text-muted-foreground">{exp.dateRange}</span>
            </div>
            <p className="text-apple-blue font-medium mb-1">{exp.companyDisplayName}</p>
            <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
            <p className="text-muted-foreground">{exp.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
