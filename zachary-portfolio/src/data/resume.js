// ─── SKILLS ──────────────────────────────────────────────────────────
export const skills = [
  'Python', 'SQL', 'JavaScript', 'Java', 'R', 'HTML/CSS',
  'scikit-learn', 'PyTorch', 'NumPy', 'pandas', 'OpenCV',
  'Flask', 'Node.js', 'Express.js', 'React',
  'Firebase', 'AWS (boto3)', 'Tableau', 'Git', 'Manim',
]

// ─── STATS ───────────────────────────────────────────────────────────
export const stats = [
  { value: '4.42', label: 'GPA / 5.00' },
  { value: '5.0', label: 'Teaching Score / 5' },
  { value: '200+', label: 'Assignments Reviewed' },
  { value: 'Top', label: 'Hackathon Semi-finalist' },
]

// ─── EXPERIENCE ──────────────────────────────────────────────────────
export const experiences = [
  {
    date: 'Jun 2025 – Jun 2026',
    icon: '教',
    role: 'Teaching Assistant',
    company: 'National University of Singapore',
    points: [
      "Facilitated weekly 1-hour Python labs for 13 students, delivering clear explanations and boosting beginners' confidence in writing and debugging their first programs.",
      'Reviewed 200+ programming assignments, providing targeted, actionable feedback that strengthened students\' logic, coding discipline, and problem-solving skills.',
      'Achieved a student-evaluated teaching effectiveness score of 5.0 / 5.0.',
    ],
    tags: ['Python', 'Teaching', 'Code Review', 'Debugging'],
  },
  {
    date: 'Jan 2020 – Feb 2021',
    icon: '创',
    role: 'Vice-President',
    company: 'Re-Crochet with Love · Student Start-up',
    points: [
      'Recognised on the Ministry of Education (MOE) Facebook page for a student-led social enterprise.',
      "Produced the company's annual report — awarded Best Annual Report.",
      'Drove strategic decisions that achieved 96.3% of maximum revenue target and exceeded breakeven by 119%.',
      'Led product redesign from coasters to upcycled textile pouch products based on customer feedback; sold all 75 company shares.',
    ],
    tags: ['Strategy', 'Annual Report', 'Product Design', 'Revenue Planning'],
  },
]

// ─── EDUCATION ───────────────────────────────────────────────────────
export const education = {
  degree: 'B.Sc. Business Analytics',
  school: 'National University of Singapore',
  date: 'Aug 2024 – Present',
  gpa: '4.42 / 5.00',
  courses: [
    'Machine Learning for Predictive Data Analytics',
    'Feature Engineering for Machine Learning',
    'Data Structures & Algorithms',
    'Data Management & Visualisation (SQL, Tableau)',
    'Introduction to Business Analytics (R)',
  ],
}

// ─── PROJECTS ─────────────────────────────────────────────────────────
export const projects = [
  {
    tile: '一',
    title: 'Singapore Mahjong Discard Simulation',
    desc: 'ML-powered discard recommendation system for Singapore Mahjong. Trained neural networks on classification of Mahjong tiles, and a heuristic-based discard strategy that considers hand composition and potential winning combinations.',
    stack: ['Python', 'OpenCV', 'NumPy', 'torch'],
    github: 'https://github.com/RageQuitters/Mahjong',
    demo: null,
  },
  {
    tile: '二',
    title: 'Agentic Telegram Bot for Dementia Care',
    desc: 'End-to-end agentic system built for elderly dementia care — automated check-ins, adaptive memory games, and a caregiver dashboard. Semi-finalist in SimplifyNext Agentic AI Hackathon (top teams out of 80).',
    stack: ['Python', 'Flask', 'Telegram Bot API', 'Firebase Firestore', 'AWS boto3', 'Jinja'],
    github: 'https://github.com/RageQuitters/TeamDraco',
    demo: 'https://drive.google.com/file/d/1-8cu4GFSrYotrVYVte3ubRj32fwwZ5LL/view?usp=sharing',
  },
  {
    tile: '三',
    title: 'Algorithm Visualiser',
    desc: 'Animated binary search visualisation built with Manim — covers both slicing-based and index-based approaches, with per-iteration visual updates of Left, Right, and Mid pointers to illustrate search space reduction.',
    stack: ['Python', 'Manim'],
    github: 'https://github.com/RageQuitters/manim',
    demo: 'https://github.com/RageQuitters/manim/blob/main/source/media/videos/binary_search_animation/1080p60/CombinedBinarySearch.mp4',
  },
  {
    tile: '四',
    title: 'Brazilian E-Commerce Analysis',
    desc: 'End-to-end EDA on 100,000+ Olist orders — data cleaning, Portuguese→English translation via Google Translate API, filler word removal, word cloud visualisation, and Tableau dashboards.',
    stack: ['Python', 'pandas', 'Tableau', 'Google Translate API', 'Matplotlib'],
    github: null,
    demo: 'https://drive.google.com/file/d/1tmj5r8ZGt1UOmcNmGFoV4ZTdetRwPZG8/view?usp=sharing',
  },
]

// ─── CONTACT ──────────────────────────────────────────────────────────
export const contact = {
  email: 'zacharyongzeen@gmail.com',
  linkedin: 'https://linkedin.com/in/zacharyongzeen',
  github: 'https://github.com/RageQuitters',
  phone: '+65 8484 2794',
  resumeFile: '/Zachary_Ong_Resume.pdf',
  resumeDownloadName: 'Zachary_Ong_Ze_En_Resume.pdf',
}
