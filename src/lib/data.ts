// Shared types and mock data for the portfolio.
export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  image: string;
  videoUrl?: string;
  tech: string[];
  category: string;
  featured?: boolean;
  color?: string;
  year?: string;
  githubUrl?: string;
  liveUrl?: string;
  stats?: any;
  role?: string;
  period?: string;
  status?: string;
  highlights?: string[];
  challenges?: any[];
  links?: any;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  current?: boolean;
};

// INITIAL MOCK DATA
// We use localStorage as a simple mock database for the MVP so the Admin panel actually works
// without needing a real Supabase backend setup immediately.

let mockProjects: Project[] = [
  {
    id: 'archetype',
    title: 'Archetype',
    tagline: 'Adaptive Crypto Intelligence Layer',
    description: 'Designed a personalized crypto strategist that adapts to investor persona, risk tolerance, and strategic goals to drive guided decision flows and trend-aware portfolio planning.',
    longDescription: `Archetype is a customized crypto strategist that adapts to the investor’s persona, offering tailored strategies, trend-aware insights, and guided decision flows for a more personalized investment experience.\n\nIt features an Adaptive Intelligence Layer, Context-Aware interactions, Multi-Model Routing via Next.js and external APIs, and seamless execution with BitGo integration. The system analyzes user risk tolerance and portfolio size to generate dynamic investment strategies.`,
    image: '/project-archetype.jpg',
    videoUrl: 'https://drive.google.com/file/d/1mfYnCg9iwx_EAXhgyEH1nPmpxNsIiQgN/preview',
    tech: ['Next.js', 'React', 'Vercel AI SDK', 'BitGo', 'TypeScript', 'Tailwind CSS'],
    category: 'Blockchain',
    featured: true,
    color: 'from-orange-500 to-pink-500',
    year: '2026',
    githubUrl: 'https://github.com/computerdev21/Archetype',
    role: 'Creator & Maintainer',
    period: '2024 - Present',
    status: 'Open Source',
    stats: { stars: '12', forks: '3', downloads: '500+' },
    highlights: [
      'Pre-configured authentication system',
      '40+ reusable UI components',
      'Dark mode support out of the box',
      'Type-safe API client with React Query',
      'Scalable state management with Zustand'
    ],
    challenges: [
      { title: 'Component Flexibility', solution: 'Designed composable component API using compound component pattern' },
      { title: 'Build Performance', solution: 'Optimized Vite config for fast HMR and production builds' }
    ],
    links: {
      live: 'https://archetype-demo.vercel.app',
      github: 'https://github.com/computerdev21/Archetype'
    }
  },
  {
    id: 'echoelders',
    title: 'EchoElders Companion (Everly)',
    tagline: 'Voice AI for Elder Care',
    description: 'Developed a voice companion for elder care with VAPI-driven conversations, webhook orchestration, transcript capture, and caregiver-ready summaries.',
    image: '/project-prepwise.jpg',
    tech: ['Next.js', 'React', 'VAPI', 'Supabase', 'Webhooks'],
    category: 'AI',
    featured: true,
    color: 'from-blue-500 to-cyan-500',
    year: '2025'
  },
  {
    id: 'intrabot',
    title: 'IntraBot – AI-Powered Internship Assistant',
    tagline: 'Resume Intelligence + ATS Workflow',
    description: 'Built an AI resume analysis workflow with PDF upload, text extraction, JD matching, ATS-style checks, scoring, and a follow-up chatbot.',
    image: '/project-resume-ai.jpg',
    tech: ['Next.js', 'Python', 'NLP', 'PDF Parsing', 'LLM Workflow'],
    category: 'AI',
    featured: true,
    color: 'from-purple-500 to-indigo-600',
    year: '2025'
  }
,
  {
    id: 'interview-practice-bot',
    title: 'Interview Practice Bot',
    tagline: 'Multimodal Interview Coaching',
    description: 'Engineered an AI mock interview assistant that evaluates communication patterns and posture/body-language signals to generate practical behavioral feedback and confidence coaching.',
    tech: ['Python', 'Computer Vision', 'Speech Analysis', 'Coaching Engine'],
    category: 'AI',
    featured: true,
    color: 'from-emerald-500 to-teal-600',
    year: '2025',
    image: '/project-resume-ai.jpg'
  },
  {
    id: 'realtime-speech-analysis',
    title: 'Real-Time Speech Analysis Model',
    tagline: 'Low-Latency Interview Speech Scoring',
    description: 'Built a low-latency speech intelligence pipeline for mock interviews with filler-word detection, accent deviation analysis, and clarity/pace scoring optimized for CPU inference.',
    tech: ['PyTorch', 'Transformers', 'ONNX', 'CPU Inference', 'Audio ML'],
    category: 'AI',
    featured: true,
    color: 'from-red-500 to-orange-500',
    year: '2025',
    image: '/project-btcai.jpg'
  },
  {
    id: 'airline-analytics',
    title: 'Airline Delay & Cancellation Analytics',
    tagline: 'Risk Modeling + What-if Analysis',
    description: 'Analyzed airline delay and cancellation patterns using dynamic scenario modeling to classify risk and surface route-level performance insights for data-driven decision support.',
    tech: ['Tableau', 'Python', 'TabPy', 'Scenario Analysis', 'Risk Classification'],
    category: 'Analytics',
    featured: true,
    color: 'from-yellow-500 to-amber-600',
    year: '2024',
    image: '/project-resum8.jpg'
  },
  {
    id: 'text-classification-benchmark',
    title: 'Text Classification Benchmark',
    tagline: '20 Newsgroups Model Comparison',
    description: 'Benchmarked multiple feature extraction strategies and classifier families on the 20 Newsgroups dataset to compare tradeoffs in accuracy, speed, and robustness.',
    tech: ['Python', 'NLP', 'Feature Engineering', 'Model Benchmarking'],
    category: 'AI',
    featured: false,
    color: 'from-fuchsia-500 to-purple-600',
    year: '2024',
    image: '/project-btcai.jpg'
  },
  {
    id: 'canadian-credit-card-assistant',
    title: 'Canadian Credit Card Assistant',
    tagline: 'Rewards Optimization Assistant',
    description: 'Built a React Native assistant that maps spending patterns to rewards strategy and supports AI-guided card recommendations for Canadian payment use cases.',
    tech: ['React Native', 'AI Recommendations', 'Fintech UX', 'Optimization'],
    category: 'Full Stack',
    featured: false,
    color: 'from-sky-500 to-blue-600',
    year: '2025',
    image: '/project-prepwise.jpg'
  },
  {
    id: 'rumbledefi',
    title: 'RumbleDeFi',
    tagline: 'Web3 Wallet Experience',
    description: 'Developed a wallet-connected Web3 interface with MetaMask integration and streamlined transaction UX for on-chain interactions.',
    tech: ['React', 'Web3 UX', 'MetaMask', 'Wallet Connectivity'],
    category: 'Blockchain',
    featured: false,
    color: 'from-pink-500 to-rose-600',
    year: '2024',
    image: '/project-uniswap.jpg'
  },
  {
    id: 'exchange-trading-data-platforms',
    title: 'Exchange / Trading Data Platform Concepts',
    tagline: 'Spot + Futures Data Workflows',
    description: 'Designed exchange API workflows across Coinbase/CCXT-style integrations for dashboards that track spot/futures signals and trading telemetry.',
    tech: ['CCXT', 'Exchange APIs', 'Coinbase', 'Trading Dashboards'],
    category: 'Platform',
    featured: false,
    color: 'from-indigo-500 to-blue-700',
    year: '2025',
    image: '/project-resum8.jpg'
  },
  {
    id: 'edbucks',
    title: 'EdBucks',
    tagline: 'Product + Infrastructure Delivery',
    description: 'Contributed to product and infrastructure components with AWS-backed environments and Jenkins-driven delivery workflows.',
    tech: ['AWS', 'Jenkins', 'Product Infrastructure', 'CI/CD'],
    category: 'Platform',
    featured: false,
    color: 'from-green-500 to-emerald-600',
    year: '2023',
    image: '/project-frostiyeti.jpg'
  },
  {
    id: 'merc-rides',
    title: 'Merc Rides',
    tagline: 'Mobility Product Build',
    description: 'Built core product components for a rides-focused platform with attention to reliability, usability, and iteration speed.',
    tech: ['Full Stack', 'Product Development', 'Web Platform'],
    category: 'Full Stack',
    featured: false,
    color: 'from-slate-500 to-gray-700',
    year: '2023',
    image: '/project-resum8.jpg'
  },
  {
    id: 'uniswap',
    title: 'Uniswap V3 Swap Bot',
    tagline: 'On-Chain Execution Infrastructure (Narfex)',
    description: 'Built Uniswap V3 swap bot executing trades across EVM networks with <2s trigger latency. Implemented routing, approvals, and contract calls, reducing failed executions by ~40%.',
    tech: ['EVM', 'Node.js', 'DeFi Tools', 'Smart Contracts'],
    category: 'Blockchain',
    featured: false,
    color: 'from-violet-500 to-purple-700',
    year: '2025',
    image: '/project-uniswap.jpg',
    githubUrl: 'https://github.com/computerdev21/UniSwapSwapper'
  },
  {
    id: 'aideation-yt',
    title: 'Aideation-YT',
    tagline: 'AI Content Ideation Workflow',
    description: 'Created an AI-assisted ideation workflow for YouTube-style content planning and structured concept generation.',
    tech: ['AI Workflow', 'Content Systems', 'Prompting'],
    category: 'AI',
    featured: false,
    color: 'from-red-500 to-pink-600',
    year: '2024',
    image: '/project-prepwise.jpg'
  },
  {
    id: 'urings',
    title: 'Urings',
    tagline: 'NFC Identity Ring Concept',
    description: 'Explored an NFC-enabled ring concept that links physical interactions to digital portfolio and identity pages.',
    tech: ['NFC', 'Identity UX', 'Hardware Concept'],
    category: 'Full Stack',
    featured: false,
    color: 'from-cyan-500 to-teal-600',
    year: '2024',
    image: '/project-archetype.jpg'
  }
];

