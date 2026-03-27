import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles, Code2, Briefcase, User, FileText, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '/', icon: null },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Experience', href: '/experience', icon: User },
  { name: 'Resume', href: '/resume', icon: FileText },
  { name: 'Admin', href: '/admin', icon: Settings },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => (href === '/' ? location.pathname === '/' : location.pathname.startsWith(href));

  return (
    <>
      <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-soft' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.div className="w-10 h-10 rounded-xl bg-gradient-to-r from-apple-blue to-apple-purple flex items-center justify-center shadow-lg" whileHover={{ rotate: 5, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Code2 className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-lg font-semibold">Dev Chetal</span>
            </Link>

            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-secondary/50 rounded-full p-1 border border-border/50">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${isActive(link.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                    {link.name}
                    {isActive(link.href) && <motion.div layoutId="activeNav" className="absolute inset-0 bg-card rounded-full -z-10 border border-border shadow-sm" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <motion.button onClick={toggleTheme} className="p-2.5 rounded-full bg-secondary border border-border/50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Toggle theme">
                <AnimatePresence mode="wait" initial={false}>{theme === 'dark' ? <motion.div key="sun"><Sun className="w-5 h-5" /></motion.div> : <motion.div key="moon"><Moon className="w-5 h-5" /></motion.div>}</AnimatePresence>
              </motion.button>
              <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-apple-blue to-apple-purple rounded-full btn-glow"><Sparkles className="w-4 h-4" />Case Studies</Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <motion.button onClick={toggleTheme} className="p-2.5 rounded-full bg-secondary border border-border/50" whileTap={{ scale: 0.95 }}>{theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</motion.button>
              <motion.button className="p-2.5 rounded-full bg-secondary border border-border/50" onClick={() => setIsMobileMenuOpen((v) => !v)} whileTap={{ scale: 0.95 }}>{isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}</motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>{isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 md:hidden">
          <motion.div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="absolute right-0 top-0 bottom-0 w-[280px] bg-card border-l border-border shadow-2xl">
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base ${isActive(link.href) ? 'bg-apple-blue/10 text-apple-blue' : 'hover:bg-secondary'}`}>
                    {link.icon && <link.icon className="w-5 h-5" />}{link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}</AnimatePresence>
    </>
  );
}
