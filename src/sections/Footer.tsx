import { motion } from 'framer-motion';
import { Heart, Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Skills', href: '/skills' },
  { name: 'About', href: '/about' },
];

const socials = [
  { icon: Github, href: 'https://github.com/computerdev21', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dev-chetal-068707171/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/DevChetal99', label: 'Twitter' },
  { icon: Mail, href: 'mailto:dev@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-apple-blue/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Logo & Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-apple-blue to-apple-purple flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-foreground">Dev Chetal</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Social Links & Built With */}
          <motion.div
            className="flex flex-col items-center md:items-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-secondary rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all border border-border"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            
            {/* Built With */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-apple-pink fill-apple-pink animate-pulse" />
              <span>using</span>
              <span className="text-foreground font-medium">React + TS + Tailwind</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
