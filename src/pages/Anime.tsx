import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Tv, Calendar, Search } from 'lucide-react';

interface Anime {
  id: number;
  title: string;
  japaneseTitle: string;
  image: string;
  rating: number;
  status: 'watching' | 'completed' | 'planning' | 'favorite';
  episodes: number;
  year: number;
  genres: string[];
  description: string;
  review?: string;
}

const animeList: Anime[] = [
  {
    id: 1,
    title: 'Attack on Titan',
    japaneseTitle: '進撃の巨人',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    rating: 10,
    status: 'favorite',
    episodes: 87,
    year: 2013,
    genres: ['Action', 'Drama', 'Fantasy'],
    description: 'Humanity fights for survival against giant humanoid Titans.',
    review: 'A masterpiece of storytelling. The plot twists, character development, and world-building are unmatched. The final season delivers an emotional conclusion that stays with you.',
  },
  {
    id: 2,
    title: 'Steins;Gate',
    japaneseTitle: 'シュタインズ・ゲート',
    image: 'https://cdn.myanimelist.net/images/anime/5/73199.jpg',
    rating: 10,
    status: 'favorite',
    episodes: 24,
    year: 2011,
    genres: ['Sci-Fi', 'Thriller', 'Drama'],
    description: 'A mad scientist discovers time travel and faces the consequences.',
    review: 'The perfect sci-fi thriller. Starts slow but becomes an absolute rollercoaster. The time travel mechanics are brilliantly executed.',
  },
  {
    id: 3,
    title: 'One Piece',
    japaneseTitle: 'ワンピース',
    image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    rating: 9,
    status: 'watching',
    episodes: 1000,
    year: 1999,
    genres: ['Adventure', 'Action', 'Comedy'],
    description: 'Pirates search for the ultimate treasure in a vast ocean world.',
    review: 'An epic adventure that keeps getting better. The world-building is incredible, and the character development over 1000+ episodes is remarkable.',
  },
  {
    id: 4,
    title: 'Death Note',
    japaneseTitle: 'デスノート',
    image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    rating: 9,
    status: 'completed',
    episodes: 37,
    year: 2006,
    genres: ['Psychological', 'Thriller', 'Supernatural'],
    description: 'A high school student gains the power to kill with a notebook.',
    review: 'The ultimate battle of wits. Light and L\'s cat-and-mouse game is gripping from start to finish.',
  },
  {
    id: 5,
    title: 'Fullmetal Alchemist: Brotherhood',
    japaneseTitle: '鋼の錬金術師',
    image: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
    rating: 10,
    status: 'favorite',
    episodes: 64,
    year: 2009,
    genres: ['Action', 'Adventure', 'Drama'],
    description: 'Two brothers search for the Philosopher\'s Stone to restore their bodies.',
    review: 'The perfect anime. Incredible story, memorable characters, and flawless pacing. Every episode matters.',
  },
  {
    id: 6,
    title: 'Demon Slayer',
    japaneseTitle: '鬼滅の刃',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    rating: 8,
    status: 'completed',
    episodes: 26,
    year: 2019,
    genres: ['Action', 'Supernatural', 'Drama'],
    description: 'A boy becomes a demon slayer to cure his sister.',
    review: 'Stunning animation by Ufotable. The fight scenes are breathtaking, and the emotional moments hit hard.',
  },
  {
    id: 7,
    title: 'Cyberpunk: Edgerunners',
    japaneseTitle: 'サイバーパンク',
    image: 'https://cdn.myanimelist.net/images/anime/1818/126435.jpg',
    rating: 9,
    status: 'completed',
    episodes: 10,
    year: 2022,
    genres: ['Sci-Fi', 'Action', 'Drama'],
    description: 'A street kid tries to survive in a tech-obsessed city.',
    review: 'Trigger at their best. A visually stunning tragedy that perfectly captures the cyberpunk aesthetic.',
  },
  {
    id: 8,
    title: 'Chainsaw Man',
    japaneseTitle: 'チェンソーマン',
    image: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
    rating: 9,
    status: 'watching',
    episodes: 12,
    year: 2022,
    genres: ['Action', 'Supernatural', 'Horror'],
    description: 'A devil hunter merges with his devil pet to fight demons.',
    review: 'Raw, chaotic, and unexpectedly emotional. MAPPA delivered an incredible adaptation.',
  },
  {
    id: 9,
    title: 'Jujutsu Kaisen',
    japaneseTitle: '呪術廻戦',
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
    rating: 8,
    status: 'watching',
    episodes: 24,
    year: 2020,
    genres: ['Action', 'Supernatural'],
    description: 'A student joins a school of jujutsu sorcerers.',
    review: 'Modern shonen done right. Great animation, interesting power system, and memorable characters.',
  },
  {
    id: 10,
    title: 'Vinland Saga',
    japaneseTitle: 'ヴィンランド・サガ',
    image: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
    rating: 9,
    status: 'completed',
    episodes: 24,
    year: 2019,
    genres: ['Action', 'Adventure', 'Drama'],
    description: 'A Viking warrior seeks revenge for his father\'s death.',
    review: 'A mature, historically-inspired epic. The character arc of Thorfinn is one of the best in anime.',
  },
  {
    id: 11,
    title: 'Mob Psycho 100',
    japaneseTitle: 'モブサイコ100',
    image: 'https://cdn.myanimelist.net/images/anime/8/80356.jpg',
    rating: 9,
    status: 'favorite',
    episodes: 25,
    year: 2016,
    genres: ['Action', 'Supernatural', 'Comedy'],
    description: 'A powerful psychic tries to live a normal life.',
    review: 'ONE\'s storytelling shines. A perfect blend of comedy, action, and genuine emotional depth.',
  },
  {
    id: 12,
    title: 'Spy x Family',
    japaneseTitle: 'スパイファミリー',
    image: 'https://cdn.myanimelist.net/images/anime/1441/122795.jpg',
    rating: 8,
    status: 'watching',
    episodes: 25,
    year: 2022,
    genres: ['Action', 'Comedy', 'Slice of Life'],
    description: 'A spy creates a fake family for a mission.',
    review: 'Wholesome and hilarious. Anya is an absolute treasure, and the family dynamic is heartwarming.',
  },
];

