import { motion } from 'framer-motion';
import { 
  Code2, Database, Blocks, Brain, Server, Layout, 
  GitBranch, Cloud, Terminal, Figma, TestTube, Container,
  Cpu, Sparkles, Zap, Globe, Shield, Workflow
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
    description: 'Building beautiful, responsive user interfaces',
    skills: [
      { name: 'React / Next.js', level: 95, icon: Code2 },
      { name: 'TypeScript', level: 90, icon: Terminal },
      { name: 'Tailwind CSS', level: 95, icon: Layout },
      { name: 'Vue.js', level: 80, icon: Code2 },
      { name: 'Figma', level: 70, icon: Figma },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    description: 'Creating robust server-side applications',
    skills: [
      { name: 'Node.js', level: 90, icon: Server },
      { name: 'Python', level: 85, icon: Terminal },
      { name: 'PostgreSQL', level: 82, icon: Database },
      { name: 'Redis', level: 75, icon: Database },
      { name: 'Firebase', level: 88, icon: Cloud },
    ],
  },
  {
    title: 'Blockchain',
    icon: Blocks,
    color: 'from-purple-500 to-pink-500',
    description: 'Developing decentralized applications',
    skills: [
      { name: 'Solidity', level: 85, icon: Blocks },
      { name: 'Ethereum', level: 88, icon: Globe },
      { name: 'Avalanche', level: 80, icon: Zap },
      { name: 'Web3.js / Ethers', level: 85, icon: Code2 },
      { name: 'Smart Contract Security', level: 78, icon: Shield },
    ],
  },
  {
    title: 'AI/ML',
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    description: 'Integrating intelligent systems',
    skills: [
      { name: 'OpenAI API', level: 90, icon: Sparkles },
      { name: 'LangChain', level: 85, icon: Workflow },
      { name: 'Python ML', level: 80, icon: Brain },
      { name: 'TensorFlow', level: 75, icon: Cpu },
      { name: 'Prompt Engineering', level: 88, icon: Sparkles },
    ],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    color: 'from-indigo-500 to-blue-600',
    description: 'Deploying and scaling applications',
    skills: [
      { name: 'Docker', level: 85, icon: Container },
      { name: 'Kubernetes', level: 75, icon: Cloud },
      { name: 'CI/CD', level: 80, icon: Workflow },
      { name: 'AWS / GCP', level: 78, icon: Cloud },
      { name: 'GitHub Actions', level: 82, icon: GitBranch },
    ],
  },
  {
    title: 'Tools',
    icon: Terminal,
    color: 'from-gray-500 to-slate-500',
    description: 'Essential development tools',
    skills: [
      { name: 'Git / GitHub', level: 95, icon: GitBranch },
      { name: 'VS Code', level: 95, icon: Code2 },
      { name: 'Jest / Testing', level: 82, icon: TestTube },
      { name: 'Vite / Webpack', level: 85, icon: Zap },
      { name: 'Linux / CLI', level: 88, icon: Terminal },
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
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Skills & <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of technologies and tools I've mastered over the years. 
              Always learning, always growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: '30+', label: 'Technologies' },
              { value: '5+', label: 'Years Experience' },
              { value: '95%', label: 'TypeScript' },
              { value: '90%', label: 'React' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-card border border-border rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
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
                {/* Glow Effect */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Skills */}
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

      {/* Learning Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Currently Learning</h2>
            <p className="text-muted-foreground">Technologies I'm exploring right now</p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { name: 'Rust', color: 'from-orange-600 to-red-600' },
              { name: 'Go', color: 'from-cyan-500 to-blue-500' },
              { name: 'WebAssembly', color: 'from-purple-600 to-indigo-600' },
              { name: 'Three.js', color: 'from-green-500 to-teal-500' },
              { name: 'tRPC', color: 'from-blue-500 to-indigo-500' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full text-white font-medium`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
