/**
 * Recommendation Engine Utility
 * Maps detected emotions to personalized recommendations
 * and handles emotion classification logic
 */

import { recommendations, emotionConfig } from '../data/recommendations';

/**
 * Maps face-api.js expression labels to our emotion system
 * @param {Object} expressions - The expressions object from face-api.js
 * @returns {Object} - Object containing detected emotion, confidence, and explanation
 */
export function mapExpressionsToEmotion(expressions) {
  if (!expressions) {
    return {
      emotion: 'neutral',
      confidence: 0,
      explanation: 'No expressions detected',
    };
  }

  // Get the emotion with highest confidence from face-api.js
  const emotionEntries = Object.entries(expressions);
  const sortedEmotions = emotionEntries.sort((a, b) => b[1] - a[1]);
  const [primaryEmotion, primaryConfidence] = sortedEmotions[0];
  const confidencePercent = Math.round(primaryConfidence * 100);

  // Map face-api.js emotions to our 8 emotion categories
  // face-api.js provides: neutral, happy, sad, angry, fearful, disgusted, surprised
  let mappedEmotion = primaryEmotion;
  let explanation = '';

  switch (primaryEmotion) {
    case 'happy':
      // High confidence happy -> jolly
      if (primaryConfidence > 0.85) {
        mappedEmotion = 'jolly';
        explanation = 'Extremely positive expression detected - wide smile and raised cheeks indicating joyful mood!';
      } else {
        explanation = 'Upturned lips and raised cheeks indicate a happy expression.';
      }
      break;

    case 'sad':
      explanation = 'Downturned lips and lowered eyebrows suggest sadness.';
      break;

    case 'angry':
      explanation = 'Furrowed brows and tense facial muscles indicate anger.';
      break;

    case 'fearful':
      explanation = 'Wide eyes and raised eyebrows show signs of fear or anxiety.';
      break;

    case 'surprised':
      explanation = 'Raised eyebrows and open mouth indicate surprise.';
      break;

    case 'disgusted':
      // Map disgusted to angry as a close alternative
      mappedEmotion = 'angry';
      explanation = 'Wrinkled nose and raised upper lip detected - mapped to anger category.';
      break;

    case 'neutral':
      // High confidence neutral with some relaxation indicators -> calm
      if (primaryConfidence > 0.7) {
        // Check if secondary emotions are also low (indicating true calmness)
        const secondaryConfidence = sortedEmotions[1]?.[1] || 0;
        if (secondaryConfidence < 0.2) {
          mappedEmotion = 'calm';
          explanation = 'Relaxed facial features with minimal tension - indicating a calm, peaceful state.';
        } else {
          explanation = 'Balanced facial expression with no strong emotion dominance.';
        }
      } else {
        explanation = 'Balanced facial expression with no strong emotion dominance.';
      }
      break;

    default:
      mappedEmotion = 'neutral';
      explanation = 'Unable to classify expression clearly.';
  }

  return {
    emotion: mappedEmotion,
    confidence: confidencePercent,
    explanation,
    rawExpressions: expressions,
  };
}

/**
 * Get recommendations for a specific emotion
 * @param {string} emotion - The detected emotion
 * @returns {Object} - Recommendations for the emotion
 */
export function getRecommendationsForEmotion(emotion) {
  const emotionData = recommendations[emotion] || recommendations.neutral;
  const config = emotionConfig[emotion] || emotionConfig.neutral;

  return {
    ...emotionData,
    config,
  };
}

/**
 * Get emotion configuration
 * @param {string} emotion - The emotion identifier
 * @returns {Object} - Configuration object for the emotion
 */
export function getEmotionConfig(emotion) {
  return emotionConfig[emotion] || emotionConfig.neutral;
}

/**
 * Calculate a blended emotion state based on multiple expression readings
 * Useful for smoothing out rapid changes in detection
 * @param {Array} recentEmotions - Array of recent emotion readings
 * @returns {Object} - Smoothed emotion state
 */
export function getSmoothedEmotion(recentEmotions) {
  if (!recentEmotions || recentEmotions.length === 0) {
    return {
      emotion: 'neutral',
      confidence: 0,
      explanation: 'Waiting for detection...',
    };
  }

  // Count occurrences of each emotion
  const emotionCounts = {};
  recentEmotions.forEach((reading) => {
    const { emotion } = reading;
    emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1;
  });

  // Find the most common emotion
  let maxCount = 0;
  let dominantEmotion = 'neutral';
  Object.entries(emotionCounts).forEach(([emotion, count]) => {
    if (count > maxCount) {
      maxCount = count;
      dominantEmotion = emotion;
    }
  });

  // Calculate average confidence for the dominant emotion
  const relevantReadings = recentEmotions.filter((r) => r.emotion === dominantEmotion);
  const avgConfidence = Math.round(
    relevantReadings.reduce((sum, r) => sum + r.confidence, 0) / relevantReadings.length
  );

  // Use the most recent explanation for that emotion
  const latestReading = relevantReadings[relevantReadings.length - 1];

  return {
    emotion: dominantEmotion,
    confidence: avgConfidence,
    explanation: latestReading?.explanation || 'Expression analysis in progress...',
  };
}

export default {
  mapExpressionsToEmotion,
  getRecommendationsForEmotion,
  getEmotionConfig,
  getSmoothedEmotion,
};
