import './globals.css';

/**
 * Root layout component for the emotion recommendation system
 * Sets up metadata and provides consistent layout structure
 */
export const metadata = {
  title: 'Emotion-Based Recommendation System',
  description: 'Real-time emotion detection with personalized music, books, and poetry recommendations',
  keywords: ['emotion detection', 'face recognition', 'music recommendations', 'AI', 'face-api.js'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-white">
        {children}
      </body>
    </html>
  );
}
