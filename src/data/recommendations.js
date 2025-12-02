/**
 * Emotion-based recommendations data
 * Contains songs, books, poetry, and playlists for each detected emotion
 */

export const emotionConfig = {
  happy: {
    emoji: '😊',
    label: 'Happy',
    gradient: 'from-yellow-400 to-orange-500',
    bgClass: 'emotion-happy',
    description: 'You seem happy! Here are some uplifting recommendations.',
  },
  sad: {
    emoji: '😢',
    label: 'Sad',
    gradient: 'from-blue-500 to-indigo-600',
    bgClass: 'emotion-sad',
    description: 'Feeling blue? Let these soulful pieces comfort you.',
  },
  angry: {
    emoji: '😠',
    label: 'Angry',
    gradient: 'from-red-500 to-red-700',
    bgClass: 'emotion-angry',
    description: 'Take a breath. These calming selections might help.',
  },
  calm: {
    emoji: '😌',
    label: 'Calm',
    gradient: 'from-emerald-400 to-teal-500',
    bgClass: 'emotion-calm',
    description: 'Your peaceful state matches these serene selections.',
  },
  fearful: {
    emoji: '😨',
    label: 'Fearful',
    gradient: 'from-purple-500 to-violet-600',
    bgClass: 'emotion-fearful',
    description: 'Stay brave! These empowering picks are for you.',
  },
  surprised: {
    emoji: '😲',
    label: 'Surprised',
    gradient: 'from-pink-400 to-pink-600',
    bgClass: 'emotion-surprised',
    description: 'Embrace the wonder! Discover something new.',
  },
  neutral: {
    emoji: '😐',
    label: 'Neutral',
    gradient: 'from-gray-500 to-gray-600',
    bgClass: 'emotion-neutral',
    description: 'In a balanced mood? Explore these versatile picks.',
  },
  jolly: {
    emoji: '🎉',
    label: 'Jolly',
    gradient: 'from-amber-400 to-orange-500',
    bgClass: 'emotion-jolly',
    description: 'Party time! These festive selections match your vibe.',
  },
};

