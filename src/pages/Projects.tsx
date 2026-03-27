import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePortfolioContent } from '../lib/usePortfolioContent';

export default function ProjectsPage() {
  const { projects } = usePortfolioContent();
  const sorted = [...projects].sort((a, b) => a.sortOrder - b.sortOrder);
  const featured = sorted.filter((p) => p.featured);
  const additional = sorted.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold mb-5">Projects <span className="text-gradient">Case Studies</span></h1>
        <p className="text-muted-foreground max-w-3xl">
          Product-minded builds across AI systems, enterprise software, analytics, and blockchain engineering.
          Featured projects highlight highest-signal execution and architecture depth.
        </p>
      </section>

      <section className="bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, idx) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.07 }}>
                <Link to={`/projects/${project.slug}`} className="group block rounded-3xl overflow-hidden border border-border bg-card hover:border-apple-blue/40 card-hover h-full">
                  <img src={project.coverImage} alt={project.name} className="h-52 w-full object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-apple-blue transition-colors">{project.name}</h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-apple-blue" />
                    </div>
                    <p className="text-sm text-apple-blue mb-2">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((item) => (
                        <span className="px-2.5 py-1 rounded-full bg-secondary text-xs text-muted-foreground" key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additional.map((project) => (
            <Link key={project.id} to={`/projects/${project.slug}`} className="block p-5 rounded-2xl border border-border bg-card hover:border-apple-purple/40 card-hover">
              <p className="text-xs text-muted-foreground mb-1">{project.category} · {project.timeframe}</p>
              <h3 className="font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{project.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
