import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Zap, CheckCircle } from 'lucide-react';

const projectData: Record<string, any> = {
  everly: {
    title: 'Everly AI',
    tagline: 'AI-Powered Creative Platform',
    description: 'Building AI-powered solutions at Everly, contributing to innovative products that leverage machine learning and modern web technologies.',
    longDescription: `At Everly AI, I'm part of a talented team building the future of creative AI tools. My role involves developing full-stack features, integrating AI models, and ensuring scalable architecture.

The platform helps creators leverage AI for content generation, image editing, and workflow automation. We're pushing the boundaries of what's possible with generative AI while maintaining an intuitive user experience.`,
    image: '/project-prepwise.jpg',
    tech: ['React', 'TypeScript', 'Python', 'OpenAI API', 'Firebase', 'Tailwind CSS', 'Node.js'],
    category: 'AI',
    role: 'Full Stack Developer',
    period: '2025 - Present',
    status: 'Active Development',
    stats: {
      commits: '18+',
      features: '5+',
      team: '8 members',
    },
    highlights: [
      'Developed AI-powered content generation features',
      'Built real-time collaboration system',
      'Implemented scalable image processing pipeline',
      'Created responsive UI with smooth animations',
    ],
    challenges: [
      {
        title: 'Real-time AI Processing',
        solution: 'Implemented WebSocket connections for streaming AI responses, reducing perceived latency by 60%',
      },
      {
        title: 'Scalable Image Generation',
        solution: 'Designed queue-based processing system with progress tracking and retry mechanisms',
      },
    ],
    color: 'from-blue-500 to-purple-500',
    links: {
      live: null,
      github: null,
    },
  },
  archetype: {
    title: 'Archetype',
    tagline: 'Modern Web App Template',
    description: 'A cutting-edge web application template with pre-configured components, authentication, database setup, and best practices built-in.',
    longDescription: `Archetype is my answer to the repetitive setup process of modern web applications. It's a comprehensive starter template that includes everything you need to build production-ready apps.

The template is designed with developer experience in mind, featuring hot reload, TypeScript support, pre-configured UI components, and a scalable architecture pattern.`,
    image: '/project-archetype.jpg',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'React Query'],
    category: 'Web',
    role: 'Creator & Maintainer',
    period: '2024 - Present',
    status: 'Open Source',
    stats: {
      stars: '12',
      forks: '3',
      downloads: '500+',
    },
    highlights: [
      'Pre-configured authentication system',
      '40+ reusable UI components',
      'Dark mode support out of the box',
      'Type-safe API client with React Query',
      'Scalable state management with Zustand',
    ],
    challenges: [
      {
        title: 'Component Flexibility',
        solution: 'Designed composable component API using compound component pattern',
      },
      {
        title: 'Build Performance',
        solution: 'Optimized Vite config for fast HMR and production builds',
      },
    ],
    color: 'from-orange-500 to-pink-500',
    links: {
      live: 'https://archetype-demo.vercel.app',
      github: 'https://github.com/computerdev21/Archetype',
    },
  },
  prepwise: {
    title: 'PrepWiseAI',
    tagline: 'AI Career Coach',
    description: 'AI-powered career preparation platform with personalized coaching, interview practice, and skill assessment.',
    longDescription: `PrepWiseAI helps job seekers prepare for technical interviews with AI-generated questions, personalized feedback, and skill gap analysis.

The platform uses OpenAI's GPT models to generate relevant interview questions based on the user's target role and experience level. It provides detailed feedback on answers and tracks progress over time.`,
    image: '/project-prepwise.jpg',
    tech: ['TypeScript', 'Python', 'Next.js', 'Firebase', 'OpenAI API', 'Tailwind CSS'],
    category: 'AI',
    role: 'Co-Founder & Lead Developer',
    period: '2024',
    status: 'Live',
    stats: {
      users: '500+',
      questions: '10K+',
      rating: '4.8/5',
    },
    highlights: [
      'AI-generated interview questions tailored to role',
      'Real-time answer analysis and feedback',
      'Progress tracking with skill gap identification',
      'Mock interview simulation mode',
      'Resume optimization suggestions',
    ],
    challenges: [
      {
        title: 'AI Response Quality',
        solution: 'Implemented prompt engineering with few-shot examples and context management',
      },
      {
        title: 'User Progress Tracking',
        solution: 'Built analytics dashboard with Firebase for real-time progress visualization',
      },
    ],
    color: 'from-red-500 to-orange-500',
    links: {
      live: '#',
      github: 'https://github.com/computerdev21/PrepWiseAI',
    },
  },
  frostiyeti: {
    title: 'FrostiYeti V2',
    tagline: 'Blockchain Crowdfunding DApp',
    description: 'Decentralized crowdfunding platform on Avalanche with NFT rewards, CI/CD pipeline, and cloud deployment.',
    longDescription: `FrostiYeti is a blockchain-based crowdfunding platform built on the Avalanche network. It allows creators to raise funds for their projects while offering NFT rewards to backers.

The platform features a complete CI/CD pipeline with Jenkins, Docker containerization, and Kubernetes orchestration for scalable deployment.`,
    image: '/project-frostiyeti.jpg',
    tech: ['Solidity', 'Avalanche', 'React', 'Docker', 'Jenkins', 'Kubernetes', 'Web3.js'],
    category: 'Blockchain',
    role: 'Blockchain Developer',
    period: '2023',
    status: 'Live',
    stats: {
      raised: '50K+ AVAX',
      projects: '15+',
      backers: '200+',
    },
    highlights: [
      'Smart contract with escrow and milestone release',
      'NFT reward system for backers',
      'Automated CI/CD with GitHub Actions',
      'Docker containerization for all services',
      'Kubernetes deployment on AWS',
    ],
    challenges: [
      {
        title: 'Smart Contract Security',
        solution: 'Implemented comprehensive test suite and used OpenZeppelin libraries',
      },
      {
        title: 'Gas Optimization',
        solution: 'Optimized contract storage and batch operations to reduce transaction costs',
      },
    ],
    color: 'from-red-600 to-orange-500',
    links: {
      live: '#',
      github: 'https://github.com/BhartiyaYeti/FrostiYeti-V2',
    },
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

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
              <span className={`px-3 py-1 text-sm font-medium text-white bg-gradient-to-r ${project.color} rounded-full`}>
                {project.category}
              </span>
              <span className="text-muted-foreground">{project.status}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-apple-blue mb-6">{project.tagline}</p>
            <p className="text-lg text-muted-foreground max-w-3xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Stats & Info */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
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

            {Object.entries(project.stats).slice(0, 2).map(([key, value], index) => (
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
              {project.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
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

      {/* Highlights */}
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

      {/* Challenges */}
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

      {/* Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {project.links.live && (
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
            {project.links.github && (
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
