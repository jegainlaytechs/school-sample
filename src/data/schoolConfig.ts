import type {
  SchoolDetails,
  Program,
  Facility,
  Activity,
  GalleryItem,
  Award,
  Testimonial,
  StatItem,
  WhyChooseItem,
  PhilosophyItem,
} from '../types';

export const SCHOOL_DETAILS: SchoolDetails = {
  name: 'VERUM',
  tagline: 'Where Little Minds Begin Big Journeys',
  subTagline:
    'A joyful and nurturing space where children learn, play, explore and grow with confidence in Chennai.',
  address: 'Your School Address, Chennai, Tamil Nadu',
  mobile: '+91 XXXXX XXXXX',
  email: 'hello@verumschool.com',
  instagram: 'https://instagram.com/',
  whatsapp: 'https://wa.me/',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88653909242!2d80.06892518698379!3d13.047525488424915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  mapDirectLink: 'https://maps.google.com/?q=Chennai,TamilNadu',
};

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'safe-env',
    title: 'Safe & Caring Environment',
    description:
      'Child-proofed, sanitized facilities with 24/7 CCTV surveillance and compassionate caregivers.',
    iconName: 'ShieldCheck',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    id: 'play-learning',
    title: 'Play-Based Learning',
    description:
      'Curriculum designed around playful inquiry, hands-on discovery, and joyful learning experiences.',
    iconName: 'Puzzle',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
  },
  {
    id: 'exp-educators',
    title: 'Experienced Educators',
    description:
      'Certified early childhood specialists trained in child psychology and nurturing care.',
    iconName: 'GraduationCap',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  {
    id: 'creative-act',
    title: 'Creative Activities',
    description:
      'Vibrant music, drama, pottery, sensory play, and expression stations for holistic growth.',
    iconName: 'Palette',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
  },
  {
    id: 'ind-attention',
    title: 'Individual Attention',
    description:
      'Low teacher-to-child ratios ensuring every young learner is valued and personalized support.',
    iconName: 'HeartHandshake',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
  },
  {
    id: 'holistic-dev',
    title: 'Holistic Development',
    description:
      'Nurturing emotional maturity, cognitive strength, motor skills, and social collaboration.',
    iconName: 'Sparkles',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'toddler',
    title: 'Toddler Care & Play',
    ageGroup: '1.5 – 2 Years',
    timing: '9:00 AM – 11:30 AM',
    description:
      'A gentle step into social environments featuring sensory play, language initiation, and motor coordination activities.',
    highlights: [
      'Sensory Exploration',
      'Basic Social Interaction',
      'Motor Skill Development',
      'Music & Rhythm Intro',
    ],
    image:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
    colorBg: 'bg-amber-50/70 border-amber-200/80',
    colorBadge: 'bg-amber-500 text-white',
  },
  {
    id: 'preschool',
    title: 'Preschool Discoverers',
    ageGroup: '2 – 3 Years',
    timing: '9:00 AM – 12:30 PM',
    description:
      'Igniting curiosity through guided play, vocabulary expansion, hands-on craft sessions, and foundational socialization.',
    highlights: [
      'Storytelling & Phonemic Awareness',
      'Art & Sensory Stations',
      'Habit & Routine Building',
      'Group Play & Sharing',
    ],
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
    colorBg: 'bg-orange-50/70 border-orange-200/80',
    colorBadge: 'bg-[#E86A33] text-white',
  },
  {
    id: 'kindergarten',
    title: 'Junior Kindergarten',
    ageGroup: '3 – 4 Years',
    timing: '8:45 AM – 1:00 PM',
    description:
      'Structured play-based curriculum covering early literacy, basic numeracy concepts, spatial awareness, and creative arts.',
    highlights: [
      'Phonetics & Pre-Writing',
      'Number Recognition & Logic',
      'Science & Nature Discovery',
      'Creative Expression',
    ],
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    colorBg: 'bg-emerald-50/70 border-emerald-200/80',
    colorBadge: 'bg-emerald-600 text-white',
  },
  {
    id: 'prek',
    title: 'Senior Pre-K Explorers',
    ageGroup: '4 – 5 Years',
    timing: '8:30 AM – 1:30 PM',
    description:
      'Comprehensive primary school readiness focusing on reading fluency, math reasoning, problem-solving, and leadership.',
    highlights: [
      'Early Reading & Story Creation',
      'Math Reasoning & Coding Toys',
      'Independent Inquiry Projects',
      'Public Speaking & Confidence',
    ],
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    colorBg: 'bg-sky-50/70 border-sky-200/80',
    colorBadge: 'bg-sky-600 text-white',
  },
  {
    id: 'after-school',
    title: 'After School Enrichment',
    ageGroup: '5+ Years',
    timing: '2:00 PM – 5:30 PM',
    description:
      'Post-school care with homework assistance, karate, dance, robotics, chess, and creative art clubs in a secure space.',
    highlights: [
      'Homework Support & Mentorship',
      'Dance & Martial Arts',
      'Robotics & STEM Tinkering',
      'Outdoor Sports & Refreshments',
    ],
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    colorBg: 'bg-purple-50/70 border-purple-200/80',
    colorBadge: 'bg-purple-600 text-white',
  },
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    id: 'learn',
    title: 'LEARN',
    tagline: 'Sparking Natural Curiosity',
    description:
      'Building foundational knowledge and literacy skills through inquiry, sensory exploration, and interactive discovery.',
    iconName: 'BookOpen',
    bgColor: 'bg-amber-100/80 border-amber-300',
    textColor: 'text-amber-900',
  },
  {
    id: 'play',
    title: 'PLAY',
    tagline: 'Joy in Every Step',
    description:
      'Learning naturally through fun, meaningful, and imaginative play that stimulates brain development and social skills.',
    iconName: 'Gamepad2',
    bgColor: 'bg-orange-100/80 border-orange-300',
    textColor: 'text-orange-900',
  },
  {
    id: 'explore',
    title: 'EXPLORE',
    tagline: 'World of Wonders',
    description:
      'Discovering nature, science, music, and arts through outdoor activities, field trips, and hands-on experiments.',
    iconName: 'Compass',
    bgColor: 'bg-emerald-100/80 border-emerald-300',
    textColor: 'text-emerald-900',
  },
  {
    id: 'grow',
    title: 'GROW',
    tagline: 'Confidence & Compassion',
    description:
      'Developing emotional resilience, social empathy, self-expression, and lifelong learning confidence in a warm circle.',
    iconName: 'Sprout',
    bgColor: 'bg-sky-100/80 border-sky-300',
    textColor: 'text-sky-900',
  },
];