let mockExperiences: Experience[] = [
  {
    id: 'powercor',
    role: 'Software Programmer – AI & Automation',
    company: 'PowerCor Manufacturing – Linamar Corporation',
    location: 'Guelph, ON',
    period: 'September 2025 – Current',
    description: 'Architected real-time inference APIs processing 10K+ daily manufacturing events with sub-100ms P99 latency.',
    longDescription: `At PowerCor Manufacturing, I led the development of robust backend systems targeting manufacturing efficiency. Architected real-time inference APIs processing 10K+ daily manufacturing events with sub-100ms P99 latency. Deployed zero-downtime ML workflows, reducing release failures by 40% and cutting rollback time to 90 seconds. Optimized compute batching strategies yielding 27% throughput gain while reducing infrastructure overhead by $15K monthly through efficient resource allocation.`,
    highlights: [
      'Architected real-time inference APIs processing 10K+ daily manufacturing events with sub-100ms P99 latency.',
      'Deployed zero-downtime ML workflows, reducing release failures by 40% and cutting rollback time to 90 seconds.',
      'Optimized compute batching strategies yielding 27% throughput gain while reducing infrastructure overhead by $15K monthly through efficient resource allocation'
    ],
    current: true
  },
  {
    id: 'nevo',
    role: 'ML Engineer (MLOps & GenAI Systems)',
    company: 'Nevo Network - Gha Fin Tech',
    location: 'Toronto, ON',
    period: 'June 2024 – December 2024',
    description: 'Engineered Kubernetes-native LLM platform auto-scaling 50+ GPUs across 3 AZs to serve 500K+ weekly inferences.',
    highlights: [
      'Engineered Kubernetes-native LLM platform auto-scaling 50+ GPUs across 3 AZs to serve 500K+ weekly inferences',
      'Constructed GitOps CI/CD automation enabling 20+ daily releases (previously 2 weekly) with automated canary rollbacks',
      'Deployed memory-optimized inference pipelines improving GPU utilization by 60% and reducing latency by 45%'
    ],
    current: false
  },
  {
    id: 'feooh',
    role: 'Full Stack Developer (Data & Analytics)',
    company: 'Feooh',
    location: 'Mississauga, ON',
    period: 'August 2023 – April 2024',
    description: 'Developed financial reporting platform tracking $2M+ monthly advertising spend with real-time general ledger-style transaction reconciliation and automated anomaly detection.',
    highlights: [
      'Developed financial reporting platform tracking $2M+ monthly advertising spend with real-time general ledger-style transaction reconciliation and automated anomaly detection',
      'Developed analytics platform for 20+ daily ad templates, cutting campaign setup time by 65% for 15+ internal users.',
      'Built regression-based pricing models improving campaign ROAS by 18% across 50+ active client accounts'
    ],
    current: false
  }
];

