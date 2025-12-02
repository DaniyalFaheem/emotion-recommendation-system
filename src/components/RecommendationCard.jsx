'use client';

import { motion } from 'framer-motion';
import InteractiveButton from './InteractiveButton';

/**
 * RecommendationCard Component
 * Displays a single recommendation item (song, book, poetry, or playlist)
 * 
 * @param {Object} props
 * @param {string} props.type - Type of recommendation: 'song', 'book', 'poetry', 'playlist'
 * @param {Object} props.item - The recommendation item data
 * @param {number} props.index - Index for staggered animations
 */
export default function RecommendationCard({ type, item, index = 0 }) {
  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  // Render based on type
  const renderContent = () => {
    switch (type) {
      case 'song':
        return (
          <div className="p-5">
            {/* Song icon */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
              <span className="text-2xl">🎵</span>
            </div>
            
            {/* Song info */}
            <h4 className="font-bold text-white text-lg mb-1 line-clamp-2">
              {item.title}
            </h4>
            <p className="text-white/60 text-sm mb-3">{item.artist}</p>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>

            {/* Action button */}
            <InteractiveButton type="song" url={item.youtubeUrl} label="Play on YouTube" />
          </div>
        );

      case 'book':
        return (
          <div className="p-5">
            {/* Book cover placeholder */}
            <div
              className={`w-full h-32 rounded-lg bg-gradient-to-br ${item.coverColor || 'from-gray-600 to-gray-800'} flex items-center justify-center mb-4`}
            >
              <span className="text-4xl">📚</span>
            </div>

            {/* Book info */}
            <h4 className="font-bold text-white text-lg mb-1 line-clamp-2">
              {item.title}
            </h4>
            <p className="text-white/60 text-sm mb-4">by {item.author}</p>

            {/* Action button */}
            <InteractiveButton type="book" content={item.summary} label="Read Summary" />
          </div>
        );

      case 'poetry':
        return (
          <div className="p-5">
            {/* Poetry icon */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4">
              <span className="text-2xl">📜</span>
            </div>

            {/* Poetry info */}
            <h4 className="font-bold text-white text-lg mb-1 line-clamp-2">
              {item.title}
            </h4>
            <p className="text-white/60 text-sm mb-4">by {item.poet}</p>

            {/* Action button */}
            <InteractiveButton type="poetry" content={item.text} label="Read Poetry" />
          </div>
        );

      case 'playlist':
        return (
          <div className="p-5">
            {/* Playlist icon */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mb-4">
              <span className="text-2xl">🎬</span>
            </div>

            {/* Playlist info */}
            <h4 className="font-bold text-white text-lg mb-1 line-clamp-2">
              {item.title}
            </h4>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>

            {/* Action button */}
            <InteractiveButton type="playlist" url={item.youtubeUrl} label="Open Playlist" />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="glass rounded-xl overflow-hidden card-hover"
      role="article"
      aria-label={`${type} recommendation: ${item.title}`}
    >
      {renderContent()}
    </motion.div>
  );
}
