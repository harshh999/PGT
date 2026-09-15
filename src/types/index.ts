// CMS-Ready Type Architecture for Pretty Good Therapist

export interface TherapyService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  audience: string;
  format: string;
  duration?: string;
  faq: Array<{ question: string; answer: string }>;
  relatedArticles?: string[];
  cta: string;
  order: string;
  details?: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Relationships' | 'Couples' | 'Self' | 'Emotional Wellbeing' | 'Communication' | 'Life & Change';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readingTime: string;
  heroImage: string;
  content: Array<{
    type: 'paragraph' | 'heading' | 'quote' | 'subheading';
    text: string;
  }>;
  pullQuote?: string;
  featured?: boolean;
  relatedArticles?: string[];
}

export interface MediaAppearance {
  id: string;
  publication: string;
  title: string;
  type: 'Press' | 'Podcast' | 'Interview' | 'Feature' | 'Public Appearance';
  date: string;
  url: string;
  image: string;
  description: string;
  featured?: boolean;
}

export interface SpeakingEngagement {
  id: string;
  title: string;
  description: string;
  type: 'Keynote' | 'Workshop' | 'Panel' | 'Conversation';
  audience: string;
  image: string;
  featured?: boolean;
  keyThemes: string[];
}

export interface LibraryResource {
  id: string;
  title: string;
  description: string;
  category: 'Essays' | 'Conversations' | 'Videos' | 'Resources' | 'Recommended Reading';
  type: string;
  authorOrHost: string;
  url?: string;
  image: string;
  curatorNote?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  descriptor: string;
  location: string;
  approved: boolean;
  featured: boolean;
}
