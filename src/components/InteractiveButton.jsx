'use client';

import { useState } from 'react';
import { Play, BookOpen, Music2, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * InteractiveButton Component
 * Provides 4 types of interactive actions for recommendations
 * 
 * @param {Object} props
 * @param {string} props.type - Button type: 'song', 'book', 'poetry', 'playlist'
 * @param {string} props.url - URL for external links (song/playlist)
 * @param {string} props.content - Expandable content (book summary/poetry text)
 * @param {string} props.label - Button label
 * @param {string} props.className - Additional CSS classes
 */
export default function InteractiveButton({
  type,
  url,
  content,
  label,
  className = '',
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Configuration for each button type
  const buttonConfig = {
    song: {
      icon: Play,
      bg: 'bg-green-500 hover:bg-green-600',
      label: label || 'Play Song',
      action: 'external',
    },
    book: {
      icon: BookOpen,
      bg: 'bg-blue-500 hover:bg-blue-600',
      label: label || 'Read Summary',
      action: 'expand',
    },
    poetry: {
      icon: Music2,
      bg: 'bg-purple-500 hover:bg-purple-600',
      label: label || 'Read Poetry',
      action: 'expand',
    },
    playlist: {
      icon: ExternalLink,
      bg: 'bg-red-500 hover:bg-red-600',
      label: label || 'Open Playlist',
      action: 'external',
    },
  };

  const config = buttonConfig[type] || buttonConfig.song;
  const Icon = config.icon;

  // Handle button click
  const handleClick = () => {
    if (config.action === 'external' && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (config.action === 'expand') {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`${className}`}>
      {/* Main button */}
      <button
        onClick={handleClick}
        className={`
          w-full flex items-center justify-center gap-2 px-4 py-2.5
          rounded-lg font-medium text-white text-sm
          transition-all duration-300 transform hover:scale-105
          ${config.bg}
        `}
        aria-expanded={config.action === 'expand' ? isExpanded : undefined}
        aria-label={config.label}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
        <span>{config.label}</span>
        {config.action === 'expand' && (
          isExpanded ? (
            <ChevronUp className="w-4 h-4 ml-auto" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-auto" aria-hidden="true" />
          )
        )}
      </button>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && content && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 p-4 bg-white/10 rounded-lg text-white/90 text-sm leading-relaxed whitespace-pre-line">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
