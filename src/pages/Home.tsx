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
  { value: '5+', label: 'Years Experience' },
  { value: '15+', label: 'Projects' },
  { value: 'Open', label: 'To Work' },
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
              {/* Available Badge */}
              <motion.div 
                variants={itemVariants} 
                className="inline-flex items-center gap-2 px-4 py-2 bg-apple-green/10 border border-apple-green/20 rounded-full mb-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apple-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-apple-green"></span>
                </span>
                <span className="text-sm font-medium text-apple-green">Available for work</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.1]">
                Hey, I'm <span className="text-gradient">Dev Chetal</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-muted-foreground mb-4">
                Full Stack <span className="text-apple-blue font-semibold">Blockchain</span>{' '}
                <span className="text-apple-purple font-semibold">AI</span> Engineer
              </motion.p>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-base text-muted-foreground/80 mb-8 max-w-lg leading-relaxed">
                I build things that live on the internet. From decentralized applications 
                to AI-powered solutions, I love turning complex problems into simple, 
                beautiful experiences. Constant learner and explorer of new technologies.
              </motion.p>

              {/* Social Links */}
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

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/work">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-apple-blue to-apple-purple rounded-full btn-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View My Work
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

              {/* Quick Stats */}
              <motion.div variants={itemVariants} className="flex gap-8 mt-10 pt-8 border-t border-border">
                {quickStats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
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
                {/* Animated Gradient Ring */}
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink opacity-60 blur-lg"
                  animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                  }}
                />
                
                {/* Secondary Ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full bg-gradient-to-r from-apple-purple/30 via-apple-blue/30 to-apple-cyan/30 blur-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Photo Container */}
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
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Badges */}
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
                    <span className="text-sm font-semibold">Engineer</span>
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

                {/* Extra decorative badge */}
                <motion.div
                  className="absolute bottom-20 -right-6 px-3 py-1.5 bg-gradient-to-r from-apple-blue to-apple-purple rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white">Open to Work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-apple-blue/10 text-apple-blue rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in building modern applications across the full stack, 
              with a focus on blockchain and AI technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Cpu, 
                title: 'AI & Machine Learning', 
                desc: 'Building intelligent applications with OpenAI, LangChain, and custom ML models.',
                color: 'from-apple-purple to-apple-pink',
                bgColor: 'bg-apple-purple/10'
              },
              { 
                icon: Globe, 
                title: 'Blockchain & Web3', 
                desc: 'Developing DeFi protocols, smart contracts, and decentralized applications.',
                color: 'from-apple-blue to-apple-cyan',
                bgColor: 'bg-apple-blue/10'
              },
              { 
                icon: Zap, 
                title: 'Full Stack Development', 
                desc: 'Creating end-to-end web applications with React, Node.js, and modern tools.',
                color: 'from-apple-orange to-apple-yellow',
                bgColor: 'bg-apple-orange/10'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-8 bg-card border border-border rounded-3xl hover:border-apple-blue/30 hover:shadow-soft-lg transition-all card-hover"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <motion.span 
                className="inline-block px-4 py-1.5 bg-apple-purple/10 text-apple-purple rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Portfolio
              </motion.span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Featured Projects</h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </div>
            <Link to="/work" className="hidden sm:flex items-center gap-2 text-apple-blue hover:text-apple-purple transition-colors group">
              View all projects 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Everly',
                role: 'AI Creative Platform',
                description: 'AI-powered creative tools platform for generating and editing content.',
                tags: ['React', 'TypeScript', 'Python', 'OpenAI'],
                color: 'from-apple-blue to-apple-purple',
                bgGlow: 'bg-apple-blue/5',
              },
              {
                title: 'PrepWise AI',
                role: 'AI Career Coach',
                description: 'AI-powered career preparation platform with personalized coaching.',
                tags: ['Next.js', 'TypeScript', 'Firebase', 'OpenAI'],
                color: 'from-apple-green to-apple-cyan',
                bgGlow: 'bg-apple-green/5',
              },
              {
                title: 'Archetype',
                role: 'Web Template',
                description: 'Modern web application template with best practices and pre-configured components.',
                tags: ['TypeScript', 'Vite', 'Tailwind', 'Open Source'],
                color: 'from-apple-orange to-apple-pink',
                bgGlow: 'bg-apple-orange/5',
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative p-8 bg-card border border-border rounded-3xl overflow-hidden hover:border-apple-blue/30 transition-all card-hover"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.color} opacity-10 blur-[80px] group-hover:opacity-20 group-hover:scale-110 transition-all duration-500`} />
                
                <div className="relative">
                  <div className={`inline-block px-3 py-1 ${project.bgGlow} rounded-full mb-4`}>
                    <p className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.role}
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-apple-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All Link */}
          <div className="mt-8 text-center sm:hidden">
            <Link to="/work" className="inline-flex items-center gap-2 text-apple-blue hover:text-apple-purple transition-colors">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/5 via-transparent to-apple-purple/5" />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-apple-blue/10 rounded-full blur-[120px]"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-apple-purple/10 rounded-full blur-[100px]"
          animate={{ x: [30, -30, 30], y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-apple-blue to-apple-purple flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Let's build something <span className="text-gradient">amazing</span> together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/about">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-apple-blue to-apple-purple rounded-full btn-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
