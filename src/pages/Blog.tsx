import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    slug: 'agentic-ai',
    title: "Most companies aren't ready for agentic AI — here's the infrastructure debt they're ignoring",
    author: 'Dev Chetal',
    date: 'May 7, 2026',
    readTime: '8 min read',
    excerpt: "Everyone's racing to deploy AI agents. Almost nobody has the infrastructure to actually run them in production without things quietly breaking at 2am. Here's what that infrastructure debt actually looks like.",
    image: '/blog-1.png'
  }
];

export default function Blog() {
  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Writing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-apple-purple">Thoughts</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights on engineering, AI infrastructure, and building robust systems in production.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-apple-blue/30 h-full flex flex-col">
                  {post.image && (
                    <div className="aspect-[16/9] w-full overflow-hidden border-b border-border/50 relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime="2026-05-07">{post.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-apple-blue transition-colors line-clamp-3">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sm font-semibold text-foreground group-hover:text-apple-blue transition-colors mt-auto">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
