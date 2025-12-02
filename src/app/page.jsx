'use client';

import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Github, Heart } from 'lucide-react';
import CameraFeed from '../components/CameraFeed';
import EmotionDisplay from '../components/EmotionDisplay';
import RecommendationGrid from '../components/RecommendationGrid';
import { mapExpressionsToEmotion, getSmoothedEmotion } from '../utils/recommendationEngine';

/**
 * Main Page Component
 * Orchestrates the emotion detection and recommendation system
 */
export default function Home() {
  // State for camera and emotion detection
  const [cameraActive, setCameraActive] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState(null);
  const [confidence, setConfidence] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);
  
  // Store recent emotion readings for smoothing
  const recentEmotionsRef = useRef([]);
  const maxRecentEmotions = 5;

  /**
   * Handle emotion detection from camera feed
   */
  const handleEmotionDetected = useCallback((expressions) => {
    setIsDetecting(true);

    if (!expressions) {
      // No face detected
      setExplanation('No face detected. Please position your face in front of the camera.');
      return;
    }

    // Map expressions to our emotion system
    const emotionData = mapExpressionsToEmotion(expressions);

    // Add to recent emotions for smoothing
    recentEmotionsRef.current.push(emotionData);
    if (recentEmotionsRef.current.length > maxRecentEmotions) {
      recentEmotionsRef.current.shift();
    }

    // Get smoothed emotion for more stable detection
    const smoothedEmotion = getSmoothedEmotion(recentEmotionsRef.current);

    // Update state
    setCurrentEmotion(smoothedEmotion.emotion);
    setConfidence(smoothedEmotion.confidence);
    setExplanation(smoothedEmotion.explanation);
  }, []);

  /**
   * Handle camera toggle
   */
  const handleCameraToggle = useCallback((active) => {
    setCameraActive(active);
    if (!active) {
      // Reset emotion state when camera stops
      recentEmotionsRef.current = [];
      setIsDetecting(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="pt-8 pb-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Emotion-Based Recommendations
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400" aria-hidden="true" />
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real-time emotion detection with personalized music, books, poetry, and playlist recommendations
          </p>
        </motion.div>
      </header>

      {/* Main content */}
      <main className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Detection section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
            aria-label="Emotion Detection"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Camera feed */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📷</span> Camera Feed
                </h2>
                <CameraFeed
                  onEmotionDetected={handleEmotionDetected}
                  isActive={cameraActive}
                  onToggle={handleCameraToggle}
                />
              </div>

              {/* Emotion display */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎭</span> Detected Emotion
                </h2>
                <EmotionDisplay
                  emotion={currentEmotion}
                  confidence={confidence}
                  explanation={explanation}
                  isDetecting={isDetecting && cameraActive}
                />
              </div>
            </div>
          </motion.section>

          {/* Recommendations section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Recommendations"
          >
            <RecommendationGrid emotion={currentEmotion} />
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" aria-hidden="true" />
            <span>using Next.js, face-api.js & Framer Motion</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © {new Date().getFullYear()} Emotion Recommendation System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
