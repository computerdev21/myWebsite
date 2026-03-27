import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Clock, Star, Zap, Target, Sword, Shield, Brain, Car, Plane } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  image: string;
  platform: string;
  hours: number;
  rating: number;
  status: 'playing' | 'completed' | 'backlog' | 'favorite';
  genre: string;
  achievements?: string;
  description: string;
}

const games: Game[] = [
  {
    id: 1,
    title: 'Elden Ring',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg',
    platform: 'PC',
    hours: 120,
    rating: 10,
    status: 'favorite',
    genre: 'Action RPG',
    achievements: '85%',
    description: 'An open-world masterpiece by FromSoftware. The exploration, combat, and world-building are unmatched.',
  },
  {
    id: 2,
    title: 'Cyberpunk 2077',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg',
    platform: 'PC',
    hours: 80,
    rating: 9,
    status: 'completed',
    genre: 'Open World RPG',
    achievements: '60%',
    description: 'After the updates, a genuinely great RPG with an incredible story and atmosphere.',
  },
  {
    id: 3,
    title: 'Valorant',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2139460/header.jpg',
    platform: 'PC',
    hours: 200,
    rating: 8,
    status: 'playing',
    genre: 'FPS',
    description: 'Tactical shooter with unique agent abilities. The competitive scene is intense.',
  },
  {
    id: 4,
    title: 'The Witcher 3',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg',
    platform: 'PC',
    hours: 150,
    rating: 10,
    status: 'favorite',
    genre: 'Open World RPG',
    achievements: '90%',
    description: 'One of the greatest RPGs ever made. The stories, characters, and world are unforgettable.',
  },
  {
    id: 5,
    title: 'Hades',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg',
    platform: 'PC',
    hours: 60,
    rating: 10,
    status: 'favorite',
    genre: 'Roguelike',
    achievements: '95%',
    description: 'The perfect roguelike. Incredible gameplay loop, story, and art direction.',
  },
  {
    id: 6,
    title: 'Rocket League',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg',
    platform: 'PC',
    hours: 100,
    rating: 8,
    status: 'playing',
    genre: 'Sports',
    description: 'Soccer with cars. Simple concept, incredibly deep skill ceiling.',
  },
  {
    id: 7,
    title: 'Red Dead Redemption 2',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg',
    platform: 'PC',
    hours: 90,
    rating: 9,
    status: 'completed',
    genre: 'Open World',
    achievements: '45%',
    description: 'A living, breathing world with an emotional story. Rockstar at their best.',
  },
  {
    id: 8,
    title: 'Apex Legends',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg',
    platform: 'PC',
    hours: 180,
    rating: 8,
    status: 'playing',
    genre: 'Battle Royale',
    description: 'Fast-paced battle royale with excellent movement and team dynamics.',
  },
  {
    id: 9,
    title: 'Dark Souls III',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg',
    platform: 'PC',
    hours: 70,
    rating: 9,
    status: 'completed',
    genre: 'Action RPG',
    achievements: '70%',
    description: 'The culmination of the Souls series. Challenging but fair combat.',
  },
  {
    id: 10,
    title: 'Civilization VI',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg',
    platform: 'PC',
    hours: 300,
    rating: 9,
    status: 'playing',
    genre: 'Strategy',
    description: 'Just one more turn... The ultimate 4X strategy game.',
  },
  {
    id: 11,
    title: 'Sekiro: Shadows Die Twice',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg',
    platform: 'PC',
    hours: 50,
    rating: 9,
    status: 'completed',
    genre: 'Action',
    achievements: '80%',
    description: 'The most challenging FromSoftware game. The combat system is pure perfection.',
  },
  {
    id: 12,
    title: 'Microsoft Flight Simulator',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1250410/header.jpg',
    platform: 'PC',
    hours: 40,
    rating: 8,
    status: 'playing',
    genre: 'Simulation',
    description: 'The most realistic flight sim ever. Flying over real-world locations is magical.',
  },
];

const filters = ['All', 'Favorites', 'Playing', 'Completed', 'Backlog'];

