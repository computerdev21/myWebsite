import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, Tv, Code2, Puzzle, Compass, Mountain, 
  Star, Clock
} from 'lucide-react';

interface HobbyItem {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  rating?: number;
  hours?: number;
  description: string;
  tags?: string[];
}

const hobbyCategories = [
  {
    id: 'games',
    title: 'Gaming',
    icon: Gamepad2,
    color: 'from-green-500 to-emerald-500',
    description: 'Virtual worlds I explore',
    items: [
      { id: 1, title: 'Elden Ring', subtitle: 'Action RPG', rating: 10, hours: 120, description: 'An open-world masterpiece. The exploration and combat are unmatched.', tags: ['Souls-like', 'Open World'] },
      { id: 2, title: 'Cyberpunk 2077', subtitle: 'Open World RPG', rating: 9, hours: 80, description: 'After the updates, a genuinely great RPG with incredible atmosphere.', tags: ['Sci-Fi', 'Story-rich'] },
      { id: 3, title: 'Valorant', subtitle: 'Tactical FPS', rating: 8, hours: 200, description: 'Tactical shooter with unique agent abilities. Competitive and intense.', tags: ['FPS', 'Competitive'] },
      { id: 4, title: 'The Witcher 3', subtitle: 'Open World RPG', rating: 10, hours: 150, description: 'One of the greatest RPGs ever made. Unforgettable stories.', tags: ['Fantasy', 'Story-rich'] },
      { id: 5, title: 'Hades', subtitle: 'Roguelike', rating: 10, hours: 60, description: 'The perfect roguelike. Incredible gameplay loop and story.', tags: ['Roguelike', 'Action'] },
      { id: 6, title: 'Rocket League', subtitle: 'Sports', rating: 8, hours: 100, description: 'Soccer with cars. Simple concept, incredibly deep skill ceiling.', tags: ['Sports', 'Multiplayer'] },
    ] as HobbyItem[],
  },
  {
    id: 'anime',
    title: 'Anime',
    icon: Tv,
    color: 'from-pink-500 to-rose-500',
    description: 'Stories that inspire me',
    items: [
      { id: 1, title: 'Attack on Titan', subtitle: '進撃の巨人', rating: 10, description: 'A masterpiece of storytelling. The plot twists and world-building are unmatched.', tags: ['Action', 'Drama'] },
      { id: 2, title: 'Steins;Gate', subtitle: 'シュタインズ・ゲート', rating: 10, description: 'The perfect sci-fi thriller. Time travel done brilliantly.', tags: ['Sci-Fi', 'Thriller'] },
      { id: 3, title: 'One Piece', subtitle: 'ワンピース', rating: 9, description: 'An epic adventure that keeps getting better. Incredible world-building.', tags: ['Adventure', 'Action'] },
      { id: 4, title: 'Death Note', subtitle: 'デスノート', rating: 9, description: 'The ultimate battle of wits. Light vs L is gripping from start to finish.', tags: ['Psychological', 'Thriller'] },
      { id: 5, title: 'Fullmetal Alchemist: Brotherhood', subtitle: '鋼の錬金術師', rating: 10, description: 'The perfect anime. Incredible story, memorable characters.', tags: ['Action', 'Drama'] },
      { id: 6, title: 'Cyberpunk: Edgerunners', subtitle: 'サイバーパンク', rating: 9, description: 'Trigger at their best. Visually stunning cyberpunk tragedy.', tags: ['Sci-Fi', 'Action'] },
    ] as HobbyItem[],
  },
  {
    id: 'dev',
    title: 'Side Projects',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    description: 'Things I build for fun',
    items: [
      { id: 1, title: 'Personal Portfolio', subtitle: 'This website!', description: 'Built with React, TypeScript, and lots of coffee. Always evolving.', tags: ['React', 'TypeScript'] },
      { id: 2, title: 'CLI Tools', subtitle: 'Automation scripts', description: 'Building command-line tools to automate repetitive tasks.', tags: ['Node.js', 'Python'] },
      { id: 3, title: 'Open Source', subtitle: 'Contributions', description: 'Contributing to projects I use and believe in.', tags: ['GitHub', 'Community'] },
      { id: 4, title: 'Experimentation', subtitle: 'New tech', description: 'Trying out new frameworks, libraries, and paradigms.', tags: ['Learning', 'Exploring'] },
    ] as HobbyItem[],
  },
  {
    id: 'boardgames',
    title: 'Board Games',
    icon: Puzzle,
    color: 'from-orange-500 to-amber-500',
    description: 'Analog fun with friends',
    items: [
      { id: 1, title: 'Catan', subtitle: 'Strategy', rating: 8, description: 'The classic resource trading game. Always a hit with friends.', tags: ['Strategy', 'Trading'] },
      { id: 2, title: 'Wingspan', subtitle: 'Strategy', rating: 9, description: 'Beautiful game about bird watching. Relaxing and strategic.', tags: ['Strategy', 'Nature'] },
      { id: 3, title: 'Codenames', subtitle: 'Party', rating: 9, description: 'Word association game that always leads to laughs.', tags: ['Party', 'Word'] },
      { id: 4, title: 'Ticket to Ride', subtitle: 'Strategy', rating: 8, description: 'Build train routes across the world. Easy to learn, fun to master.', tags: ['Strategy', 'Family'] },
      { id: 5, title: 'Azul', subtitle: 'Abstract', rating: 9, description: 'Beautiful tile-laying game with simple rules and deep strategy.', tags: ['Abstract', 'Puzzle'] },
    ] as HobbyItem[],
  },
  {
    id: 'exploring',
    title: 'Exploring',
    icon: Compass,
    color: 'from-purple-500 to-violet-500',
    description: 'Discovering new places',
    items: [
      { id: 1, title: 'Coffee Shops', subtitle: 'Local gems', description: 'Finding the best coffee spots in every city I visit.', tags: ['Coffee', 'Local'] },
      { id: 2, title: 'Tech Meetups', subtitle: 'Community', description: 'Meeting fellow developers and learning from the community.', tags: ['Networking', 'Learning'] },
      { id: 3, title: 'Museums', subtitle: 'Culture', description: 'Exploring art, history, and science museums.', tags: ['Culture', 'Learning'] },
      { id: 4, title: 'Bookstores', subtitle: 'Literary', description: 'Getting lost in shelves of books and discovering new reads.', tags: ['Reading', 'Discovery'] },
    ] as HobbyItem[],
  },
  {
    id: 'adventuring',
    title: 'Adventuring',
    icon: Mountain,
    color: 'from-red-500 to-orange-500',
    description: 'Outdoor experiences',
    items: [
      { id: 1, title: 'Hiking', subtitle: 'Nature trails', description: 'Exploring trails and enjoying the peace of nature.', tags: ['Nature', 'Fitness'] },
      { id: 2, title: 'Road Trips', subtitle: 'Spontaneous', description: 'Hitting the road with no particular destination in mind.', tags: ['Travel', 'Freedom'] },
      { id: 3, title: 'Camping', subtitle: 'Under the stars', description: 'Disconnecting from tech and reconnecting with nature.', tags: ['Nature', 'Camping'] },
      { id: 4, title: 'Photography', subtitle: 'Capturing moments', description: 'Taking photos of interesting places and moments.', tags: ['Creative', 'Memories'] },
    ] as HobbyItem[],
  },
];