const filters = ['All', 'Favorites', 'Watching', 'Completed', 'Planning'];

export default function Anime() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  const filteredAnime = animeList.filter((anime) => {
    const matchesFilter = activeFilter === 'All' || 
      (activeFilter === 'Favorites' && anime.status === 'favorite') ||
      anime.status.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anime.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: animeList.length,
    watching: animeList.filter(a => a.status === 'watching').length,
    completed: animeList.filter(a => a.status === 'completed').length,
    favorites: animeList.filter(a => a.status === 'favorite').length,
    avgRating: (animeList.reduce((acc, a) => acc + a.rating, 0) / animeList.length).toFixed(1),
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Tv className="w-8 h-8 text-pink-500" />
              <span className="text-pink-500 font-medium">Anime Corner</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              My <span className="text-gradient-accent">Anime</span> Journey
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A collection of stories that have inspired, entertained, and moved me. 
              These are the worlds I've explored and the characters I've grown with.
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
              <p className="text-sm text-gray-500">Total</p>
            </div>
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-green-500">{stats.watching}</p>
              <p className="text-sm text-gray-500">Watching</p>
            </div>
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-blue-500">{stats.completed}</p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-pink-500">{stats.favorites}</p>
              <p className="text-sm text-gray-500">Favorites</p>
            </div>
            <div className="p-4 bg-card border border-white/10 rounded-2xl text-center">
              <p className="text-3xl font-bold text-yellow-500">{stats.avgRating}</p>
              <p className="text-sm text-gray-500">Avg Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search anime or genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                    activeFilter === filter
                      ? 'bg-pink-500 text-white'
                      : 'bg-card border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anime Grid */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {filteredAnime.map((anime, index) => (
              <motion.div
                key={anime.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedAnime(anime)}
              >
                <div className="relative bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all hover:-translate-y-1">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={anime.image}
                      alt={anime.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        anime.status === 'favorite' ? 'bg-pink-500 text-white' :
                        anime.status === 'watching' ? 'bg-green-500 text-white' :
                        anime.status === 'completed' ? 'bg-blue-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {anime.status === 'favorite' ? '★ Favorite' : anime.status}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-white font-medium">{anime.rating}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-1 line-clamp-1 group-hover:text-pink-500 transition-colors">
                      {anime.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{anime.japaneseTitle}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{anime.episodes} eps</span>
                      <span>{anime.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {anime.genres.slice(0, 2).map((genre) => (
                        <span key={genre} className="px-2 py-0.5 text-xs text-gray-500 bg-white/5 rounded">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Anime Detail Modal */}
      {selectedAnime && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedAnime(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-white/10 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedAnime.image}
                alt={selectedAnime.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <button
                onClick={() => setSelectedAnime(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  selectedAnime.status === 'favorite' ? 'bg-pink-500 text-white' :
                  selectedAnime.status === 'watching' ? 'bg-green-500 text-white' :
                  selectedAnime.status === 'completed' ? 'bg-blue-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {selectedAnime.status === 'favorite' ? '★ Favorite' : selectedAnime.status}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-white font-medium">{selectedAnime.rating}/10</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">{selectedAnime.title}</h2>
              <p className="text-gray-500 mb-4">{selectedAnime.japaneseTitle}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Tv className="w-4 h-4" /> {selectedAnime.episodes} episodes
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {selectedAnime.year}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedAnime.genres.map((genre) => (
                  <span key={genre} className="px-3 py-1 text-sm text-gray-300 bg-white/5 rounded-full">
                    {genre}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mb-4">{selectedAnime.description}</p>

              {selectedAnime.review && (
                <div className="p-4 bg-pink-500/10 border border-pink-500/20 rounded-xl">
                  <p className="text-sm text-pink-400 font-medium mb-2">My Thoughts</p>
                  <p className="text-gray-300 text-sm">{selectedAnime.review}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
