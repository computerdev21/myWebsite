export const projectsdata = () => [
  {
    name: "Resumode",
    title: "AI-Powered Resume Assistant",
    banner: "/projects/resumode-banner.png",
    logo: "/projects/resumode-logo.png",
    tech: ["Next.js", "OpenAI", "Drizzle ORM", "Neon DB", "TypeScript"],
    link: "https://resumode.vercel.app/",
    github: "https://github.com/computerdev21/resume-ai-chatbot",
    description: `Resumode is an AI chatbot that analyzes uploaded resumes and compares them against job descriptions to provide ATS-based feedback, suggestions, and improvement tips.`,
    highlights: [
      "Uses OpenAI API to extract and compare key skills and responsibilities",
      "Supports PDF resume upload, parsing, and structured scoring",
      "Interactive AI chat feature to explain recommendations in plain language",
      "Built with Next.js App Router and Neon DB using Drizzle ORM"
    ]
  },
  {
    name: "Resum8Backend",
    title: "Backend Server Setup for Resumode",
    banner: "/projects/resum8backend-banner.png",
    logo: "/projects/resum8backend-logo.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/computerdev21/Resum8Backend",
    link: "https://github.com/computerdev21/Resum8Backend",
    description: `The backend for Resumode, providing secure API endpoints and authentication for resume processing.`,
    highlights: [
      "RESTful API built with Node.js and Express",
      "Secured endpoints using JWT authentication",
      "Integrated with MongoDB for data persistence"
    ]
  },
  {
    name: "AI BTC Bot",
    title: "AI-Powered Cryptocurrency Trading Tool",
    banner: "/projects/ai-btc-banner.png",
    logo: "/projects/ai-btc-logo.png",
    tech: ["Python", "TensorFlow", "CCXT", "Node.js"],
    github: "https://github.com/computerdev21/btcaiTest",
    description: `An AI trading tool that analyzes market data to provide cryptocurrency trading suggestions.`,
    highlights: [
      "Utilizes machine learning to analyze BTC market trends",
      "Supports multiple cryptocurrency exchanges",
      "Provides real-time trading suggestions"
    ]
  },
  {
    name: "UniSwap Swapper",
    title: "Crypto Volume Enhancer Bot",
    banner: "/projects/uniswap-swapper-banner.png",
    logo: "/projects/uniswap-swapper-logo.png",
    tech: ["Solidity", "Ethers.js", "Uniswap V3", "Node.js"],
    github: "https://github.com/computerdev21/UniSwapSwapper",
    description: `A bot that performs automated token swaps on Uniswap to increase trading volume and liquidity visibility.`,
    highlights: [
      "Automates token swaps between predefined wallets",
      "Enhances Uniswap liquidity through volume boosting",
      "Optimizes gas fees for efficient trading execution"
    ]
  },
  {
    name: "EdBucks",
    title: "Blockchain-based Crowdfunding Platform",
    banner: "/projects/edbucks-banner.png",
    logo: "/projects/edbucks-logo.png",
    tech: ["Avalanche", "Solidity", "Hardhat", "Next.js", "Tailwind"],
    github: "https://github.com/BhartiyaYeti/FrostiYeti-V2",
    description: `A decentralized funding solution for research and education built on Avalanche.`,
    highlights: [
      "Designed milestone-based smart contracts with Solidity",
      "Integrated Chainlink for randomness and oracle pricing",
      "Included governance module with vote-weighted decisions"
    ]
  },
  {
    name: "Blockchain Automation Bot",
    title: "High Frequency P2P Token Volume Enhancer",
    banner: "/projects/bot-banner.png",
    logo: "/projects/bot-logo.png",
    tech: ["Node.js", "Ethers.js", "Uniswap V3", "MongoDB"],
    description: `Automated peer-to-peer swaps on Base/Ethereum to simulate liquidity and boost volume.`,
    highlights: [
      "Swapped ETH-WLFI pairs using Uniswap V3 pools",
      "Saved 10% on gas fees using custom optimizer",
      "Secure key handling and auto-rotation for wallets"
    ]
  },
  {
    name: "Merc Rides",
    title: "Android Booking App for Boat Test Rides",
    banner: "/projects/merc-banner.png",
    logo: "/projects/merc-logo.png",
    tech: ["Android", "Spring Boot", "Firebase", "Twilio", "Heroku"],
    description: `Users could pre-book test rides at global boating expos with real-time slot availability.`,
    highlights: [
      "Used a dynamic knapsack-style algorithm for seat distribution",
      "Deployed on Heroku with PostgreSQL backend",
      "Integrated SMS, email, and push notifications"
    ]
  },
  {
    name: "FEOOH Dashboard",
    title: "Ad Template Builder + Payment Integration",
    banner: "/projects/feoh-banner.png",
    logo: "/projects/feoh-logo.png",
    tech: ["Laravel", "Vue.js", "Inertia.js", "Java"],
    description: `Built an internal platform to streamline ad template creation and monitor payments.`,
    highlights: [
      "Integrated PAAY 3DS, PayPal, Giropay",
      "Used Konnektive CRM API for sales tracking",
      "Custom Java microservice for API tracking logs"
    ]
  },
  {
    name: "PACTREON Workflows",
    title: "Campaign Automation & Monitoring",
    banner: "/projects/pactreon-banner.png",
    logo: "/projects/pactreon-logo.png",
    tech: ["React.js", "Node.js", "Jenkins", "Docker"],
    description: `Optimized internal workflows for PPC campaigns and marketing automation.`,
    highlights: [
      "Automated newsletters using Omnisend API",
      "Streamlined Docker CI/CD deployment",
      "50% faster releases using Jenkins pipelines"
    ]
  }
];
