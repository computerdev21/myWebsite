import { motion } from 'framer-motion';
import {
  Brain,
  Server,
  Layout,
  GitBranch,
  Cloud,
  Blocks,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Firebase', level: 88 },
      { name: 'PostgreSQL', level: 82 },
    ],
  },
  {
    title: 'Blockchain',
    icon: Blocks,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Solidity', level: 85 },
      { name: 'Ethereum', level: 88 },
      { name: 'Avalanche', level: 80 },
      { name: 'Uniswap Protocol', level: 82 },
    ],
  },
  {
    title: 'AI/ML',
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'OpenAI API', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Python ML', level: 80 },
    ],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    color: 'from-indigo-500 to-blue-600',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS/GCP', level: 78 },
    ],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    color: 'from-gray-500 to-slate-500',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 70 },
      { name: 'Jest/Testing', level: 82 },
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
    <section id="skills" className="relative py-24 sm:py-32 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-apple-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
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
              className="group relative bg-card border border-white/10 rounded-3xl p-6 overflow-hidden"
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500`}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
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
  );
}
