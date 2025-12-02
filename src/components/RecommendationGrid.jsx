'use client';

import { motion, AnimatePresence } from 'framer-motion';
import RecommendationCard from './RecommendationCard';
import { getRecommendationsForEmotion, getEmotionConfig } from '../utils/recommendationEngine';

/**
 * RecommendationGrid Component
 * Displays a grid of recommendations based on detected emotion
 * Organized into 4 categories: Songs, Books, Poetry, Playlists
 * 
 * @param {Object} props
 * @param {string} props.emotion - The detected emotion identifier
 */
export default function RecommendationGrid({ emotion }) {
  const recommendations = getRecommendationsForEmotion(emotion);
  const config = getEmotionConfig(emotion);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Section data for rendering
  const sections = [
    {
      id: 'songs',
      title: '🎵 Songs',
      type: 'song',
      items: recommendations.songs || [],
      description: 'Music to match your mood',
    },
    {
      id: 'books',
      title: '📚 Books',
      type: 'book',
      items: recommendations.books || [],
      description: 'Reading recommendations',
    },
    {
      id: 'poetry',
      title: '📖 Poetry',
      type: 'poetry',
      items: recommendations.poetry || [],
      description: 'Verses for your soul',
    },
    {
      id: 'playlists',
      title: '🎬 Playlists',
      type: 'playlist',
      items: recommendations.playlists || [],
      description: 'Curated collections',
    },
  ];

  if (!emotion) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">
          Start the camera to get personalized recommendations
        </p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={emotion}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
        role="region"
        aria-label="Personalized Recommendations"
      >
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <h2 className={`text-3xl font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent mb-2`}>
            Recommendations for You
          </h2>
          <p className="text-gray-400">
            {config.description}
          </p>
        </motion.div>

        {/* Recommendation sections */}
        {sections.map((section) => (
          <motion.section
            key={section.id}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
            aria-labelledby={`${section.id}-heading`}
          >
            {/* Section header */}
            <motion.div variants={headerVariants} className="flex items-center gap-3 mb-4">
              <h3
                id={`${section.id}-heading`}
                className="text-2xl font-bold text-white"
              >
                {section.title}
              </h3>
              <span className="text-gray-500 text-sm">
                {section.description}
              </span>
            </motion.div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {section.items.map((item, index) => (
                <RecommendationCard
                  key={`${section.type}-${index}`}
                  type={section.type}
                  item={item}
                  index={index}
                />
              ))}
            </div>

            {/* Empty state */}
            {section.items.length === 0 && (
              <div className="glass rounded-xl p-8 text-center">
                <p className="text-gray-400">
                  No {section.id} recommendations available for this emotion.
                </p>
              </div>
            )}
          </motion.section>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
