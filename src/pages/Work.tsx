import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

type PortfolioProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  category: 'AI' | 'Blockchain' | 'Analytics' | 'Full Stack' | 'Platform';
  featured: boolean;
  color: string;
  year: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

const categories = ['All', 'AI', 'Full Stack', 'Blockchain', 'Analytics', 'Platform'];

const projects: PortfolioProject[] = [
  {
    id: 'archetype',
    title: 'Archetype',
    tagline: 'Adaptive Crypto Intelligence Layer',
    description:
      'Designed a personalized crypto strategist that adapts to investor persona, risk tolerance, and strategic goals to drive guided decision flows and trend-aware portfolio planning.',
    tech: ['TypeScript', 'React', 'Portfolio Intelligence', 'BitGo-ready'],
    category: 'Blockchain',
    featured: true,
    color: 'from-orange-500 to-pink-500',
    year: '2026',
    image: '/project-archetype.jpg',
    githubUrl: 'https://github.com/computerdev21/Archetype',
  },
  {
    id: 'echoelders',
    title: 'EchoElders Companion (Everly)',
    tagline: 'Voice AI for Elder Care',
    description:
      'Developed a voice companion for elder care with VAPI-driven conversations, webhook orchestration, transcript capture, and caregiver-ready summaries for memory, mood, and medication signals.',
    tech: ['Next.js', 'React', 'VAPI', 'Supabase', 'Webhooks'],
    category: 'AI',
    featured: true,
    color: 'from-blue-500 to-cyan-500',
    year: '2025',
    image: '/project-prepwise.jpg',
  },
  {
    id: 'intrabot',
    title: 'IntraBot – AI-Powered Internship Assistant',
    tagline: 'Resume Intelligence + ATS Workflow',
    description:
      'Built an AI resume analysis workflow with PDF upload, text extraction, JD matching, ATS-style checks, scoring, and a follow-up chatbot grounded in each uploaded resume.',
    tech: ['Next.js', 'Python', 'NLP', 'PDF Parsing', 'LLM Workflow'],
    category: 'AI',
    featured: true,
    color: 'from-purple-500 to-indigo-600',
    year: '2025',
    image: '/project-resume-ai.jpg',
  },
  {
    id: 'interview-practice-bot',
    title: 'Interview Practice Bot',
    tagline: 'Multimodal Interview Coaching',
    description:
      'Engineered an AI mock interview assistant that evaluates communication patterns and posture/body-language signals to generate practical behavioral feedback and confidence coaching.',
    tech: ['Python', 'Computer Vision', 'Speech Analysis', 'Coaching Engine'],
    category: 'AI',
    featured: true,
    color: 'from-emerald-500 to-teal-600',
    year: '2025',
    image: '/project-resume-ai.jpg',
  },
  {
    id: 'realtime-speech-analysis',
    title: 'Real-Time Speech Analysis Model',
    tagline: 'Low-Latency Interview Speech Scoring',
    description:
      'Built a low-latency speech intelligence pipeline for mock interviews with filler-word detection, accent deviation analysis, and clarity/pace scoring optimized for CPU inference.',
    tech: ['PyTorch', 'Transformers', 'ONNX', 'CPU Inference', 'Audio ML'],
    category: 'AI',
    featured: true,
    color: 'from-red-500 to-orange-500',
    year: '2025',
    image: '/project-btcai.jpg',
  },
  {
    id: 'airline-analytics',
    title: 'Airline Delay & Cancellation Analytics',
    tagline: 'Risk Modeling + What-if Analysis',
    description:
      'Analyzed airline delay and cancellation patterns using dynamic scenario modeling to classify risk and surface route-level performance insights for data-driven decision support.',
    tech: ['Tableau', 'Python', 'TabPy', 'Scenario Analysis', 'Risk Classification'],
    category: 'Analytics',
    featured: true,
    color: 'from-yellow-500 to-amber-600',
    year: '2024',
    image: '/project-resum8.jpg',
  },
  {
    id: 'text-classification-benchmark',
    title: 'Text Classification Benchmark',
    tagline: '20 Newsgroups Model Comparison',
    description:
      'Benchmarked multiple feature extraction strategies and classifier families on the 20 Newsgroups dataset to compare tradeoffs in accuracy, speed, and robustness.',
    tech: ['Python', 'NLP', 'Feature Engineering', 'Model Benchmarking'],
    category: 'AI',
    featured: false,
    color: 'from-fuchsia-500 to-purple-600',
    year: '2024',
    image: '/project-btcai.jpg',
  },
  {
    id: 'canadian-credit-card-assistant',
    title: 'Canadian Credit Card Assistant',
    tagline: 'Rewards Optimization Assistant',
    description:
      'Built a React Native assistant that maps spending patterns to rewards strategy and supports AI-guided card recommendations for Canadian payment use cases.',
    tech: ['React Native', 'AI Recommendations', 'Fintech UX', 'Optimization'],
    category: 'Full Stack',
    featured: false,
    color: 'from-sky-500 to-blue-600',
    year: '2025',
    image: '/project-prepwise.jpg',
  },
  {
    id: 'rumbledefi',
    title: 'RumbleDeFi',
    tagline: 'Web3 Wallet Experience',
    description:
      'Developed a wallet-connected Web3 interface with MetaMask integration and streamlined transaction UX for on-chain interactions.',
    tech: ['React', 'Web3 UX', 'MetaMask', 'Wallet Connectivity'],
    category: 'Blockchain',
    featured: false,
    color: 'from-pink-500 to-rose-600',
    year: '2024',
    image: '/project-uniswap.jpg',
  },
  {
    id: 'exchange-trading-data-platforms',
    title: 'Exchange / Trading Data Platform Concepts',
    tagline: 'Spot + Futures Data Workflows',
    description:
      'Designed exchange API workflows across Coinbase/CCXT-style integrations for dashboards that track spot/futures signals and trading telemetry.',
    tech: ['CCXT', 'Exchange APIs', 'Coinbase', 'Trading Dashboards'],
    category: 'Platform',
    featured: false,
    color: 'from-indigo-500 to-blue-700',
    year: '2025',
    image: '/project-resum8.jpg',
  },
  {
    id: 'edbucks',
    title: 'EdBucks',
    tagline: 'Product + Infrastructure Delivery',
    description:
      'Contributed to product and infrastructure components with AWS-backed environments and Jenkins-driven delivery workflows.',
    tech: ['AWS', 'Jenkins', 'Product Infrastructure', 'CI/CD'],
    category: 'Platform',
    featured: false,
    color: 'from-green-500 to-emerald-600',
    year: '2023',
    image: '/project-frostiyeti.jpg',
  },
  {
    id: 'merc-rides',
    title: 'Merc Rides',
    tagline: 'Mobility Product Build',
    description:
      'Built core product components for a rides-focused platform with attention to reliability, usability, and iteration speed.',
    tech: ['Full Stack', 'Product Development', 'Web Platform'],
    category: 'Full Stack',
    featured: false,
    color: 'from-slate-500 to-gray-700',
    year: '2023',
    image: '/project-resum8.jpg',
  },
  {
    id: 'blockchain-engineering-suite',
    title: 'Blockchain / DEX / Smart Contract Engineering',
    tagline: 'Protocol + Contract Experimentation',
    description:
      'Worked across BSC DEX flows, smart contract engineering, account abstraction ideas, ABI interactions, and swap-bot experimentation in Uniswap-style environments.',
    tech: ['Smart Contracts', 'BSC DEX', 'ABI', 'Account Abstraction', 'Swap Bots'],
    category: 'Blockchain',
    featured: false,
    color: 'from-violet-500 to-purple-700',
    year: '2024',
    image: '/project-uniswap.jpg',
  },
  {
    id: 'aideation-yt',
    title: 'Aideation-YT',
    tagline: 'AI Content Ideation Workflow',
    description:
      'Created an AI-assisted ideation workflow for YouTube-style content planning and structured concept generation.',
    tech: ['AI Workflow', 'Content Systems', 'Prompting'],
    category: 'AI',
    featured: false,
    color: 'from-red-500 to-pink-600',
    year: '2024',
    image: '/project-prepwise.jpg',
  },
  {
    id: 'urings',
    title: 'Urings',
    tagline: 'NFC Identity Ring Concept',
    description:
      'Explored an NFC-enabled ring concept that links physical interactions to digital portfolio and identity pages.',
    tech: ['NFC', 'Identity UX', 'Hardware Concept'],
    category: 'Full Stack',
    featured: false,
    color: 'from-cyan-500 to-teal-600',
    year: '2024',
    image: '/project-archetype.jpg',
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

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
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-apple-blue/30 transition-all hover:shadow-soft-lg"
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

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-foreground hover:text-apple-blue transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-foreground hover:text-apple-blue transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
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
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-apple-blue/30 transition-all hover:-translate-y-1 hover:shadow-soft"
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
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[11px] rounded-full bg-secondary text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
