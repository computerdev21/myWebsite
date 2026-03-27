import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Zap, CheckCircle } from 'lucide-react';
import { getProjectById, type Project } from '../lib/data';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (slug) {
        const data = await getProjectById(slug);
        setProject(data);
      }
      setLoading(false);
    }
    loadData();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen pt-24 flex items-center justify-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/work" className="text-apple-blue hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.color} opacity-10 blur-[150px]`} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work">
            <motion.div
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-sm font-medium text-white bg-gradient-to-r ${project.color || 'from-gray-500 to-gray-700'} rounded-full`}>
                {project.category}
              </span>
              {project.status && <span className="text-muted-foreground">{project.status}</span>}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-apple-blue mb-6">{project.tagline}</p>
            <p className="text-lg text-muted-foreground max-w-3xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Image or Video */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {project.videoUrl ? (
              <div className="w-full aspect-video relative">
                <iframe
                  src={project.videoUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            ) : (
              <>
                <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats & Info */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {project.period && (
              <motion.div
                className="p-6 bg-card border border-border rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Calendar className="w-6 h-6 text-apple-blue mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                <p className="text-foreground font-semibold">{project.period}</p>
              </motion.div>
            )}

            {project.role && (
              <motion.div
                className="p-6 bg-card border border-border rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Users className="w-6 h-6 text-apple-purple mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Role</p>
                <p className="text-foreground font-semibold">{project.role}</p>
              </motion.div>
            )}

            {project.stats && Object.entries(project.stats).slice(0, 2).map(([key, value], index) => (
              <motion.div
                key={key}
                className="p-6 bg-card border border-border rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Zap className="w-6 h-6 text-apple-cyan mb-3" />
                <p className="text-sm text-muted-foreground mb-1 capitalize">{key}</p>
                <p className="text-foreground font-semibold">{value as string}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">About the Project</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {(project.longDescription || project.description).split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-full text-foreground hover:border-apple-blue/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge: any, index: number) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-card border border-border rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h3>
                    <p className="text-muted-foreground">
                      <span className="text-apple-blue">Solution: </span>
                      {challenge.solution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Live
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
            <Link to="/work">
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                More Projects
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
