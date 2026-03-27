import { motion } from 'framer-motion';
import {
  Code2, Database, Blocks, Brain, Server, Layout,
  GitBranch, Cloud, Terminal, TestTube, Container,
  Cpu, Sparkles, Zap, Globe, Workflow, BarChart3, Bot
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Engineering',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
    description: 'Modern interfaces and product-grade UX systems',
    skills: [
      { name: 'JavaScript / TypeScript', level: 93, icon: Code2 },
      { name: 'React', level: 95, icon: Layout },
      { name: 'Next.js', level: 90, icon: Sparkles },
      { name: 'Tailwind CSS', level: 94, icon: Layout },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    description: 'Reliable services, integrations, and data workflows',
    skills: [
      { name: 'Node.js', level: 90, icon: Server },
      { name: 'Python', level: 92, icon: Terminal },
      { name: 'Laravel', level: 84, icon: Workflow },
      { name: 'Java', level: 82, icon: Cpu },
      { name: 'SQL', level: 85, icon: Database },
      { name: 'API Integration', level: 92, icon: Globe },
    ],
  },
  {
    title: 'AI / ML Systems',
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    description: 'Applied AI product engineering and model deployment',
    skills: [
      { name: 'AI / ML Workflows', level: 92, icon: Brain },
      { name: 'PyTorch', level: 87, icon: Cpu },
      { name: 'Transformers', level: 84, icon: Sparkles },
      { name: 'ONNX', level: 82, icon: Zap },
      { name: 'Supabase', level: 86, icon: Database },
      { name: 'VAPI', level: 83, icon: Bot },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-indigo-500 to-blue-600',
    description: 'Automation, deployment, and operational reliability',
    skills: [
      { name: 'Docker', level: 88, icon: Container },
      { name: 'Kubernetes', level: 80, icon: Cloud },
      { name: 'Jenkins', level: 84, icon: Workflow },
      { name: 'AWS', level: 83, icon: Cloud },
      { name: 'GCP', level: 78, icon: Cloud },
      { name: 'Automation Systems', level: 90, icon: Zap },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    color: 'from-teal-500 to-cyan-600',
    description: 'Decision-focused analytics and BI implementation',
    skills: [
      { name: 'Tableau', level: 86, icon: BarChart3 },
      { name: 'Python Analytics', level: 90, icon: Terminal },
      { name: 'TabPy Workflows', level: 80, icon: Workflow },
      { name: 'Risk & Scenario Modeling', level: 82, icon: TestTube },
    ],
  },
  {
    title: 'Blockchain Engineering',
    icon: Blocks,
    color: 'from-purple-500 to-pink-500',
    description: 'Web3 integrations and protocol-level experimentation',
    skills: [
      { name: 'Blockchain / Smart Contracts', level: 86, icon: Blocks },
      { name: 'DEX & ABI Interaction', level: 84, icon: Globe },
      { name: 'CCXT', level: 80, icon: GitBranch },
      { name: 'Wallet Connectivity', level: 85, icon: Zap },
    ],
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

export default function Skills() {
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
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Skills & <span className="text-gradient">Execution Stack</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cross-functional engineering depth across full stack platforms, AI systems, analytics, and blockchain product workflows.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: '25+', label: 'Technologies Used in Production' },
              { value: '5+', label: 'Years Engineering Experience' },
              { value: 'AI + Full Stack', label: 'Core Focus' },
              { value: 'Enterprise + Product', label: 'Delivery Context' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-card border border-border rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-2xl sm:text-3xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group relative bg-card border border-border rounded-3xl p-6 overflow-hidden hover:border-apple-blue/30 hover:shadow-soft-lg transition-all"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500`}
                />

                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