export const STATS: StatItem[] = [
  {
    id: 'years',
    label: 'Years of Learning',
    value: '10+',
    numberValue: 10,
    suffix: '+',
    description: 'Serving families with excellence',
    iconName: 'CalendarCheck',
  },
  {
    id: 'learners',
    label: 'Happy Learners',
    value: '500+',
    numberValue: 500,
    suffix: '+',
    description: 'Children graduated & thriving',
    iconName: 'Smile',
  },
  {
    id: 'educators',
    label: 'Educators & Staff',
    value: '25+',
    numberValue: 25,
    suffix: '+',
    description: 'Trained & passionate teachers',
    iconName: 'Award',
  },
  {
    id: 'environment',
    label: 'Caring Environment',
    value: '100%',
    numberValue: 100,
    suffix: '%',
    description: 'Child safety & warmth commitment',
    iconName: 'Heart',
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'smart-classrooms',
    title: 'Smart Classrooms',
    description:
      'Ergonomic child-sized furniture, interactive digital displays, and vibrant learning corners.',
    iconName: 'Monitor',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    badge: 'Interactive Learning',
  },
  {
    id: 'safe-play-area',
    title: 'Safe Indoor Play Area',
    description:
      'Soft padded flooring, non-toxic play structures, and motor skill activity frames.',
    iconName: 'Shield',
    image:
      'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?auto=format&fit=crop&w=800&q=80',
    badge: 'Padded Safety',
  },
  {
    id: 'activity-rooms',
    title: 'Activity & Sensory Rooms',
    description:
      'Dedicated zones for building blocks, sand play, water tables, and clay modeling.',
    iconName: 'Boxes',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
    badge: 'Hands-on Discovery',
  },
  {
    id: 'creative-spaces',
    title: 'Creative Learning Spaces',
    description:
      'Music corners equipped with mini instruments, puppet theatres, and dramatic play costumes.',
    iconName: 'Music',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    badge: 'Art & Music',
  },
  {
    id: 'child-infra',
    title: 'Child-Friendly Infrastructure',
    description:
      'Low-height washbasins, rounded edge furniture, finger-guard doors, and clean dining rooms.',
    iconName: 'Home',
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    badge: 'Hygiene & Comfort',
  },
  {
    id: 'outdoor-play',
    title: 'Outdoor Garden & Play',
    description:
      'Lush green courtyard with slides, swings, sandbox, and organic vegetable garden patches.',
    iconName: 'Sun',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    badge: 'Fresh Air & Nature',
  },
  {
    id: 'reading-corner',
    title: 'Reading & Nook Corner',
    description:
      'Cozy beanbags, rich library of picture books, pop-up storybooks, and gentle lighting.',
    iconName: 'BookOpenCheck',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    badge: 'Quiet Exploration',
  },
  {
    id: 'art-craft-space',
    title: 'Art & Craft Studio',
    description:
      'Easels, washable paints, craft papers, and display boards showcasing student creations.',
    iconName: 'Brush',
    image:
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
    badge: 'Free Expression',
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'art-craft',
    title: 'Art & Craft Studio',
    description:
      'Finger painting, paper folding, leaf pressing, and tactile crafting to unleash imagination.',
    iconName: 'Palette',
    image:
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    category: 'Creative Arts',
  },
  {
    id: 'storytelling',
    title: 'Interactive Storytelling',
    description:
      'Puppetry, voice modulation, and giant picture book sessions that nurture vocabulary and listening.',
    iconName: 'BookMarked',
    image:
      'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80',
    category: 'Language Skills',
  },
  {
    id: 'music-dance',
    title: 'Music & Movement',
    description:
      'Rhythmic movement, action songs, and percussion instruments for spatial rhythm and joy.',
    iconName: 'Music2',
    image:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    category: 'Performing Arts',
  },
  {
    id: 'outdoor-games',
    title: 'Outdoor Sports & Games',
    description:
      'Mini obstacle courses, ball games, and relay races designed to build gross motor skills.',
    iconName: 'Trophy',
    image:
      'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=800&q=80',
    category: 'Physical Growth',
  },
  {
    id: 'nature-exploration',
    title: 'Nature & Science Explorers',
    description:
      'Planting seeds, observing butterfly life cycles, and simple sink-or-float water activities.',
    iconName: 'Leaf',
    image:
      'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=800&q=80',
    category: 'Inquiry & Nature',
  },
  {
    id: 'rhymes-songs',
    title: 'Rhymes & Phonetics',
    description:
      'Sing-along phonics, nursery rhymes, and language games that make pre-reading exciting.',
    iconName: 'Mic',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    category: 'Early Literacy',
  },
  {
    id: 'sensory-act',
    title: 'Sensory Lab Play',
    description:
      'Water play, texture boards, kinetic sand, and color sorting designed for sensory development.',
    iconName: 'Sparkle',
    image:
      'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=800&q=80',
    category: 'Sensory Skills',
  },
  {
    id: 'celebrations',
    title: 'Festival & Theme Days',
    description:
      'Grand celebrations for cultural festivals, Grandparents Day, Color Days, and Annual Sports Day.',
    iconName: 'PartyPopper',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    category: 'Cultural Events',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Bright Classroom Discovery',
    category: 'Classroom',
    imageUrl:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Children interacting with hands-on educational puzzles.',
  },
  {
    id: 'gal-2',
    title: 'Vibrant Art Session',
    category: 'Activities',
    imageUrl:
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
    caption: 'Unleashing imagination with watercolors and easels.',
  },
  {
    id: 'gal-3',
    title: 'Annual Sports Day Fun',
    category: 'Events',
    imageUrl:
      'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Encouraging teamwork, fitness, and energetic sportsmanship.',
  },
  {
    id: 'gal-4',
    title: 'Green Outdoor Playground',
    category: 'Outdoor',
    imageUrl:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80',
    caption: 'Safe outdoor play areas under leafy shade trees.',
  },
  {
    id: 'gal-5',
    title: 'Color Day Festival',
    category: 'Celebrations',
    imageUrl:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Yellow & Red theme celebrations filled with laughter.',
  },
  {
    id: 'gal-6',
    title: 'Reading Corner Circle',
    category: 'Classroom',
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    caption: 'Teacher reading picture storybooks to captivated children.',
  },
  {
    id: 'gal-7',
    title: 'Building Block Construction',
    category: 'Activities',
    imageUrl:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Developing spatial reasoning with wooden building blocks.',
  },
  {
    id: 'gal-8',
    title: 'Graduation Ceremony',
    category: 'Events',
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    caption: 'Celebrating our Senior Pre-K graduates heading to big schools.',
  },
  {
    id: 'gal-9',
    title: 'Mini Gardening Patch',
    category: 'Outdoor',
    imageUrl:
      'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=1200&q=80',
    caption: 'Children learning how seeds sprout into green plants.',
  },
];

