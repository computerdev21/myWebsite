import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'AI', 'Blockchain', 'Web', 'Full Stack', 'Current Work'];

const projects = [
  {
    id: 'everly',
    title: 'Everly AI',
    tagline: 'AI-Powered Creative Platform',
    description: 'Building AI-powered solutions at Everly. Contributing to innovative products that leverage machine learning and modern web technologies.',
    image: '/project-prepwise.jpg',
    tech: ['React', 'TypeScript', 'Python', 'OpenAI', 'Firebase'],
    category: 'Current Work',
    stats: { commits: '18+', status: 'Active', role: 'Full Stack Dev' },
    featured: true,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'archetype',
    title: 'Archetype',
    tagline: 'Modern Web App Template',
    description: 'A cutting-edge web application template with pre-configured components, authentication, database setup, and best practices built-in.',
    image: '/project-archetype.jpg',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind', 'shadcn/ui'],
    category: 'Web',
    stats: { stars: '12', forks: '3', status: 'Open Source' },
    featured: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'prepwise',
    title: 'PrepWiseAI',
    tagline: 'AI Career Coach',
    description: 'AI-powered career preparation platform with personalized coaching, interview practice, and skill assessment.',
    image: '/project-prepwise.jpg',
    tech: ['TypeScript', 'Python', 'Next.js', 'Firebase', 'OpenAI'],
    category: 'AI',
    stats: { users: '500+', rating: '4.8', status: 'Live' },
    featured: true,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'resume-ai',
    title: 'Resume AI Chatbot',
    tagline: 'Intelligent Resume Assistant',
    description: 'AI assistant that helps optimize CVs, suggest improvements, and prepare for interviews using natural language processing.',
    image: '/project-resume-ai.jpg',
    tech: ['TypeScript', 'Node.js', 'OpenAI API', 'React'],
    category: 'AI',
    stats: { resumes: '1K+', rating: '4.9', status: 'Live' },
    featured: false,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'frostiyeti',
    title: 'FrostiYeti V2',
    tagline: 'Blockchain Crowdfunding DApp',
    description: 'Decentralized crowdfunding platform on Avalanche with NFT rewards, CI/CD pipeline, and cloud deployment.',
    image: '/project-frostiyeti.jpg',
    tech: ['Solidity', 'Avalanche', 'React', 'Docker', 'Jenkins'],
    category: 'Blockchain',
    stats: { raised: '50K+ AVAX', projects: '15+', status: 'Live' },
    featured: true,
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'uniswap',
    title: 'UniSwap Swapper',
    tagline: 'DeFi Trading Interface',
    description: 'DeFi trading interface for Uniswap protocol with real-time price tracking and automated swapping.',
    image: '/project-uniswap.jpg',
    tech: ['JavaScript', 'Ethereum', 'Web3.js', 'Uniswap SDK'],
    category: 'Blockchain',
    stats: { volume: '$100K+', trades: '500+', status: 'Live' },
    featured: false,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'btcai',
    title: 'BTC AI Predictor',
    tagline: 'ML Price Prediction',
    description: 'Bitcoin price prediction tool using machine learning algorithms and historical data analysis.',
    image: '/project-btcai.jpg',
    tech: ['TypeScript', 'Python', 'TensorFlow', 'Bitcoin API'],
    category: 'AI',
    stats: { accuracy: '78%', predictions: '10K+', status: 'Beta' },
    featured: false,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'resum8',
    title: 'Resum8 Backend',
    tagline: 'Scalable Resume API',
    description: 'Backend system for resume management with RESTful APIs, authentication, and document processing.',
    image: '/project-resum8.jpg',
    tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'Redis'],
    category: 'Full Stack',
    stats: { endpoints: '25+', uptime: '99.9%', status: 'Live' },
    featured: false,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'pccagent',
    title: 'PCC Agent',
    tagline: 'AI Task Automation',
    description: 'Python-based AI agent for automated task processing and intelligent decision making.',
    image: '/project-pccagent.jpg',
    tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
    category: 'AI',
    stats: { tasks: '5K+', efficiency: '+40%', status: 'Live' },
    featured: false,
    color: 'from-cyan-500 to-teal-500',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              My <span className="text-gradient-accent">Work</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A collection of projects spanning AI, Blockchain, and Full Stack development.
              Each one represents a unique challenge and innovative solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-apple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-semibold text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="group relative bg-card border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${project.color} rounded-full`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-apple-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-apple-blue mb-3">{project.tagline}</p>
                      <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-sm text-gray-500">
                          {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                            <span key={key} className="capitalize">{value} {key}</span>
                          ))}
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-apple-blue group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="group bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                        <span className="text-xs text-gray-500">{project.category}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-apple-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">{project.tagline}</p>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-xs text-gray-500 bg-white/5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
