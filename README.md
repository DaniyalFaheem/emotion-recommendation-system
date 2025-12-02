# 🎭 Emotion-Based Recommendation System

A production-ready, real-time emotion detection system with personalized recommendations for music, books, poetry, and playlists. Built with Next.js 14, face-api.js, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### Emotion Detection
- **Real-time facial expression analysis** using face-api.js
- **8 distinct emotions detected**: Happy, Sad, Angry, Calm, Fearful, Surprised, Neutral, Jolly
- **Confidence percentage display** (e.g., "87% confident")
- **Detection explanation** based on facial features

### Camera Integration
- Real-time webcam access with face detection overlay
- Canvas-based face bounding boxes and landmark visualization
- Start/Stop camera toggle
- Comprehensive error handling for camera permissions

### Personalized Recommendations
For each detected emotion, the system provides:
- 🎵 **Songs** - Curated music with YouTube links
- 📚 **Books** - Reading recommendations with expandable summaries
- 📖 **Poetry** - Urdu, Punjabi, and English poetry
- 🎬 **Playlists** - Curated YouTube playlists

### UI/UX
- Beautiful glassmorphism design
- Emotion-specific gradient themes
- Smooth animations with Framer Motion
- Fully responsive design
- Accessibility-focused (ARIA labels, keyboard navigation)

## 🚀 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Face Detection**: face-api.js
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern browser with webcam support

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/emotion-recommendation-system.git
   cd emotion-recommendation-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Download face-api.js models** (Required)
   
   Download the following models from [face-api.js models](https://github.com/justadudewhohacks/face-api.js/tree/master/weights) and place them in `public/models/`:
   
   - `tiny_face_detector_model-shard1` (and manifest.json)
   - `face_landmark_68_model-shard1` (and manifest.json)
   - `face_expression_model-shard1` (and manifest.json)

   Or use this quick download script:
   ```bash
   mkdir -p public/models
   cd public/models
   
   # Download Tiny Face Detector
   curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/tiny_face_detector_model-shard1
   curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/tiny_face_detector_model-weights_manifest.json
   
   # Download Face Landmark 68
   curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/face_landmark_68_model-shard1
   curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/face_landmark_68_model-weights_manifest.json
   
   # Download Face Expression
   curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/face_expression_model-shard1
   curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/face_expression_model-weights_manifest.json
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

   > ⚠️ **Important**: For camera access to work in production, the site must be served over HTTPS.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.jsx       # Root layout with metadata
│   ├── page.jsx         # Main application page
│   └── globals.css      # Global styles and Tailwind
├── components/
│   ├── CameraFeed.jsx       # Webcam and face detection
│   ├── EmotionDisplay.jsx   # Emotion card with confidence
│   ├── RecommendationGrid.jsx  # 4-column recommendation layout
│   ├── RecommendationCard.jsx  # Individual recommendation card
│   └── InteractiveButton.jsx   # Action buttons (play, read, etc.)
├── data/
│   └── recommendations.js   # All emotion-based content
└── utils/
    └── recommendationEngine.js  # Emotion mapping logic
```

## 🎭 Emotion Mappings

| Emotion | Emoji | Detection Trigger |
|---------|-------|-------------------|
| Happy | 😊 | Upturned lips, raised cheeks |
| Sad | 😢 | Downturned lips, lowered eyebrows |
| Angry | 😠 | Furrowed brows, tense facial muscles |
| Calm | 😌 | High confidence neutral with relaxed features |
| Fearful | 😨 | Wide eyes, raised eyebrows |
| Surprised | 😲 | Raised eyebrows, open mouth |
| Neutral | 😐 | Balanced expression |
| Jolly | 🎉 | Very high confidence happy (>85%) |

## 🎵 Content Examples

### Happy Emotion
- **Songs**: 295 (Sidhu Moose Wala), So High, Legend
- **Books**: Think and Grow Rich, The Alchemist
- **Poetry**: Motivational Punjabi/Urdu Shayari
- **Playlists**: Punjabi Hits 2024, Workout Motivation

### Sad Emotion
- **Songs**: Anokha Laadla (Talha Anjum), Afsanay, Karachi Mera
- **Books**: The Kite Runner, A Thousand Splendid Suns
- **Poetry**: Mirza Ghalib, Faiz Ahmed Faiz
- **Playlists**: Sad Lofi Mix, Emotional Rap

### Calm Emotion
- **Songs**: Afreen Afreen (NFAK), Tere Bin, Tajdar-e-Haram
- **Books**: The Power of Now, Siddhartha
- **Poetry**: Rumi, Allama Iqbal
- **Playlists**: Meditation Music, Sufi Music

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings
4. Ensure HTTPS is enabled (automatic with Vercel)

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

> ⚠️ **HTTPS Requirement**: Camera access requires HTTPS in production. Use a reverse proxy like Nginx with SSL certificates.

## 🔧 Configuration

### Tailwind CSS
Customize the theme in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      // Add custom colors, fonts, etc.
    },
  },
}
```

### Detection Interval
Modify the detection frequency in `CameraFeed.jsx`:
```javascript
const detectionInterval = 1000; // Default: 1 second
```

## ⚠️ Known Issues

1. **Safari iOS**: Camera may require user interaction before accessing
2. **HTTP Access**: Camera won't work on HTTP in production (use HTTPS)
3. **Low Light**: Detection accuracy decreases in poor lighting
4. **Multiple Faces**: Only the first detected face is analyzed

## 🔮 Future Enhancements

- [ ] Multi-face detection support
- [ ] Emotion history tracking
- [ ] Custom recommendation curation
- [ ] Spotify/Apple Music integration
- [ ] Voice-based emotion detection
- [ ] PWA support for offline access
- [ ] User accounts and preferences
- [ ] Dark/Light theme toggle

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [face-api.js](https://github.com/justadudewhohacks/face-api.js) - Face detection and recognition
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

Made with ❤️ using Next.js, face-api.js & Framer Motion
