import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { getProjects, type Project } from '../lib/data';

const categories = ['All', 'AI', 'Full Stack', 'Blockchain', 'Analytics', 'Platform'];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadData() {
      const data = await getProjects();
      setProjects(data);
    }
    loadData();
  }, []);

  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  const filteredAdditionalProjects =
    activeCategory === 'All'
      ? additionalProjects
      : additionalProjects.filter((project) => project.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Project <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Selected projects across AI systems, applied ML, analytics, enterprise software, and blockchain product engineering.
              Featured work highlights highest-signal builds with product and technical depth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Priority work arranged with Archetype first, followed by EchoElders and IntraBot.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-apple-blue/30 transition-all hover:shadow-soft-lg h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2 items-center">
                    <span className={`px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${project.color} rounded-full`}>
                      {project.category}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-black/50 text-white rounded-full backdrop-blur-sm">
                    Featured
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-apple-blue transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-apple-blue transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-apple-blue text-sm mb-3">{project.tagline}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs text-muted-foreground bg-secondary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-4">
                    {project.liveUrl && (
                      <span
                        onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}
                        className="inline-flex items-center gap-2 text-xs text-foreground hover:text-apple-blue transition-colors cursor-pointer z-10"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live
                      </span>
                    )}
                    {project.githubUrl && (
                      <span
                        onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, '_blank'); }}
                        className="inline-flex items-center gap-2 text-xs text-foreground hover:text-apple-blue transition-colors cursor-pointer z-10"
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </span>
                    )}
                  </div>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">Additional Projects</h2>
            <p className="text-muted-foreground max-w-3xl">
              Broader implementation work across fintech, mobile, exchange data, web3 infrastructure, and product experiments.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAdditionalProjects.map((project, index) => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-apple-blue/30 transition-all hover:-translate-y-1 hover:shadow-soft h-full flex flex-col"
                >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className={`w-2.5 h-2.5 block rounded-full bg-gradient-to-r ${project.color}`} />
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                    <span className="text-xs text-muted-foreground">{project.category}</span>
                  </div>

                  <h3 className="font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-apple-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.tech?.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[11px] rounded-full bg-secondary text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
