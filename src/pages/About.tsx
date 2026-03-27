import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Download, Code2, CheckCircle, Loader2 } from 'lucide-react';

const experiences = [
  {
    role: 'Software Programmer – AI & Automation',
    company: 'PowerCor Manufacturing / Linamar',
    period: 'Sep 2025 – Present',
    location: 'Ontario, Canada',
    description:
      'Owning production-facing software improvements across internal manufacturing platforms, dashboards, and operational workflow systems.',
    highlights: [
      'Delivered and refined real-time dashboards, admin tools, records pages, reminders, and training system workflows used in day-to-day plant operations.',
      'Improved usability and data flow across internal applications to increase operational visibility and reduce friction in execution workflows.',
      'Contributed to practical AI/automation initiatives for enterprise processes, including decision-memory and meeting-transcriber concepts for knowledge capture.',
      'Collaborated closely with operations and technical stakeholders to debug issues, ship reliable updates, and support production continuity.',
    ],
    current: true,
  },
  {
    role: 'ML Engineer (MLOps & GenAI Systems)',
    company: 'NEVO Network',
    period: 'Jun 2024 – Dec 2024',
    location: 'Remote',
    description:
      'Built applied GenAI workflows and backend-integrated ML systems with a strong focus on experimentation quality and production readiness.',
    highlights: [
      'Developed GenAI-enabled workflows that connected model outputs with product features and user-facing functionality.',
      'Integrated backend services and ML components to support reliable inference and system-level orchestration.',
      'Iterated on prompt/model pipelines and evaluation loops to improve response quality, consistency, and practical utility.',
      'Worked with a production mindset: instrumented behavior, handled integration edge cases, and optimized for maintainability.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'FEOOH',
    period: '2023 – 2024',
    location: 'Mississauga, ON',
    description:
      'Built and maintained product-critical full stack modules spanning dashboards, APIs, and transactional flows.',
    highlights: [
      'Implemented dashboard and API-tracking views to improve monitoring and business-side visibility.',
      'Integrated payment workflows and strengthened end-to-end transaction reliability across client-facing features.',
      'Delivered product features using React.js, Laravel, Java, and Inertia.js in a cross-functional development setup.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'PACTREON',
    period: '2022 – 2023',
    location: 'Delhi, India',
    description:
      'Focused on automation pipelines, platform integrations, and delivery acceleration through CI/CD modernization.',
    highlights: [
      'Automated recurring workflows to reduce manual tasks and improve operational throughput.',
      'Integrated Omnisend-based notification pipelines to support reliable communication events and lifecycle updates.',
      'Improved release processes using Jenkins, Docker, and Kubernetes for faster and more consistent deployments.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'The Startup Scholars',
    period: 'Early Career',
    location: 'Delhi, India',
    description:
      'Contributed to early-stage web product development and foundational engineering delivery.',
    highlights: [
      'Built and shipped foundational web features while strengthening practical product and implementation fundamentals.',
      'Worked in fast-moving startup environments with direct feedback loops between product needs and engineering execution.',
    ],
  },
];

const socials = [
  { icon: Github, href: 'https://github.com/computerdev21', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dev-chetal-068707171/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/DevChetal99', label: 'Twitter' },
];

export default function About() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/5 via-transparent to-apple-purple/5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Building and shipping in production</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Experience grounded in <span className="text-gradient">real systems</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Full Stack Software Engineer and AI Engineer with hands-on ownership across architecture, implementation, debugging, deployment,
                and product iteration. I build internal enterprise platforms, intelligent workflows, analytics systems, and user-facing apps across
                manufacturing software, AI products, fintech, and blockchain environments.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a
                  href="mailto:devchetal@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-apple-blue to-apple-purple rounded-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </motion.a>
                <motion.a
                  href="/Dev_Chetal_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </div>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-background shadow-soft-lg">
                <img
                  src="/profile-photo.jpg"
                  alt="Dev Chetal"
                  className="w-full h-auto"
                />
              </div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-3 bg-card border border-border rounded-2xl shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-apple-blue to-apple-purple flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-secondary/30" id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Experience</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl">
              Production ownership across enterprise platforms, applied AI systems, and full stack product engineering.
            </p>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company + exp.role}
                  className="relative pl-8 border-l-2 border-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.current ? 'bg-gradient-to-r from-apple-blue to-apple-purple' : 'bg-muted-foreground/30'}`} />

                  <div className={`bg-card border rounded-2xl p-6 ${exp.current ? 'border-apple-blue/30 shadow-soft' : 'border-border'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs rounded-full bg-apple-blue/10 text-apple-blue font-medium">Current</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-apple-blue font-medium">@ {exp.company}</span>
                      <span className="text-sm text-muted-foreground">• {exp.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2.5">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-apple-purple shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Open to software engineering, AI engineering, and product-driven platform roles. If you are building something meaningful,
                I would love to connect.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-apple-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:devchetal@gmail.com" className="text-foreground hover:text-apple-blue transition-colors">
                      devchetal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-apple-purple/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-apple-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Toronto, ON / Remote</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-apple-blue transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-apple-blue transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-apple-blue transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? 'bg-green-500'
                      : 'bg-gradient-to-r from-apple-blue to-apple-purple hover:shadow-glow'
                  }`}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