export const AWARDS: Award[] = [
  {
    id: 'award-1',
    title: 'Excellence in Early Education',
    year: '2025',
    organization: 'Regional Preschool Education Excellence Forum',
    description:
      'Recognized for exceptional child-centered pedagogy, innovative play methods, and safety standards.',
    iconName: 'Trophy',
  },
  {
    id: 'award-2',
    title: 'Outstanding Learning Environment',
    year: '2024',
    organization: 'Early Learning Infrastructure Council',
    description:
      'Awarded for ergonomically designed, sanitized, and child-safe physical and emotional learning environments.',
    iconName: 'Award',
  },
  {
    id: 'award-3',
    title: 'Innovation in Preschool Education',
    year: '2024',
    organization: 'National Early Childhood Educators Association',
    description:
      'Honored for integrating hands-on STEM toys, sensory labs, and nature exploration into early learning.',
    iconName: 'Medal',
  },
  {
    id: 'award-4',
    title: 'Community Excellence Award',
    year: '2023',
    organization: 'Chennai Parents & Educators Guild',
    description:
      'Voted most trusted preschool brand by parent communities for transparent communication and care.',
    iconName: 'Crown',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    parentName: 'Priya & Ramesh Sundaram',
    relation: 'Parents of Ananya',
    childProgram: 'Preschool Program',
    quote:
      'VERUM has created such a warm and welcoming environment for our daughter. Within just three months, her vocabulary, confidence, and social habits improved remarkably!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-2',
    parentName: 'Karthik & Shalini Natarajan',
    relation: 'Parents of Aarav',
    childProgram: 'Junior Kindergarten',
    quote:
      'The teachers at VERUM are incredibly patient and caring. Aarav looks forward to going to school every single morning! The safety standards and clean campus give us complete peace of mind.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-3',
    parentName: 'Meera & Deepak Varma',
    relation: 'Parents of Diya',
    childProgram: 'Senior Pre-K Explorers',
    quote:
      'We are blown away by the balance of structured learning and creative play. Diya developed strong phonics skills and loves the art and gardening sessions!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-4',
    parentName: 'Siddharth & Divya Menon',
    relation: 'Parents of Rian',
    childProgram: 'Toddler Care',
    quote:
      'Sending our 2-year-old was a huge step, but the VERUM team made the transition so smooth. The daily updates and personal care are priceless.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
];
