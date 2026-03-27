export type ProjectMetric = { label: string; value: string };
export type ExternalLinks = {
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
  videoUrl?: string;
  slidesUrl?: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  featured: boolean;
  tags: string[];
  techStack: string[];
  coverImage: string;
  galleryImages: string[];
  links: ExternalLinks;
  timeframe: string;
  highlights: string[];
  metrics: ProjectMetric[];
  sortOrder: number;
};

export type Experience = {
  id: string;
  slug: string;
  role: string;
  company: string;
  companyDisplayName: string;
  dateRange: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  bullets: string[];
  technologies: string[];
  featured: boolean;
  coverImage: string;
  links: ExternalLinks;
  metrics: ProjectMetric[];
  sortOrder: number;
};

export type ResumeSettings = {
  title: string;
  description: string;
  resumeUrl: string;
  embedUrl: string;
};

export type ContactSettings = {
  targetEmail: string;
  storeSubmissions: boolean;
  sendNotifications: boolean;
};

export type SiteSettings = {
  heroTitle: string;
  heroSubtitle: string;
  heroSummary: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

export type PortfolioContent = {
  projects: Project[];
  experiences: Experience[];
  resume: ResumeSettings;
  contact: ContactSettings;
  site: SiteSettings;
  submissions: ContactSubmission[];
};

const seedContent: PortfolioContent = {
  projects: [
    {
      id: 'project-archetype',
      slug: 'archetype',
      name: 'Archetype',
      subtitle: 'Crypto intelligence layer and personalized strategy engine',
      shortDescription:
        'Designed a premium fintech decision layer that adapts strategy flows to investor personality, goals, and market behavior.',
      fullDescription:
        'Built Archetype as a strategy operating layer for crypto investors. The system translates investor behavior and target outcomes into guided decision flows, balancing risk posture, time horizon, and trend awareness. The product direction is intentionally premium: modular insight cards, streamlined next-step guidance, and architecture designed for future wallet and execution integrations.',
      category: 'Fintech / Crypto',
      featured: true,
      tags: ['Flagship', 'Fintech UX', 'Crypto Intelligence'],
      techStack: ['TypeScript', 'React', 'Next.js', 'Analytics Layer', 'Wallet-ready Architecture'],
      coverImage: '/project-archetype.jpg',
      galleryImages: [],
      links: {
        githubUrl: 'https://github.com/computerdev21/Archetype',
        slidesUrl: '',
        videoUrl: '',
      },
      timeframe: '2025 – 2026',
      highlights: [
        'Created adaptive strategist flows personalized to investor style and goals.',
        'Designed guided planning journeys with trend-aware context windows.',
        'Structured page architecture for future wallet and strategy execution modules.',
      ],
      metrics: [
        { label: 'Positioning', value: 'Flagship' },
        { label: 'Domain', value: 'Crypto + Fintech' },
      ],
      sortOrder: 1,
    },
    {
      id: 'project-echoelders',
      slug: 'echoelders-companion-everly',
      name: 'EchoElders Companion / Everly',
      subtitle: 'AI voice companion platform for seniors and caregivers',
      shortDescription:
        'Built a voice-first companion that captures memory moments, generates caregiver summaries, and tracks mood signals through regular AI calls.',
      fullDescription:
        'Developed a production-oriented voice AI platform for elder care workflows. The system orchestrates call sessions through VAPI, captures transcripts, extracts stories, and delivers caregiver-ready summaries with mood and continuity insights. The architecture supports webhook-driven processing and a clear expansion path for care-team dashboards and longitudinal memory timelines.',
      category: 'AI / Health-tech',
      featured: true,
      tags: ['Flagship', 'Voice AI', 'Caregiver Tech'],
      techStack: ['Next.js', 'React', 'Supabase', 'VAPI', 'Webhook Pipeline'],
      coverImage: '/project-prepwise.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2025',
      highlights: [
        'Implemented regular AI voice-call workflow for elder engagement.',
        'Created transcript and summary pipelines for caregiver visibility.',
        'Built mood insight extraction and memory capture flow.',
      ],
      metrics: [
        { label: 'Interface', value: 'Voice-first' },
        { label: 'Primary Users', value: 'Seniors + Caregivers' },
      ],
      sortOrder: 2,
    },
    {
      id: 'project-intrabot',
      slug: 'intrabot-ai-powered-internship-assistant',
      name: 'IntraBot – AI-Powered Internship Assistant',
      subtitle: 'Resume intelligence + ATS compliance workflow',
      shortDescription:
        'Built an internship assistant with PDF parsing, ATS checks, scoring, and grounded follow-up chat.',
      fullDescription:
        'Created an end-to-end assistant for internship preparation. Candidates upload resume PDFs, the pipeline extracts structured text, runs ATS-style checks, scores profile-job alignment, and powers follow-up Q&A grounded in user-specific resume content. The architecture is designed for iterative model and rubric upgrades without changing the user experience.',
      category: 'AI / Career Tech',
      featured: true,
      tags: ['Featured', 'LLM Workflow'],
      techStack: ['Next.js', 'Python', 'NLP', 'PDF Extraction', 'Scoring Engine'],
      coverImage: '/project-resume-ai.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2025',
      highlights: [
        'Implemented resume PDF upload and text extraction pipeline.',
        'Developed ATS compliance checks and scoring heuristics.',
        'Built grounded chatbot follow-up using extracted resume context.',
      ],
      metrics: [
        { label: 'Core Workflow', value: 'Upload → Analyze → Coach' },
      ],
      sortOrder: 3,
    },
    {
      id: 'project-interview-practice-bot',
      slug: 'interview-practice-bot',
      name: 'Interview Practice Bot',
      subtitle: 'AI mock interview with multimodal coaching',
      shortDescription:
        'Created an AI interview assistant with posture analysis, communication feedback, and confidence coaching.',
      fullDescription:
        'Developed a mock interview system that combines spoken-response analysis with body posture indicators to generate practical coaching feedback. The assistant supports repeated practice loops and tracks progress in behavioral performance, clarity, and delivery confidence.',
      category: 'AI / Coaching',
      featured: true,
      tags: ['Featured', 'Multimodal'],
      techStack: ['Python', 'Computer Vision', 'Speech Analytics', 'Feedback Engine'],
      coverImage: '/project-resume-ai.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2025',
      highlights: [
        'Implemented communication signal evaluation and coaching prompts.',
        'Integrated body posture analysis into interview feedback.',
        'Built repeat-practice loop for behavioral improvement.',
      ],
      metrics: [],
      sortOrder: 4,
    },
    {
      id: 'project-realtime-speech',
      slug: 'real-time-speech-analysis-model',
      name: 'Real-Time Speech Analysis Model',
      subtitle: 'Low-latency speech quality scoring',
      shortDescription:
        'Built a CPU-optimized model for filler detection, accent deviation analysis, and clarity/pace scoring.',
      fullDescription:
        'Implemented a real-time speech intelligence pipeline tuned for low-latency CPU environments. The model stack scores speaking clarity, pace, filler words, and accent drift in near real time. Export flow supports ONNX deployment for efficient inference in constrained runtime contexts.',
      category: 'Applied ML',
      featured: true,
      tags: ['Featured', 'Inference Optimization'],
      techStack: ['PyTorch', 'Transformers', 'ONNX', 'Audio Processing'],
      coverImage: '/project-btcai.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2025',
      highlights: [
        'Implemented filler-word and pace scoring model outputs.',
        'Added accent deviation analysis for communication assessment.',
        'Exported pipeline for low-latency ONNX CPU deployment.',
      ],
      metrics: [],
      sortOrder: 5,
    },
    {
      id: 'project-airline-analytics',
      slug: 'airline-delay-and-cancellation-analytics',
      name: 'Airline Delay & Cancellation Analytics',
      subtitle: 'Dynamic risk modeling and what-if analysis',
      shortDescription:
        'Built Tableau + Python analytics workflows for delay risk classification and scenario planning.',
      fullDescription:
        'Developed a route-level analytics model that studies delay and cancellation behavior with what-if scenarios for operational planning. Combined Tableau dashboards with Python and TabPy-backed logic to support dynamic risk views and executive-level interpretation.',
      category: 'Analytics',
      featured: true,
      tags: ['Featured', 'Data Product'],
      techStack: ['Tableau', 'Python', 'TabPy', 'Risk Modeling'],
      coverImage: '/project-resum8.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2024',
      highlights: [
        'Implemented delay/cancellation trend segmentation.',
        'Built dynamic what-if scenario controls in dashboards.',
        'Connected TabPy logic for model-driven Tableau interactions.',
      ],
      metrics: [],
      sortOrder: 6,
    },
    {
      id: 'project-text-classification',
      slug: 'text-classification-benchmark',
      name: 'Text Classification Benchmark',
      subtitle: 'NLP model comparison and robustness testing',
      shortDescription: 'Benchmarked NLP classifiers across accuracy-speed tradeoffs.',
      fullDescription: 'Built a benchmark suite comparing multiple text classification approaches and feature extraction pipelines.',
      category: 'AI / NLP',
      featured: false,
      tags: ['Additional'],
      techStack: ['Python', 'NLP'],
      coverImage: '/project-btcai.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2024',
      highlights: [],
      metrics: [],
      sortOrder: 7,
    },
    {
      id: 'project-credit-card-assistant',
      slug: 'canadian-credit-card-assistant',
      name: 'Canadian Credit Card Assistant',
      subtitle: 'Rewards optimization assistant',
      shortDescription: 'Designed assistant workflows for Canadian rewards strategy decisions.',
      fullDescription: 'Developed recommendations and interaction flows for spending-based card optimization.',
      category: 'Fintech',
      featured: false,
      tags: ['Additional'],
      techStack: ['React Native', 'AI Recommendations'],
      coverImage: '/project-prepwise.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2025',
      highlights: [],
      metrics: [],
      sortOrder: 8,
    },
    {
      id: 'project-rumbledefi',
      slug: 'rumbledefi',
      name: 'RumbleDeFi',
      subtitle: 'Wallet-connected web3 product',
      shortDescription: 'Built connected on-chain interfaces and wallet interaction UX.',
      fullDescription: 'Implemented DeFi product interactions with streamlined wallet connectivity and transaction flows.',
      category: 'Blockchain',
      featured: false,
      tags: ['Blockchain Engineering Projects'],
      techStack: ['React', 'Web3'],
      coverImage: '/project-uniswap.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2024',
      highlights: [],
      metrics: [],
      sortOrder: 9,
    },
    {
      id: 'project-exchange-platform-concepts',
      slug: 'exchange-trading-data-platform-concepts',
      name: 'Exchange / Trading Data Platform Concepts',
      subtitle: 'Spot and futures signal workflows',
      shortDescription: 'Prototyped data platform patterns for exchange analytics and strategy support.',
      fullDescription: 'Designed system concepts around exchange API ingestion, signal interpretation, and portfolio telemetry.',
      category: 'Trading & Exchange Data Projects',
      featured: false,
      tags: ['Trading & Exchange Data Projects'],
      techStack: ['CCXT', 'Exchange APIs'],
      coverImage: '/project-resum8.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2025',
      highlights: [],
      metrics: [],
      sortOrder: 10,
    },
    {
      id: 'project-edbucks',
      slug: 'edbucks',
      name: 'EdBucks',
      subtitle: 'Product and infrastructure delivery',
      shortDescription: 'Contributed to platform delivery and dev workflow reliability.',
      fullDescription: 'Implemented feature and delivery improvements with CI/CD support.',
      category: 'Platform',
      featured: false,
      tags: ['Additional'],
      techStack: ['AWS', 'Jenkins'],
      coverImage: '/project-frostiyeti.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2023',
      highlights: [],
      metrics: [],
      sortOrder: 11,
    },
    {
      id: 'project-merc-rides',
      slug: 'merc-rides',
      name: 'Merc Rides',
      subtitle: 'Mobility product build',
      shortDescription: 'Shipped full stack platform features for mobility workflows.',
      fullDescription: 'Built product modules focused on reliability, usability, and operational speed.',
      category: 'Full Stack',
      featured: false,
      tags: ['Additional'],
      techStack: ['React', 'Node.js'],
      coverImage: '/project-resum8.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2023',
      highlights: [],
      metrics: [],
      sortOrder: 12,
    },
    {
      id: 'project-blockchain-suite',
      slug: 'blockchain-dex-smart-contract-engineering',
      name: 'Blockchain / DEX / Smart Contract Engineering',
      subtitle: 'Protocol and smart contract execution',
      shortDescription: 'Delivered smart contract and DEX experimentation across multiple flows.',
      fullDescription: 'Built and tested smart contract systems, ABI integrations, and DEX automation concepts in Uniswap-style environments.',
      category: 'Blockchain Engineering Projects',
      featured: false,
      tags: ['Blockchain Engineering Projects'],
      techStack: ['Solidity', 'Hardhat', 'Web3'],
      coverImage: '/project-uniswap.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2024',
      highlights: [],
      metrics: [],
      sortOrder: 13,
    },
    {
      id: 'project-aideation-yt',
      slug: 'aideation-yt',
      name: 'Aideation-YT',
      subtitle: 'AI content ideation workflow',
      shortDescription: 'Created AI-powered structure for YouTube ideation and planning.',
      fullDescription: 'Implemented a concept-generation and planning workflow for content teams.',
      category: 'AI',
      featured: false,
      tags: ['Additional'],
      techStack: ['LLM Workflow'],
      coverImage: '/project-prepwise.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2024',
      highlights: [],
      metrics: [],
      sortOrder: 14,
    },
    {
      id: 'project-urings',
      slug: 'urings',
      name: 'Urings',
      subtitle: 'NFC identity and interaction concept',
      shortDescription: 'Explored NFC interaction patterns bridging physical and digital identity.',
      fullDescription: 'Developed concept workflows for NFC-powered profile and identity interactions.',
      category: 'Concept',
      featured: false,
      tags: ['Additional'],
      techStack: ['NFC', 'Product Design'],
      coverImage: '/project-archetype.jpg',
      galleryImages: [],
      links: {},
      timeframe: '2024',
      highlights: [],
      metrics: [],
      sortOrder: 15,
    },
  ],
  experiences: [
    {
      id: 'exp-powercor-linamar',
      slug: 'powercor-linamar-ai-automation-programmer',
      role: 'Software Programmer – AI & Automation',
      company: 'powercor-manufacturing-linamar',
      companyDisplayName: 'PowerCor Manufacturing / Linamar',
      dateRange: 'Sep 2025 – Present',
      location: 'Ontario, Canada',
      shortDescription:
        'Built an internal OS layer for HR and training operations with production dashboards, records systems, and admin tooling.',
      fullDescription:
        'Built and now own a production-grade internal operating system layer for HR workflows and employee-training operations in a manufacturing enterprise context. The platform includes workflow pages, records systems, reminders, approval-oriented interfaces, and practical administration tools. Work emphasizes operational visibility, data flow clarity, and reliable day-to-day execution across HR and operations teams while introducing practical AI/automation patterns for internal knowledge capture.',
      bullets: [
        'Created a full internal HR operating system layer spanning workflows, records, reminders, and training operations.',
        'Designed and shipped production dashboard modules and admin interfaces used in live operations.',
        'Improved usability and data movement across enterprise workflows, reducing execution friction across teams.',
        'Contributed practical AI/automation ideas for internal knowledge capture and process continuity.',
      ],
      technologies: ['React', 'TypeScript', 'Dashboards', 'Admin Systems', 'Workflow Automation'],
      featured: true,
      coverImage: '/about-visual.jpg',
      links: {},
      metrics: [
        { label: 'Priority', value: 'Highest' },
        { label: 'Scope', value: 'Enterprise HR OS' },
      ],
      sortOrder: 1,
    },
    {
      id: 'exp-nevo',
      slug: 'nevo-network-ml-engineer-mlops-genai',
      role: 'ML Engineer (MLOps & GenAI Systems)',
      company: 'nevo-network',
      companyDisplayName: 'NEVO Network',
      dateRange: 'Jun 2024 – Dec 2024',
      location: 'Remote',
      shortDescription: 'Built applied GenAI workflows with backend integration and production-minded experimentation.',
      fullDescription:
        'Designed and integrated applied GenAI workflows into product pipelines, focusing on system reliability, backend integration, and practical production behavior.',
      bullets: [
        'Developed intelligent GenAI workflow modules linked to product surfaces.',
        'Integrated model-serving behavior into backend/system orchestration layers.',
        'Ran production-minded experimentation loops for quality and consistency.',
      ],
      technologies: ['Python', 'LLMs', 'MLOps', 'Backend Integration'],
      featured: true,
      coverImage: '/project-btcai.jpg',
      links: {},
      metrics: [],
      sortOrder: 2,
    },
    {
      id: 'exp-feooh',
      slug: 'feooh-full-stack-developer',
      role: 'Full Stack Developer',
      company: 'feooh',
      companyDisplayName: 'FEOOH',
      dateRange: '2023 – 2024',
      location: 'Mississauga, ON',
      shortDescription: 'Delivered dashboard systems, API tracking, and payment integrations.',
      fullDescription: 'Built cross-functional product modules across dashboards, transactional flows, and backend integration.',
      bullets: [
        'Implemented dashboard views and API tracking interfaces.',
        'Integrated payment workflows and improved transaction reliability.',
        'Built features with ReactJs, Laravel, Java, and Inertia.js.',
      ],
      technologies: ['ReactJs', 'Laravel', 'Java', 'Inertia.js'],
      featured: false,
      coverImage: '/project-resum8.jpg',
      links: {},
      metrics: [],
      sortOrder: 3,
    },
    {
      id: 'exp-pactreon',
      slug: 'pactreon-full-stack-developer',
      role: 'Full Stack Developer',
      company: 'pactreon',
      companyDisplayName: 'PACTREON',
      dateRange: '2022 – 2023',
      location: 'Delhi, India',
      shortDescription: 'Shipped automation, Omnisend integrations, and CI/CD improvements.',
      fullDescription: 'Focused on workflow automation and delivery reliability in a high-velocity product environment.',
      bullets: [
        'Implemented workflow automation across product operations.',
        'Integrated Omnisend lifecycle communication flows.',
        'Improved CI/CD delivery with Jenkins, Docker, and Kubernetes.',
      ],
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Omnisend'],
      featured: false,
      coverImage: '/project-frostiyeti.jpg',
      links: {},
      metrics: [],
      sortOrder: 4,
    },
    {
      id: 'exp-startup-scholars',
      slug: 'startup-scholars-web-developer',
      role: 'Web Developer',
      company: 'the-startup-scholars',
      companyDisplayName: 'The Startup Scholars',
      dateRange: 'Early Career',
      location: 'Delhi, India',
      shortDescription: 'Built foundational web features in startup contexts.',
      fullDescription: 'Delivered early-stage product features and learned execution discipline in fast feedback loops.',
      bullets: [
        'Developed foundational web modules and product pages.',
        'Worked directly with evolving product priorities in startup conditions.',
      ],
      technologies: ['JavaScript', 'Web Development'],
      featured: false,
      coverImage: '/project-prepwise.jpg',
      links: {},
      metrics: [],
      sortOrder: 5,
    },
  ],
  resume: {
    title: 'Dev_Chetal_4yrs_Backend',
    description: 'Viewable resume with embedded document support and fallback actions.',
    resumeUrl: 'https://docs.google.com/document/d/DEV_CHETAL_4YRS_BACKEND/edit?usp=sharing',
    embedUrl: 'https://docs.google.com/document/d/DEV_CHETAL_4YRS_BACKEND/preview',
  },
  contact: {
    targetEmail: 'devchetal@gmail.com',
    storeSubmissions: true,
    sendNotifications: false,
  },
  site: {
    heroTitle: 'Full Stack Software Engineer · AI / Automation Engineer',
    heroSubtitle: 'Building across enterprise software, AI systems, analytics, fintech, and blockchain',
    heroSummary:
      'I design and ship product-grade systems with clean architecture and operational depth. Portfolio includes internal enterprise OS workflows, applied AI products, analytics tooling, and fintech/blockchain engineering.',
  },
  submissions: [],
};

const STORAGE_KEY = 'portfolio-platform-content-v1';

export const getPortfolioContent = (): PortfolioContent => {
  if (typeof window === 'undefined') {
    return seedContent;
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return seedContent;
  }
  try {
    return JSON.parse(raw) as PortfolioContent;
  } catch {
    return seedContent;
  }
};

export const savePortfolioContent = (content: PortfolioContent): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event('portfolio-content-updated'));
};

export const resetPortfolioContent = (): void => {
  savePortfolioContent(seedContent);
};

export const getSeedContent = (): PortfolioContent => seedContent;