export default function Hobbies() {
  const [activeCategory, setActiveCategory] = useState('games');
  const [selectedItem, setSelectedItem] = useState<HobbyItem | null>(null);

  const currentCategory = hobbyCategories.find((c) => c.id === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Beyond <span className="text-gradient">Code</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When I'm not building things, you'll find me exploring virtual worlds, 
              watching anime, playing board games, or adventuring outdoors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-secondary/30 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {hobbyCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-foreground text-background'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {currentCategory && (
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentCategory.color}`}>
                    <currentCategory.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{currentCategory.title}</h2>
                    <p className="text-muted-foreground">{currentCategory.description}</p>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCategory.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="bg-card border border-border rounded-2xl p-6 hover:border-apple-blue/30 hover:shadow-soft transition-all hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-apple-blue transition-colors">
                              {item.title}
                            </h3>
                            {item.subtitle && (
                              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                            )}
                          </div>
                          {item.rating && (
                            <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-full">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-xs font-medium">{item.rating}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags?.slice(0, 2).map((tag) => (
                              <span key={tag} className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {item.hours && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {item.hours}h
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Item Detail Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg bg-card border border-border rounded-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>

            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-1">{selectedItem.title}</h3>
              {selectedItem.subtitle && (
                <p className="text-apple-blue">{selectedItem.subtitle}</p>
              )}
            </div>

            <div className="flex items-center gap-4 mb-4">
              {selectedItem.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-foreground font-medium">{selectedItem.rating}/10</span>
                </div>
              )}
              {selectedItem.hours && (
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {selectedItem.hours} hours
                </div>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{selectedItem.description}</p>

            <div className="flex flex-wrap gap-2">
              {selectedItem.tags?.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm text-muted-foreground bg-secondary rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
