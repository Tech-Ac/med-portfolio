export type Project = {
  id: string
  slug: string
  title: string
  client: string
  category: string
  year: string
  location: string
  cover: string
  gallery: string[]
  description: string
  challenge: string
  solution: string
  outcome: string
  services: string[]
  colors: { name: string; hex: string }[]
  typography: { name: string; usage: string }[]
  featured: boolean
}

export type Service = {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  features: string[]
  price: string
  duration: string
  image: string
}

export type Testimonial = {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  project: string
  rating: number
}

export type JournalPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  cover: string
  date: string
  category: string
  readTime: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'atelier-noir-restaurant',
    title: 'Atelier Noir',
    client: 'Atelier Noir',
    category: 'Restaurant Branding',
    year: '2024',
    location: 'Marrakech, Morocco',
    cover: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974',
    ],
    description: 'Complete brand identity for a fine dining restaurant hidden in the medina, blending traditional Moroccan craft with contemporary gastronomy.',
    challenge: 'Create a brand that feels both deeply rooted in Marrakech and internationally relevant for a luxury dining audience.',
    solution: 'We developed a minimal wordmark with custom Arabic-Latin typography, a terracotta and limestone palette inspired by riad walls, and packaging that references traditional pottery textures.',
    outcome: 'Featured in Wallpaper* and Architectural Digest. 340% increase in reservations within 3 months.',
    services: ['Brand Strategy', 'Visual Identity', 'Packaging', 'Signage'],
    colors: [
      { name: 'Terracotta', hex: '#C17B5F' },
      { name: 'Limestone', hex: '#EDE6DC' },
      { name: 'Charcoal', hex: '#171614' },
    ],
    typography: [
      { name: 'Cormorant Garamond', usage: 'Display, Headlines' },
      { name: 'Inter', usage: 'Body, UI' },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'riad-marmara-packaging',
    title: 'Riad Marmara',
    client: 'Riad Marmara',
    category: 'Packaging',
    year: '2024',
    location: 'Marrakech, Morocco',
    cover: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
    ],
    description: 'Luxury guest amenity packaging for a boutique riad, inspired by handcrafted zellige and desert light.',
    challenge: 'Design packaging that feels luxurious yet sustainable, using local materials.',
    solution: 'Uncoated recycled paper with blind emboss, terracotta foil, and custom illustrations of architectural details.',
    outcome: 'Guests consistently mention packaging as highlight. Sold in concept stores in Paris and Milan.',
    services: ['Packaging', 'Illustration', 'Art Direction'],
    colors: [
      { name: 'Desert Sand', hex: '#D6C1A0' },
      { name: 'Clay', hex: '#C17B5F' },
    ],
    typography: [{ name: 'Instrument Serif', usage: 'Display' }],
    featured: true,
  },
  {
    id: '3',
    slug: 'sahra-olive-oil',
    title: 'Sahra',
    client: 'Sahra',
    category: 'Brand Identity',
    year: '2023',
    location: 'Essaouira, Morocco',
    cover: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2036',
    gallery: [
      'https://images.unsplash.com/photo-1517141542577-d15832a544a3?q=80&w=2070',
      'https://images.unsplash.com/photo-1544787219-7f47cc556762?q=80&w=2002',
    ],
    description: 'Identity and packaging for a single-estate olive oil brand rooted in ancestral farming.',
    challenge: 'Elevate agricultural product to luxury shelf without losing authenticity.',
    solution: 'Minimal bottle with heavy glass, letterpress labels, and a system based on harvest maps.',
    outcome: 'Stocked in Le Bon Marché, Paris. Gold at D&AD Packaging.',
    services: ['Brand Identity', 'Packaging', 'Website'],
    colors: [
      { name: 'Olive', hex: '#5C5A3D' },
      { name: 'Stone', hex: '#E8E0D5' },
    ],
    typography: [{ name: 'Inter', usage: 'All' }],
    featured: true,
  },
  {
    id: '4',
    slug: 'majordome-hotel',
    title: 'Majordôme',
    client: 'Majordôme Hotel',
    category: 'Hotel Branding',
    year: '2023',
    location: 'Marrakech, Morocco',
    cover: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070',
    ],
    description: 'Full hotel identity for a 12-room luxury guesthouse in Palmeraie.',
    challenge: 'Create timeless identity that respects architecture by Studio KO.',
    solution: 'Wordmark inspired by carved plaster, restrained palette, extensive signage system.',
    outcome: 'Condé Nast Traveler Hot List 2024.',
    services: ['Brand Identity', 'Signage', 'Print'],
    colors: [{ name: 'Limestone', hex: '#EDE6DC' }],
    typography: [{ name: 'Cormorant', usage: 'Display' }],
    featured: false,
  },
]

