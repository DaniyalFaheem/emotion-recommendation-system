'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { getEmotionConfig } from '../utils/recommendationEngine';

/**
 * EmotionDisplay Component
 * Shows the detected emotion with emoji, confidence bar, and explanation
 * 
 * @param {Object} props
 * @param {string} props.emotion - The detected emotion identifier
 * @param {number} props.confidence - Confidence percentage (0-100)
 * @param {string} props.explanation - Explanation of the detection
 * @param {boolean} props.isDetecting - Whether detection is in progress
 */
export default function EmotionDisplay({ emotion, confidence, explanation, isDetecting }) {
  const config = getEmotionConfig(emotion);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for the emoji
  const emojiVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto" role="region" aria-label="Emotion Display">
      <AnimatePresence mode="wait">
        <motion.div
          key={emotion}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={`
            glass rounded-3xl p-8 text-center
            bg-gradient-to-br ${config.gradient}
            shadow-2xl
          `}
          aria-live="polite"
        >
          {/* Emoji */}
          <motion.div
            variants={emojiVariants}
            className="text-8xl mb-4 animate-float"
            role="img"
            aria-label={`${config.label} emoji`}
          >
            {config.emoji}
          </motion.div>

          {/* Emotion label */}
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
            {config.label}
          </h2>

          {/* Confidence display */}
          <div className="mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-white/80 text-lg">Confidence:</span>
              <span className="text-2xl font-bold text-white">
                {confidence}%
              </span>
            </div>

            {/* Confidence bar */}
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${confidence}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full bg-white rounded-full confidence-bar"
                role="progressbar"
                aria-valuenow={confidence}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Confidence: ${confidence}%`}
              />
            </div>

            {/* Confidence level indicator */}
            <p className="text-white/60 text-sm mt-2">
              {confidence >= 80
                ? '🎯 High confidence'
                : confidence >= 50
                ? '🔍 Moderate confidence'
                : '💭 Low confidence'}
            </p>
          </div>

          {/* Explanation */}
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-white/90 text-sm leading-relaxed">
              {explanation || config.description}
            </p>
          </div>

          {/* Detection status */}
          {isDetecting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white/70 text-xs">Analyzing expressions...</span>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* No detection state */}
      {!emotion && (
        <div className="glass rounded-3xl p-8 text-center bg-gray-900/50">
          <div className="text-6xl mb-4 opacity-50">🎭</div>
          <p className="text-gray-400">
            Start the camera to begin emotion detection
          </p>
        </div>
      )}
    </div>
  );
}
