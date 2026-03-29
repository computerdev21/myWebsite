import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Github, Linkedin, Globe, Building2, GraduationCap, Award, Code2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance / Contract',
    location: 'Toronto, ON / Remote',
    period: '2021 - Present',
    description: 'Working with clients worldwide to build full-stack applications, blockchain solutions, and AI-powered tools.',
    achievements: [
      'Developed 15+ production applications for clients across various industries',
      'Built smart contracts handling significant transaction volume on Ethereum & Avalanche',
      'Created AI-powered tools using OpenAI API and LangChain',
      'Implemented CI/CD pipelines and cloud deployments',
    ],
  },
];

const education = [
  {
    degree: 'Advanced Diploma in Computer Programming',
    school: 'George Brown College',
    location: 'Toronto, ON',
    period: '2019 - 2021',
    description: 'Focused on software development, web technologies, and database management.',
  },
];

const skills = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
  'Blockchain': ['Solidity', 'Ethereum', 'Avalanche', 'Web3.js', 'Hardhat'],
  'AI/ML': ['OpenAI API', 'LangChain', 'TensorFlow', 'Python', 'FastAPI'],
  'DevOps': ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions'],
};

const certifications = [
  { name: 'Ethereum Developer Bootcamp', issuer: 'Consensys', year: '2022' },
];

const projects = [
  {
    name: 'Everly',
    tech: 'React, TypeScript, Python, OpenAI',
    description: 'AI-powered creative tools platform for generating and editing content.',
  },
  {
    name: 'PrepWise AI',
    tech: 'Next.js, TypeScript, Firebase, OpenAI',
    description: 'AI-powered career preparation platform with personalized coaching and interview practice.',
  },
  {
    name: 'Archetype',
    tech: 'TypeScript, Vite, Tailwind',
    description: 'Modern web application template with best practices and pre-configured components.',
  },
  {
    name: 'Resumode',
    tech: 'React, Node.js, OpenAI',
    description: 'AI-powered resume builder and optimizer.',
  },
  {
    name: 'LMOS',
    tech: 'TypeScript, Node.js',
    description: 'Learning Management Operating System for educational institutions.',
  },
  {
    name: 'FrostiYeti V2',
    tech: 'Solidity, React, Avalanche',
    description: 'Blockchain crowdfunding DApp with NFT rewards on Avalanche.',
  },
  {
    name: 'AI BTC Bot',
    tech: 'Python, TensorFlow, TypeScript',
    description: 'Bitcoin price prediction and analysis tool using machine learning.',
  },
  {
    name: 'Uniswap Swapper',
    tech: 'JavaScript, Ethereum, Web3.js',
    description: 'DeFi trading interface for Uniswap protocol with real-time price tracking.',
  },
  {
    name: 'EDBucks',
    tech: 'Solidity, React, Node.js',
    description: 'Educational blockchain platform with token rewards.',
  },
];

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Actions */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Resume</h1>
            <p className="text-muted-foreground">My professional journey and qualifications</p>
          </div>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-apple-blue to-apple-purple rounded-full btn-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.print()}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </motion.button>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-card border border-border rounded-3xl overflow-hidden shadow-soft-lg"
        >
          {/* Resume Header */}
          <div className="relative p-8 sm:p-12 bg-gradient-to-br from-apple-blue/5 via-transparent to-apple-purple/5 border-b border-border">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Profile Photo */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-card shadow-xl">
                  <img
                    src="/profile-photo.jpg"
                    alt="Dev Chetal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Info */}
              <div className="flex-1">
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  Dev Chetal
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-apple-blue font-medium mb-4">
                  Full Stack Blockchain AI Engineer
                </motion.p>
                <motion.p variants={itemVariants} className="text-muted-foreground mb-6 max-w-xl">
                  Passionate developer with 5+ years of experience building innovative applications 
                  across AI, Blockchain, and Full Stack development. Constant learner and explorer 
                  of new technologies. Seeking to leverage technical expertise to create impactful solutions.
                </motion.p>

                {/* Contact Info */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <a href="mailto:devchetal@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                    devchetal@gmail.com
                  </a>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Toronto, ON / Remote
                  </span>
                  <a href="https://github.com/computerdev21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-4 h-4" />
                    github.com/computerdev21
                  </a>
                  <a href="https://linkedin.com/in/dev-chetal-068707171" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                    linkedin.com/in/dev-chetal
                  </a>
                  <a href="https://crowsandcode.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Globe className="w-4 h-4" />
                    crowsandcode.xyz
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Resume Content */}
          <div className="p-8 sm:p-12 space-y-12">
            {/* Experience Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-apple-blue" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Work Experience</h3>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-border hover:border-apple-blue transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-apple-blue" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <span className="text-sm text-apple-purple font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-apple-blue mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-apple-purple/10 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-apple-purple" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Technical Skills</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div
                    key={category}
                    whileHover={{ y: -2 }}
                    className="p-4 bg-secondary/50 rounded-2xl border border-border"
                  >
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-card border border-border rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-apple-orange/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-apple-orange" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Featured Projects</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-5 bg-secondary/30 rounded-2xl border border-border hover:border-apple-blue/30 transition-all"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{project.name}</h4>
                    <p className="text-xs text-apple-blue mb-2">{project.tech}</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-apple-green/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-apple-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-border"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-apple-green" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <span className="text-sm text-apple-green font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span className="font-medium">{edu.school}</span>
                    <span>•</span>
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </motion.section>

            {/* Certifications */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-apple-pink/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-apple-pink" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 px-4 py-3 bg-secondary/50 rounded-xl border border-border"
                  >
                    <Award className="w-4 h-4 text-apple-pink" />
                    <div>
                      <p className="font-medium text-foreground text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>

        {/* Embedded Resume Document */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 bg-card border border-border rounded-3xl overflow-hidden shadow-soft-lg"
        >
          <div className="p-4 bg-secondary/30 border-b border-border">
            <h3 className="text-xl font-bold text-foreground">Document View</h3>
          </div>
          <div className="w-full h-[800px] relative">
            <iframe
              src="https://docs.google.com/document/d/1qGYth1gVVuSVDo96j_wkId1XWXdLmLDgsz_OFec4Qzo/preview"
              className="absolute inset-0 w-full h-full border-0"
              title="Resume Document"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          References available upon request
        </motion.p>
      </div>
    </motion.div>
  );
}