export const recommendations = {
  happy: {
    songs: [
      {
        title: '295',
        artist: 'Sidhu Moose Wala',
        youtubeUrl: 'https://www.youtube.com/watch?v=4BC3CvKIDrI',
        description: 'A powerful anthem celebrating resilience and success.',
      },
      {
        title: 'So High',
        artist: 'Sidhu Moose Wala',
        youtubeUrl: 'https://www.youtube.com/watch?v=pLNQK4GfJzs',
        description: 'An uplifting track that elevates your spirit.',
      },
      {
        title: 'Legend',
        artist: 'Sidhu Moose Wala',
        youtubeUrl: 'https://www.youtube.com/watch?v=w7-gE4Ygx7s',
        description: 'A tribute to legends, filled with motivation.',
      },
    ],
    books: [
      {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        summary: 'A timeless classic that reveals the secrets of wealth and success through the power of thought. Hill interviewed over 500 successful individuals and distilled their wisdom into 13 principles for achieving any goal. The book emphasizes the importance of desire, faith, and persistence in manifesting your dreams.',
        coverColor: 'from-yellow-600 to-orange-600',
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        summary: 'A magical tale of Santiago, a shepherd boy who dreams of finding treasure in Egypt. His journey across the desert teaches him about following his Personal Legend, the soul of the world, and the language of omens. It reminds us that when you want something, all the universe conspires in helping you achieve it.',
        coverColor: 'from-amber-500 to-yellow-600',
      },
    ],
    poetry: [
      {
        title: 'Motivational Punjabi Shayari',
        text: 'ਹੌਸਲਾ ਰੱਖ, ਮੰਜ਼ਿਲ ਮਿਲ ਜਾਵੇਗੀ,\nਰਾਹ ਔਖੀ ਹੈ, ਪਰ ਚੱਲਦਾ ਰਹਿ।\nਸਫ਼ਲਤਾ ਤੇਰੇ ਕਦਮ ਚੁੰਮੇਗੀ,\nਬੱਸ ਹਿੰਮਤ ਨਾ ਹਾਰਦਾ ਰਹਿ।\n\n(Keep courage, you will reach your destination,\nThe path is hard, but keep walking.\nSuccess will kiss your feet,\nJust don\'t lose your spirit.)',
        poet: 'Folk Wisdom',
      },
      {
        title: 'Urdu Motivational Verse',
        text: 'گرتے ہیں شہ سوار ہی میدان جنگ میں،\nوہ طفل کیا گرے جو گھٹنوں کے بل چلے۔\n\n(Only warriors fall in the battlefield,\nHow can a child fall who crawls on his knees?)\n\nRise up, you are meant for greatness!',
        poet: 'Allama Iqbal',
      },
    ],
    playlists: [
      {
        title: 'Punjabi Hits 2024',
        description: 'The biggest Punjabi tracks to keep your energy high.',
        youtubeUrl: 'https://www.youtube.com/watch?v=pLNQK4GfJzs&list=PLDHxaFY8T8wuNuGxWf9o6JGPEUDuNSNGg',
      },
      {
        title: 'Workout Motivation',
        description: 'High-energy beats to fuel your workout sessions.',
        youtubeUrl: 'https://www.youtube.com/watch?v=gCYcHz2k5x0&list=PLChOO_ZAB22WuyDODJ3kjJiU0oQzWOTyb',
      },
    ],
  },
  sad: {
    songs: [
      {
        title: 'Anokha Laadla',
        artist: 'Talha Anjum',
        youtubeUrl: 'https://www.youtube.com/watch?v=OoKQybcijGc',
        description: 'A deeply emotional track about family and sacrifice.',
      },
      {
        title: 'Afsanay',
        artist: 'Talha Anjum',
        youtubeUrl: 'https://www.youtube.com/watch?v=UOh8LUQ_nGk',
        description: 'Stories of pain and healing through powerful lyrics.',
      },
      {
        title: 'Karachi Mera',
        artist: 'Talha Anjum',
        youtubeUrl: 'https://www.youtube.com/watch?v=xqkNEQy0QJI',
        description: 'An ode to Karachi with bittersweet memories.',
      },
    ],
    books: [
      {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        summary: 'A powerful story of friendship, betrayal, and redemption set in Afghanistan. Amir, a privileged boy from Kabul, and Hassan, the son of his father\'s servant, share an unbreakable bond until a devastating event tears them apart. Decades later, Amir returns to a Taliban-controlled Afghanistan to find a way to be good again.',
        coverColor: 'from-blue-600 to-indigo-700',
      },
      {
        title: 'A Thousand Splendid Suns',
        author: 'Khaled Hosseini',
        summary: 'A sweeping saga of two Afghan women whose lives intertwine across thirty years of war and turmoil. Mariam and Laila, born a generation apart, come together as wives of a violent man. Their unlikely friendship blooms amidst suffering, culminating in an act of tremendous sacrifice and love.',
        coverColor: 'from-indigo-500 to-purple-600',
      },
    ],
    poetry: [
      {
        title: 'Mirza Ghalib\'s Wisdom',
        text: 'ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے،\nبہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔\n\n(Thousands of desires, each so intense that one could die for each,\nMy wishes have been fulfilled many, yet they still seem so few.)\n\nدل سے تیرے نکل گئے کچھ آہ بھی نہ کی،\nہم نے تو پتھر کھا لیے چپ چاپ سے۔\n\n(When you left my heart, I didn\'t even sigh,\nI silently swallowed the stones.)',
        poet: 'Mirza Ghalib',
      },
      {
        title: 'Faiz Ahmed Faiz',
        text: 'مجھ سے پہلی سی محبت میری محبوب نہ مانگ،\nمیں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات۔\n\n(Don\'t ask me, my love, for that love again,\nI had thought that if you were, then life was radiant.)\n\nThis poem speaks to the pain of lost love while acknowledging the greater struggles of the world.',
        poet: 'Faiz Ahmed Faiz',
      },
    ],
    playlists: [
      {
        title: 'Sad Lofi Mix',
        description: 'Gentle lofi beats for reflective moments.',
        youtubeUrl: 'https://www.youtube.com/watch?v=lTRiuFIWV54&list=PLofht4PTcKYnaH8w5olJCI-wUVxuoMHqM',
      },
      {
        title: 'Emotional Rap',
        description: 'Deep lyrics that understand your feelings.',
        youtubeUrl: 'https://www.youtube.com/watch?v=OoKQybcijGc&list=PLDHxaFY8T8wuNuGxWf9o6JGPEUDuNSNGg',
      },
    ],
  },
  jolly: {
    songs: [
      {
        title: 'Do You Know',
        artist: 'Diljit Dosanjh',
        youtubeUrl: 'https://www.youtube.com/watch?v=LP7j9jKwzWg',
        description: 'An infectious party anthem that gets everyone dancing.',
      },
      {
        title: 'Kala Chashma',
        artist: 'Badshah ft. Amar Arshi',
        youtubeUrl: 'https://www.youtube.com/watch?v=k4yXQkG2s1E',
        description: 'The ultimate Bollywood party song.',
      },
      {
        title: 'Proper Patola',
        artist: 'Diljit Dosanjh ft. Badshah',
        youtubeUrl: 'https://www.youtube.com/watch?v=O_q6orwE8yo',
        description: 'High-energy Punjabi beats for celebrations.',
      },
    ],
    books: [
      {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        summary: 'When Earth is demolished to make way for a hyperspace bypass, Arthur Dent finds himself on a wild journey through space with his alien friend Ford Prefect. Armed with a towel and the galaxy\'s most remarkable book, they encounter improbable creatures and discover the answer to life, the universe, and everything... which is 42.',
        coverColor: 'from-orange-400 to-amber-500',
      },
      {
        title: 'Bossypants',
        author: 'Tina Fey',
        summary: 'Tina Fey\'s hilarious and heartfelt memoir takes you from her nerdy childhood to her rise at SNL and beyond. With sharp wit and self-deprecating humor, she shares lessons on being a woman in comedy, working with difficult people, and juggling career with motherhood. A laugh-out-loud read that\'s also surprisingly insightful.',
        coverColor: 'from-yellow-400 to-orange-400',
      },
    ],
    poetry: [
      {
        title: 'Funny Urdu Shayari',
        text: 'موٹاپا اتنا بڑھ گیا کہ سائے نے ساتھ چھوڑ دیا،\nبولا بھائی آگے تو جا، مجھ سے نہیں ہوتا!\n\n(I got so fat that even my shadow left me,\nIt said: "Brother, you go ahead, I can\'t keep up!")\n\nجم جانے کی قسم کھائی تھی میں نے کل،\nآج صبح نوکر نے لڈو کھلا دیے!\n\n(I swore to go to the gym yesterday,\nThis morning the servant fed me sweets!)',
        poet: 'Modern Humorist',
      },
      {
        title: 'Comedy Punjabi Poetry',
        text: 'ਸਾਡਾ ਵੱਡਾ ਵੀਰਾ ਡਾਈਟ ਤੇ ਸੀ,\nਦੋ ਦਿਨ ਲੱਸੀ ਪੀਤੀ ਫਿਰ ਛੋਲੇ-ਭਟੂਰੇ ਖਾ ਲਏ।\nਬੋਲੇ: "ਡਾਈਟ ਬ੍ਰੇਕ ਚਾਹੀਦੀ ਐ!"\n\n(Our elder brother was on a diet,\nDrank lassi for two days, then ate chole-bhature.\nHe said: "Diet needs a break!")',
        poet: 'Folk Humor',
      },
    ],
    playlists: [
      {
        title: 'Party Anthems',
        description: 'Non-stop party hits to keep the energy going.',
        youtubeUrl: 'https://www.youtube.com/watch?v=k4yXQkG2s1E&list=PLFgquLnL59alW3xmYiWRaoz0ocp3MXLPc',
      },
      {
        title: 'Bollywood Dance',
        description: 'Classic and modern Bollywood dance numbers.',
        youtubeUrl: 'https://www.youtube.com/watch?v=l_MyUGq7pgs&list=PLjity7Lwv-zpMRm3hJExnqUW2hWBmUfQI',
      },
    ],
  },
  calm: {
    songs: [
      {
        title: 'Afreen Afreen',
        artist: 'Nusrat Fateh Ali Khan & Rahat Fateh Ali Khan',
        youtubeUrl: 'https://www.youtube.com/watch?v=IAqetaRqV_U',
        description: 'A mesmerizing Sufi composition that touches the soul.',
      },
      {
        title: 'Tere Bin',
        artist: 'Rahat Fateh Ali Khan',
        youtubeUrl: 'https://www.youtube.com/watch?v=uN_MwzBfnrU',
        description: 'Soulful melody for peaceful contemplation.',
      },
      {
        title: 'Tajdar-e-Haram',
        artist: 'Atif Aslam',
        youtubeUrl: 'https://www.youtube.com/watch?v=o79So1S4SUQ',
        description: 'A spiritual qawwali that brings inner peace.',
      },
    ],
    books: [
      {
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        summary: 'A guide to spiritual enlightenment that emphasizes the importance of living in the present moment. Tolle explains how our attachment to the thinking mind creates suffering and how we can find peace by observing our thoughts without judgment. The book offers practical exercises for achieving a state of presence and inner stillness.',
        coverColor: 'from-emerald-400 to-teal-500',
      },
      {
        title: 'Siddhartha',
        author: 'Hermann Hesse',
        summary: 'A young Brahmin\'s journey to find meaning beyond wealth, pleasure, and even asceticism. Siddhartha leaves home to seek enlightenment, experiences worldly pleasures, and finally finds wisdom by a river. This spiritual classic teaches that true understanding comes from experience, not teachings, and that everything is connected.',
        coverColor: 'from-teal-400 to-cyan-500',
      },
    ],
    poetry: [
      {
        title: 'Rumi\'s Sufi Wisdom',
        text: 'Out beyond ideas of wrongdoing and rightdoing,\nthere is a field. I\'ll meet you there.\nWhen the soul lies down in that grass,\nthe world is too full to talk about.\n\n"چراغ اگر نہ ہو تو کوئی بات نہیں،\nستاروں کی روشنی سے کام چلا لو۔"\n\n(If there is no lamp, it doesn\'t matter,\nMake do with the light of the stars.)\n\nLet silence take you to the core of life.',
        poet: 'Rumi',
      },
      {
        title: 'Allama Iqbal\'s Reflection',
        text: 'خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے،\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے۔\n\n(Raise your self so high that before every decree,\nGod Himself asks you: Tell me, what is your will?)\n\nFind peace in self-discovery and divine connection.',
        poet: 'Allama Iqbal',
      },
    ],
    playlists: [
      {
        title: 'Meditation Music',
        description: 'Tranquil sounds for meditation and relaxation.',
        youtubeUrl: 'https://www.youtube.com/watch?v=lFcSrYw-ARY&list=PLQ_PIlf6OzqJRjfGJNNXAQf9o-f8GcQ7k',
      },
      {
        title: 'Sufi Music',
        description: 'Divine qawwalis and Sufi melodies for the soul.',
        youtubeUrl: 'https://www.youtube.com/watch?v=IAqetaRqV_U&list=PLDHxaFY8T8wtLbdflxAuXfCMU7QMK8V_7',
      },
    ],
  },
  angry: {
    songs: [
      {
        title: 'Channa Mereya',
        artist: 'Arijit Singh',
        youtubeUrl: 'https://www.youtube.com/watch?v=284Ov7ysmfA',
        description: 'A soothing melody to calm intense emotions.',
      },
      {
        title: 'Weightless',
        artist: 'Marconi Union',
        youtubeUrl: 'https://www.youtube.com/watch?v=UfcAVejslrU',
        description: 'Scientifically designed to reduce anxiety.',
      },
      {
        title: 'River Flows in You',
        artist: 'Yiruma',
        youtubeUrl: 'https://www.youtube.com/watch?v=7maJOI3QMu0',
        description: 'Beautiful piano piece for peaceful reflection.',
      },
    ],
    books: [
      {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        summary: 'A refreshingly honest self-help book that argues for choosing what matters. Manson challenges conventional wisdom about happiness and suggests that embracing limitations and failures is the key to a good life. He emphasizes taking responsibility for our choices and focusing our energy on what truly aligns with our values.',
        coverColor: 'from-red-500 to-orange-500',
      },
      {
        title: 'Anger: Wisdom for Cooling the Flames',
        author: 'Thich Nhat Hanh',
        summary: 'Zen master Thich Nhat Hanh offers Buddhist wisdom for transforming anger into compassion. He provides practical techniques like mindful breathing, walking meditation, and loving-kindness practices. The book teaches that anger is a messenger that requires understanding, not suppression, and that we can use it as a path to deeper peace.',
        coverColor: 'from-rose-500 to-red-600',
      },
    ],
    poetry: [
      {
        title: 'Calming Verses',
        text: 'Breathe in deeply, let anger flow away,\nLike clouds that pass across the sky,\nYour peace will find its way.\n\nگھبراؤ نہیں، یہ وقت بھی گزر جائے گا،\nطوفان کے بعد سکون آئے گا۔\n\n(Don\'t panic, this time will pass too,\nAfter the storm, peace will come.)\n\nBe still. Be patient. Be kind to yourself.',
        poet: 'Healing Words',
      },
      {
        title: 'Peace Within',
        text: 'The fire inside can warm or burn,\nThe choice is always yours to learn.\nTransform the flame to gentle light,\nAnd turn your darkness into bright.\n\nصبر کا پھل میٹھا ہوتا ہے،\nغصے کی آگ خود کو جلاتی ہے۔\n\n(The fruit of patience is sweet,\nThe fire of anger burns oneself.)',
        poet: 'Anonymous Wisdom',
      },
    ],
    playlists: [
      {
        title: 'Stress Relief',
        description: 'Calming tracks to ease tension and find balance.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UfcAVejslrU&list=PLQ_PIlf6OzqJRjfGJNNXAQf9o-f8GcQ7k',
      },
      {
        title: 'Piano Relaxation',
        description: 'Gentle piano melodies for emotional healing.',
        youtubeUrl: 'https://www.youtube.com/watch?v=7maJOI3QMu0&list=PLbS0HkS8Xsoq4STjxL1Bb3D6i8pJz0K6I',
      },
    ],
  },
  neutral: {
    songs: [
      {
        title: 'Kesariya',
        artist: 'Arijit Singh',
        youtubeUrl: 'https://www.youtube.com/watch?v=BddP6PYo2gs',
        description: 'A beautiful romantic melody with soothing vibes.',
      },
      {
        title: 'Excuses',
        artist: 'AP Dhillon',
        youtubeUrl: 'https://www.youtube.com/watch?v=Qgpm-PzNQx8',
        description: 'Smooth contemporary Punjabi track.',
      },
      {
        title: 'Brown Munde',
        artist: 'AP Dhillon',
        youtubeUrl: 'https://www.youtube.com/watch?v=VNs_cCtdbPc',
        description: 'A global hit with catchy beats.',
      },
    ],
    books: [
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        summary: 'A comprehensive guide to building good habits and breaking bad ones through small, incremental changes. Clear explains the science behind habit formation using the four laws: make it obvious, make it attractive, make it easy, and make it satisfying. Packed with practical strategies for improving 1% every day.',
        coverColor: 'from-gray-500 to-slate-600',
      },
      {
        title: 'The 48 Laws of Power',
        author: 'Robert Greene',
        summary: 'A controversial but insightful exploration of the dynamics of power throughout history. Greene distills wisdom from historical figures like Machiavelli, Sun Tzu, and Louis XIV into 48 laws. From "Never Outshine the Master" to "Think as You Like but Behave Like Others," this book reveals the timeless principles of influence.',
        coverColor: 'from-slate-600 to-gray-700',
      },
    ],
    poetry: [
      {
        title: 'Mixed Collection',
        text: 'Sometimes we are happy, sometimes we are sad,\nLife is a balance of good and bad.\nIn neutral moments, we find our way,\nTo appreciate both night and day.\n\nزندگی کا مزا اسی میں ہے،\nکبھی ہنسنا، کبھی رونا۔\n\n(The joy of life lies in this,\nSometimes laughing, sometimes crying.)',
        poet: 'Life Reflections',
      },
      {
        title: 'Contemporary Urdu',
        text: 'چلتے رہو، رکنا نہیں ہے،\nمنزل ملے یا نہ ملے،\nسفر میں بھی مزا ہے۔\n\n(Keep walking, don\'t stop,\nWhether you reach the destination or not,\nThe journey itself is enjoyable.)\n\nBalance is the key to a meaningful life.',
        poet: 'Modern Poet',
      },
    ],
    playlists: [
      {
        title: 'Top 50 Global',
        description: 'The world\'s most popular tracks right now.',
        youtubeUrl: 'https://www.youtube.com/watch?v=VNs_cCtdbPc&list=PLDIoUOhQQPlXqo8N0u3izjp0WLGH2RNPJ',
      },
      {
        title: 'Chill Vibes',
        description: 'Relaxed beats for everyday moments.',
        youtubeUrl: 'https://www.youtube.com/watch?v=Qgpm-PzNQx8&list=PLxA687tYuMWhlIGbAGdBCQ7t4WHi4E_PL',
      },
    ],
  },
  fearful: {
    songs: [
      {
        title: 'You Are Not Alone',
        artist: 'Michael Jackson',
        youtubeUrl: 'https://www.youtube.com/watch?v=pAyKJAtDNCw',
        description: 'A comforting reminder that you\'re never alone.',
      },
      {
        title: 'Brave',
        artist: 'Sara Bareilles',
        youtubeUrl: 'https://www.youtube.com/watch?v=QUQsqBqxoR4',
        description: 'An empowering anthem about finding your voice.',
      },
      {
        title: 'Fight Song',
        artist: 'Rachel Platten',
        youtubeUrl: 'https://www.youtube.com/watch?v=xo1VInw-SKc',
        description: 'A powerful song about inner strength.',
      },
    ],
    books: [
      {
        title: 'Feel the Fear and Do It Anyway',
        author: 'Susan Jeffers',
        summary: 'A groundbreaking guide to overcoming fear and building confidence. Jeffers teaches that fear is not the problem—it\'s how we hold fear that matters. The book provides techniques for turning fear into power, including positive affirmations, saying "Yes" to life, and understanding that we can handle anything.',
        coverColor: 'from-purple-500 to-violet-600',
      },
      {
        title: 'The Courage to Be Disliked',
        author: 'Ichiro Kishimi & Fumitake Koga',
        summary: 'Based on Adlerian psychology, this dialogue between a philosopher and a young man explores how to free yourself from others\' expectations. It argues that all problems are interpersonal relationship problems and that we have the power to change by separating our tasks from others\'. Happiness, it suggests, is found in contribution to others.',
        coverColor: 'from-violet-500 to-indigo-600',
      },
    ],
    poetry: [
      {
        title: 'Brave Hearts Poetry',
        text: 'Fear is just a shadow on the wall,\nIt cannot stop you, not at all.\nWalk toward it, watch it fade,\nFor courage is a choice you\'ve made.\n\nڈر لگتا ہے تو لگنے دو،\nپر رکنا مت، چلتے رہو۔\n\n(If fear comes, let it come,\nBut don\'t stop, keep moving.)',
        poet: 'Courage Collection',
      },
      {
        title: 'Hope in Darkness',
        text: 'In the darkest night, stars still shine,\nIn your greatest fear, strength is thine.\nBreath by breath, step by step,\nYou are braver than you\'ve slept.\n\nخوف کے سمندر میں ڈوبنے سے پہلے،\nیاد رکھو، تم تیر سکتے ہو۔\n\n(Before drowning in the sea of fear,\nRemember, you can swim.)',
        poet: 'Hope Verses',
      },
    ],
    playlists: [
      {
        title: 'Positive Affirmations',
        description: 'Uplifting tracks with encouraging messages.',
        youtubeUrl: 'https://www.youtube.com/watch?v=QUQsqBqxoR4&list=PLpmHPRQirZSSOLyC4Q4WN3Y_g3QCYGFyk',
      },
      {
        title: 'Uplifting Music',
        description: 'Songs that inspire courage and confidence.',
        youtubeUrl: 'https://www.youtube.com/watch?v=xo1VInw-SKc&list=PLiDY3x5kmIWy2TrPLW_VRBYsJZM7QBNBQ',
      },
    ],
  },
  surprised: {
    songs: [
      {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        youtubeUrl: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
        description: 'An electrifying synthwave hit full of energy.',
      },
      {
        title: 'Levitating',
        artist: 'Dua Lipa',
        youtubeUrl: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw',
        description: 'An upbeat disco-pop track that surprises with joy.',
      },
      {
        title: 'Starboy',
        artist: 'The Weeknd ft. Daft Punk',
        youtubeUrl: 'https://www.youtube.com/watch?v=34Na4j8AVgA',
        description: 'A bold and unexpected musical journey.',
      },
    ],
    books: [
      {
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        summary: 'A thrilling psychological mystery about a marriage gone wrong. When Amy disappears on her fifth wedding anniversary, suspicion falls on her husband Nick. But nothing is as it seems in this twisted tale of deception, manipulation, and unreliable narrators. The shocking twists will keep you guessing until the very end.',
        coverColor: 'from-pink-400 to-rose-500',
      },
      {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        summary: 'A gripping thriller that begins with a murder in the Louvre. Harvard symbologist Robert Langdon is drawn into a quest for the Holy Grail, uncovering hidden messages in Leonardo da Vinci\'s art. The fast-paced adventure spans Europe as ancient secrets and surprising revelations come to light.',
        coverColor: 'from-rose-400 to-pink-500',
      },
    ],
    poetry: [
      {
        title: 'Wonder Poetry',
        text: 'Life is full of sweet surprise,\nMoments that open up our eyes.\nEmbrace the wonder, let it in,\nA new adventure can begin.\n\nحیرت ہے زندگی کی اصل خوبصورتی،\nہر لمحہ ایک نیا تحفہ ہے۔\n\n(Wonder is the true beauty of life,\nEvery moment is a new gift.)',
        poet: 'Wonder Collection',
      },
      {
        title: 'Discovery Lines',
        text: 'Around each corner, something new,\nA world of wonders, just for you.\nStay curious, stay amazed,\nLife\'s surprises leave us dazed.\n\nجب حیران ہو تو مسکرا دو،\nیہ زندگی کا جادو ہے۔\n\n(When surprised, just smile,\nThis is the magic of life.)',
        poet: 'Discovery Verses',
      },
    ],
    playlists: [
      {
        title: 'Discover Weekly',
        description: 'Fresh tracks to surprise your ears.',
        youtubeUrl: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ&list=PLDIoUOhQQPlXqo8N0u3izjp0WLGH2RNPJ',
      },
      {
        title: 'Trending Music',
        description: 'The latest hits taking the world by storm.',
        youtubeUrl: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw&list=PLFgquLnL59alW3xmYiWRaoz0ocp3MXLPc',
      },
    ],
  },
};

export default recommendations;