export const services: Service[] = [
  {
    id: '1',
    slug: 'brand-identity',
    title: 'Brand Identity',
    subtitle: 'Foundations that endure',
    description: 'We build brands from the ground up — strategy, naming, visual identity, and guidelines that stand the test of time. Rooted in research, crafted with precision.',
    features: ['Brand Strategy & Positioning', 'Visual Identity System', 'Typography & Color', 'Brand Guidelines', 'Stationery & Collateral'],
    price: 'From 45,000 MAD',
    duration: '6-8 weeks',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2039',
  },
  {
    id: '2',
    slug: 'packaging-design',
    title: 'Packaging Design',
    subtitle: 'Objects of desire',
    description: 'Packaging that tells a story before it is opened. We design for shelf, hand, and memory — sustainable, luxurious, and deeply considered.',
    features: ['Concept & Structure', 'Material Research', 'Sustainable Solutions', 'Production Follow-up', 'Unboxing Experience'],
    price: 'From 30,000 MAD',
    duration: '4-6 weeks',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2070',
  },
  {
    id: '3',
    slug: 'restaurant-branding',
    title: 'Restaurant Branding',
    subtitle: 'Taste made visible',
    description: 'Specialized in hospitality — menus, signage, uniforms, digital presence. We create worlds guests want to step into and remember.',
    features: ['Restaurant Identity', 'Menu Design', 'Signage & Wayfinding', 'Uniforms & Textiles', 'Photography Direction'],
    price: 'From 65,000 MAD',
    duration: '8-12 weeks',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Leïla Benali',
    role: 'Founder',
    company: 'Atelier Noir',
    content: 'SIMO understood our vision before we could articulate it. The identity feels like it has always existed in Marrakech. Quiet, confident, timeless.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887',
    project: 'Atelier Noir',
    rating: 5,
  },
  {
    id: '2',
    name: 'Youssef El Amrani',
    role: 'Creative Director',
    company: 'Riad Marmara',
    content: 'Every detail was considered — from the blind emboss to the weight of the paper. Our guests steal the packaging, which is the best compliment.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887',
    project: 'Riad Marmara',
    rating: 5,
  },
  {
    id: '3',
    name: 'Clara Dubois',
    role: 'Founder',
    company: 'Sahra',
    content: 'Working with SIMO elevated Sahra from a product to a luxury house. We are now in Paris because the brand speaks that language.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
    project: 'Sahra',
    rating: 5,
  },
]

export const journalPosts: JournalPost[] = [
  {
    id: '1',
    slug: 'craft-of-terracotta',
    title: 'The Craft of Terracotta: Why Imperfection is Luxury',
    excerpt: 'In a world of perfect vectors, the slight variation of handmade terracotta reminds us what luxury really means.',
    content: 'Full article content about terracotta craftsmanship in Marrakech...',
    cover: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070',
    date: '2024-12-10',
    category: 'Process',
    readTime: '4 min',
  },
  {
    id: '2',
    slug: 'swiss-moroccan-minimalism',
    title: 'Swiss Grids, Moroccan Light',
    excerpt: 'How the precision of Swiss design finds a natural home in the shadow play of riad architecture.',
    content: 'Full article content...',
    cover: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070',
    date: '2024-11-02',
    category: 'Inspiration',
    readTime: '6 min',
  },
]