// MOCK DATA ACCESS FUNCTIONS
function initStorage() {
  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('portfolio_projects')) {
      localStorage.setItem('portfolio_projects', JSON.stringify(mockProjects));
    }
    if (!localStorage.getItem('portfolio_experiences')) {
      localStorage.setItem('portfolio_experiences', JSON.stringify(mockExperiences));
    }
  }
}

export async function getProjects(): Promise<Project[]> {
  initStorage();
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
  }
  return mockProjects;
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find(p => p.id === id) || null;
}

export async function getExperiences(): Promise<Experience[]> {
  initStorage();
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('portfolio_experiences') || '[]');
  }
  return mockExperiences;
}

export async function getExperienceById(id: string): Promise<Experience | null> {
  const experiences = await getExperiences();
  return experiences.find(e => e.id === id) || null;
}

// ADMIN FUNCTIONS
export async function addProject(project: Project) {
  const projects = await getProjects();
  projects.push(project);
  if (typeof window !== 'undefined') localStorage.setItem('portfolio_projects', JSON.stringify(projects));
}

export async function updateProject(id: string, updates: Partial<Project>) {
  const projects = await getProjects();
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...updates };
    if (typeof window !== 'undefined') localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }
}

export async function deleteProject(id: string) {
  let projects = await getProjects();
  projects = projects.filter(p => p.id !== id);
  if (typeof window !== 'undefined') localStorage.setItem('portfolio_projects', JSON.stringify(projects));
}

export async function addExperience(exp: Experience) {
  const experiences = await getExperiences();
  experiences.push(exp);
  if (typeof window !== 'undefined') localStorage.setItem('portfolio_experiences', JSON.stringify(experiences));
}

export async function updateExperience(id: string, updates: Partial<Experience>) {
  const experiences = await getExperiences();
  const index = experiences.findIndex(e => e.id === id);
  if (index !== -1) {
    experiences[index] = { ...experiences[index], ...updates };
    if (typeof window !== 'undefined') localStorage.setItem('portfolio_experiences', JSON.stringify(experiences));
  }
}

export async function deleteExperience(id: string) {
  let experiences = await getExperiences();
  experiences = experiences.filter(e => e.id !== id);
  if (typeof window !== 'undefined') localStorage.setItem('portfolio_experiences', JSON.stringify(experiences));
}
