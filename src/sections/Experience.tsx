import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Everly AI',
    location: 'Remote',
    period: '2025 - Present',
    description:
      'Building AI-powered solutions and contributing to innovative products. Working with modern tech stack including React, TypeScript, Python, and AI/ML technologies.',
    highlights: [
      '18+ commits to production codebase',
      'Developed AI-powered features',
      'Collaborated with cross-functional teams',
    ],
    current: true,
  },
  {
    id: 2,
    role: 'Blockchain Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2023 - 2025',
    description:
      'Developed DeFi applications and smart contracts for various clients. Specialized in Ethereum, Avalanche, and Uniswap protocol integrations.',
    highlights: [
      'Deployed 5+ production DApps',
      'Built smart contracts in Solidity',
      'Integrated Web3 solutions for clients',
    ],
    current: false,
  },
  {
    id: 3,
    role: 'Software Developer',
    company: 'Various Projects',
    location: 'Remote',
    period: '2021 - 2023',
    description:
      'Built full-stack applications using modern technologies. Worked on diverse projects ranging from web apps to automation tools.',
    highlights: [
      'Completed 15+ client projects',
      'Mastered React, Node.js, and TypeScript',
      'Developed automation solutions',
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-black">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-apple-cyan/5 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey in tech
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-apple-blue via-apple-purple to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.2,
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full ${
                      exp.current
                        ? 'bg-apple-blue'
                        : 'bg-white/30'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                  >
                    {exp.current && (
                      <motion.div
                        className="absolute inset-0 bg-apple-blue rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    className="bg-card border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-colors"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-apple-blue">
                          <Briefcase size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-apple-purple" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
