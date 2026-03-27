import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter, Mail, MapPin, Sparkles, Code2, Cpu, Globe, Zap, Download } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const socials = [
  { icon: Github, href: 'https://github.com/computerdev21', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dev-chetal-068707171/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/DevChetal99', label: 'Twitter' },
  { icon: Mail, href: 'mailto:devchetal@gmail.com', label: 'Email' },
];

const quickStats = [
  { value: '5+', label: 'Years Building in Production' },
  { value: '20+', label: 'Projects Across AI, Web & Blockchain' },
  { value: 'End-to-End', label: 'Ownership Mindset' },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/5 via-transparent to-apple-purple/5" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-apple-blue/10 to-apple-purple/10 blur-[100px]"
            animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-apple-purple/10 to-apple-pink/10 blur-[80px]"
            animate={{ y: [20, -20, 20], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-apple-cyan/5 to-apple-blue/5 blur-[60px]"
            animate={{ x: [-15, 15, -15], y: [-15, 15, -15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-apple-green/10 border border-apple-green/20 rounded-full mb-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apple-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-apple-green" />
                </span>
                <span className="text-sm font-medium text-apple-green">Open to impactful engineering roles</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.1]">
                Hey, I'm <span className="text-gradient">Dev Chetal</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-muted-foreground mb-4">
                Full Stack <span className="text-apple-blue font-semibold">Software Engineer</span> &{' '}
                <span className="text-apple-purple font-semibold">AI Engineer</span>
              </motion.p>

              <motion.p variants={itemVariants} className="text-base text-muted-foreground/80 mb-8 max-w-2xl leading-relaxed">
                I build production-ready systems across AI, automation, analytics, and web platforms. My work spans enterprise internal tools,
                intelligent workflows, data-driven applications, and customer-facing products across manufacturing, ML, fintech, and blockchain environments.
              </motion.p>

              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all border border-transparent hover:border-border"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/work">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-apple-blue to-apple-purple rounded-full btn-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-all border border-border"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Experience
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link to="/resume">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-all border border-border"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-5 mt-10 pt-8 border-t border-border">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <p className="text-2xl lg:text-3xl font-bold text-foreground break-words">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink opacity-60 blur-lg"
                  animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />

                <motion.div
                  className="absolute -inset-3 rounded-full bg-gradient-to-r from-apple-purple/30 via-apple-blue/30 to-apple-cyan/30 blur-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />

                <motion.div
                  className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/profile-photo.jpg"
                    alt="Dev Chetal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 left-0 px-4 py-2.5 bg-card border border-border rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-apple-blue/10 rounded-lg">
                      <Code2 className="w-4 h-4 text-apple-blue" />
                    </div>
                    <span className="text-sm font-semibold">Product + Platform Builder</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-8 -right-4 px-4 py-2.5 bg-card border border-border rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-apple-pink/10 rounded-lg">
                      <MapPin className="w-4 h-4 text-apple-pink" />
                    </div>
                    <span className="text-sm font-semibold">Toronto, ON</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 -right-6 px-3 py-1.5 bg-gradient-to-r from-apple-blue to-apple-purple rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center gap-1.5 text-white text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Shipping Fast
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Engineering across product, platform, and AI systems
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From internal enterprise tooling to customer-facing AI products, I focus on clean architecture, practical automation, and reliable delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: 'AI & Applied ML',
                description: 'GenAI workflows, speech intelligence, model serving, and production-minded experimentation.',
                color: 'from-apple-blue to-apple-cyan',
              },
              {
                icon: Globe,
                title: 'Full Stack Products',
                description: 'Dashboards, APIs, admin tooling, records systems, and secure integrations with strong UX.',
                color: 'from-apple-purple to-apple-pink',
              },
              {
                icon: Zap,
                title: 'Automation & Ops',
                description: 'Workflow automation, CI/CD pipelines, data flow improvements, and enterprise process acceleration.',
                color: 'from-apple-pink to-apple-orange',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-apple-blue/30 hover:shadow-soft transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