const genreIcons: Record<string, any> = {
  'Action RPG': Sword,
  'Open World RPG': Shield,
  'FPS': Target,
  'Roguelike': Zap,
  'Sports': Trophy,
  'Battle Royale': Gamepad2,
  'Strategy': Brain,
  'Action': Sword,
  'Simulation': Plane,
  'Open World': Car,
};

export default function Games() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = games.filter((game) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Favorites') return game.status === 'favorite';
    return game.status.toLowerCase() === activeFilter.toLowerCase();
  });

  const stats = {
    total: games.length,
    playing: games.filter(g => g.status === 'playing').length,
    completed: games.filter(g => g.status === 'completed').length,
    favorites: games.filter(g => g.status === 'favorite').length,
    totalHours: games.reduce((acc, g) => acc + g.hours, 0),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="relative py-16 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500 to-cyan-500 opacity-20 blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-8 h-8 text-green-500" />
              <span className="text-green-500 font-medium">Gaming Hub</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              My <span className="text-gradient-accent">Gaming</span> Library
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              From epic RPGs to competitive shooters, these are the worlds I've explored 
              and the challenges I've conquered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-apple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-white">{stats.total}</p>
              <p className="text-sm text-gray-500">Games</p>
            </div>
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-green-500">{stats.playing}</p>
              <p className="text-sm text-gray-500">Playing</p>
            </div>
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-blue-500">{stats.completed}</p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-yellow-500">{stats.favorites}</p>
              <p className="text-sm text-gray-500">Favorites</p>
            </div>
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-purple-500">{stats.totalHours}+</p>
              <p className="text-sm text-gray-500">Hours</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex gap-2 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all ${
                  activeFilter === filter
                    ? 'bg-green-500 text-white'
                    : 'bg-card border border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {filteredGames.map((game, index) => {
              const GenreIcon = genreIcons[game.genre] || Gamepad2;
              return (
                <motion.div
                  key={game.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedGame(game)}
                >
                  <div className="relative bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all hover:-translate-y-1">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          game.status === 'favorite' ? 'bg-yellow-500 text-black' :
                          game.status === 'playing' ? 'bg-green-500 text-white' :
                          game.status === 'completed' ? 'bg-blue-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          {game.status === 'favorite' ? '★' : game.status}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-white font-medium">{game.rating}</span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-1 line-clamp-1 group-hover:text-green-500 transition-colors">
                        {game.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {game.hours}h
                        </span>
                        <span className="flex items-center gap-1">
                          <GenreIcon className="w-3 h-3" /> {game.genre}
                        </span>
                      </div>

                      {game.achievements && (
                        <div className="flex items-center gap-1 text-xs text-green-400">
                          <Trophy className="w-3 h-3" />
                          {game.achievements} achievements
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Game Detail Modal */}
      {selectedGame && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedGame(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-white/10 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  selectedGame.status === 'favorite' ? 'bg-yellow-500 text-black' :
                  selectedGame.status === 'playing' ? 'bg-green-500 text-white' :
                  selectedGame.status === 'completed' ? 'bg-blue-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {selectedGame.status === 'favorite' ? '★ Favorite' : selectedGame.status}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-white font-medium">{selectedGame.rating}/10</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">{selectedGame.title}</h2>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-xl text-center">
                  <p className="text-lg font-bold text-white">{selectedGame.hours}h</p>
                  <p className="text-xs text-gray-500">Played</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl text-center">
                  <p className="text-lg font-bold text-white">{selectedGame.platform}</p>
                  <p className="text-xs text-gray-500">Platform</p>
                </div>
                {selectedGame.achievements && (
                  <div className="p-3 bg-white/5 rounded-xl text-center">
                    <p className="text-lg font-bold text-green-400">{selectedGame.achievements}</p>
                    <p className="text-xs text-gray-500">Achievements</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm text-gray-300 bg-white/5 rounded-full">
                  {selectedGame.genre}
                </span>
              </div>

              <p className="text-gray-400">{selectedGame.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
