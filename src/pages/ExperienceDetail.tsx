import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { getExperienceById, type Experience } from '../lib/data';

export default function ExperienceDetail() {
  const { id } = useParams<{ id: string }>();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (id) {
        const data = await getExperienceById(id);
        setExperience(data);
      }
      setLoading(false);
    }
    loadData();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen pt-24 flex items-center justify-center">Loading...</div>;
  }

  if (!experience) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Experience Not Found</h1>
          <Link to="/" className="text-apple-blue hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-apple-blue to-apple-purple opacity-10 blur-[150px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <motion.div
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {experience.current && (
              <span className="inline-block px-3 py-1 text-sm font-medium text-green-500 bg-green-500/10 rounded-full mb-4">
                Current Role
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">{experience.role}</h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground mt-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-apple-blue" />
                <span className="text-lg font-medium text-foreground">{experience.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{experience.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-neutral dark:prose-invert max-w-none"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{experience.description}</p>

            {experience.longDescription && (
              <div className="mt-8 space-y-4">
                {experience.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {experience.highlights && experience.highlights.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Contributions & Highlights</h2>
              <div className="grid gap-4">
                {experience.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-apple-blue flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
