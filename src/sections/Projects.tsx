import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const categories = ['All', 'AI', 'Blockchain', 'Web', 'Full Stack'];

const projects = [
  {
    id: 1,
    title: 'PrepWiseAI',
    description:
      'AI-powered career preparation platform with personalized coaching, interview practice, and skill assessment. Helps users prepare for technical interviews with AI-generated questions and feedback.',
    image: '/project-prepwise.jpg',
    tech: ['TypeScript', 'Python', 'Next.js', 'Firebase', 'OpenAI'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: 'https://github.com/computerdev21/PrepWiseAI',
    featured: true,
  },
  {
    id: 2,
    title: 'Resume AI Chatbot',
    description:
      'Intelligent resume assistant that helps optimize CVs, suggest improvements, and prepare for interviews using AI. Analyzes resume content and provides actionable feedback.',
    image: '/project-resume-ai.jpg',
    tech: ['TypeScript', 'Node.js', 'OpenAI API', 'React'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: 'https://github.com/computerdev21/resume-ai-chatbot',
    featured: true,
  },
  {
    id: 3,
    title: 'FrostiYeti V2',
    description:
      'Blockchain-based crowdfunding DApp on Avalanche with CI/CD pipeline, Docker, Kubernetes, and cloud deployment. Features NFT rewards and transparent fund management.',
    image: '/project-frostiyeti.jpg',
    tech: ['Solidity', 'Avalanche', 'React', 'Docker', 'Jenkins'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: 'https://github.com/BhartiyaYeti/FrostiYeti-V2',
    featured: true,
  },
  {
    id: 4,
    title: 'UniSwap Swapper',
    description:
      'DeFi trading interface for Uniswap protocol with real-time price tracking and automated swapping. Features slippage protection and gas optimization.',
    image: '/project-uniswap.jpg',
    tech: ['JavaScript', 'Ethereum', 'Web3.js', 'Uniswap SDK'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: 'https://github.com/computerdev21/UniSwapSwapper',
    featured: false,
  },
  {
    id: 5,
    title: 'BTC AI Predictor',
    description:
      'Bitcoin price prediction and analysis tool using machine learning algorithms and historical data. Provides buy/sell signals based on technical indicators.',
    image: '/project-btcai.jpg',
    tech: ['TypeScript', 'Python', 'TensorFlow', 'Bitcoin API'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: 'https://github.com/computerdev21/btcaiTest',
    featured: false,
  },
  {
    id: 6,
    title: 'Archetype',
    description:
      'Modern web application template with cutting-edge architecture and best practices. Includes pre-configured components, authentication, and database setup.',
    image: '/project-archetype.jpg',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: 'https://github.com/computerdev21/Archetype',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-apple-purple/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-apple-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 bg-apple-purple/10 text-apple-purple rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing AI, Blockchain, and Full Stack
            development
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-foreground text-background shadow-lg'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground border border-border'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                className="group relative bg-card border border-border rounded-3xl overflow-hidden card-hover"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-apple-blue to-apple-purple text-white text-xs font-semibold rounded-full shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-black rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-apple-blue transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-apple-blue transition-colors"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/computerdev21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-apple-blue hover:text-apple-purple transition-colors group"
          >
            <span>View all projects on GitHub</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
