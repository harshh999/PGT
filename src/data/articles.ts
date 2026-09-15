import type { Article } from '../types';

export const articles: Article[] = [
  {
    id: 'the-art-of-unspoken-agreements',
    title: 'The Silent Architecture of Relationships: What We Agree to Without Speaking',
    slug: 'the-art-of-unspoken-agreements',
    excerpt: 'Every enduring partnership operates on unspoken contracts—tacit bargains made in silence. Here is how to bring them into the light before they turn into resentment.',
    category: 'Couples',
    author: {
      name: 'Nidhi Wadhwa',
      role: 'Psychotherapist & Relationship Specialist',
      avatar: '/images/nidhi-avatar.png'
    },
    publishedDate: 'October 14, 2025',
    readingTime: '7 min read',
    heroImage: '/images/perspectives-essay.jpg',
    featured: true,
    pullQuote: 'Conflict is rarely about the dishes, the schedule, or the missed message. It is almost always an unanswered question about safety and significance.',
    content: [
      {
        type: 'paragraph',
        text: 'In almost every couples therapy session, there arrives a moment when both partners recognize that the argument they are having in the room is not the argument they have been having for the last three years. The subject matter—whether finances, household chores, or family boundaries—is simply the designated arena.'
      },
      {
        type: 'heading',
        text: 'The Invisible Ledger'
      },
      {
        type: 'paragraph',
        text: 'When two people enter a partnership, they do not merely combine routines; they combine emotional ledgers. These ledgers were drafted during childhood, refined through adolescence, and ratified during our most painful earlier heartbreaks. We bring them into love without realizing that our partner never signed the document.'
      },
      {
        type: 'quote',
        text: 'We do not see the world as it is; we see it through the lens of our unhealed wounds, mistaking our defense mechanisms for personality traits.'
      },
      {
        type: 'paragraph',
        text: 'For instance, one partner may hold an implicit belief: "If you love me, you will anticipate my distress without me having to become needy." Another holds the opposite contract: "If something is wrong, you will tell me plainly, and if you are quiet, everything is peaceful." When these two unwritten contracts collide, distance inevitably follows.'
      },
      {
        type: 'subheading',
        text: 'Transforming Grievance into Vulnerability'
      },
      {
        type: 'paragraph',
        text: 'The work of modern therapy is not about learning slick negotiation tricks or scripted apologies. It is about slowing down the nervous system long enough to recognize the panic beneath the anger. When we can say, "I am feeling frightened that you are slipping away from me," instead of "You never pay attention," the entire architecture of the conversation changes.'
      }
    ],
    relatedArticles: ['why-we-withdraw-when-we-need-connection-most', 'the-courage-to-disappoint']
  },
  {
    id: 'why-we-withdraw-when-we-need-connection-most',
    title: 'Why We Withdraw When We Need Connection Most',
    slug: 'why-we-withdraw-when-we-need-connection-most',
    excerpt: 'The psychological defense of emotional stonewalling: why the urge to retreat is an instinct of survival, not an absence of love.',
    category: 'Communication',
    author: {
      name: 'Nidhi Wadhwa',
      role: 'Psychotherapist & Relationship Specialist',
      avatar: '/images/nidhi-avatar.png'
    },
    publishedDate: 'September 28, 2025',
    readingTime: '5 min read',
    heroImage: '/images/relationship-work.jpg',
    featured: false,
    pullQuote: 'Stonewalling is not indifference; it is an overwhelmed nervous system desperately trying to prevent catastrophe.',
    content: [
      {
        type: 'paragraph',
        text: 'When emotional tension spikes, physiological data tells a consistent story: heart rate surges, blood pressure rises, and the brain shifts from reflective reasoning to emergency containment.'
      },
      {
        type: 'paragraph',
        text: 'For individuals with avoidant attachment tendencies, stepping away or going silent is not an act of hostility. It is an unconscious emergency brake. Understanding this distinction is the first bridge between partners who feel perpetually abandoned and those who feel constantly inundated.'
      }
    ],
    relatedArticles: ['the-art-of-unspoken-agreements']
  },
  {
    id: 'the-courage-to-disappoint',
    title: 'The Courage to Disappoint: On Boundaries as an Act of Devotion',
    slug: 'the-courage-to-disappoint',
    excerpt: 'Why chronic people-pleasing destroys genuine intimacy, and how learning to say no is the only way to make your yes trustworthy.',
    category: 'Self',
    author: {
      name: 'Nidhi Wadhwa',
      role: 'Psychotherapist & Relationship Specialist',
      avatar: '/images/nidhi-avatar.png'
    },
    publishedDate: 'August 12, 2025',
    readingTime: '6 min read',
    heroImage: '/images/individual-therapy.jpg',
    featured: false,
    pullQuote: 'If your compliance is purchased at the expense of your integrity, everyone in the relationship is being shortchanged.',
    content: [
      {
        type: 'paragraph',
        text: 'Many people equate goodness with accommodation. We believe that by swallowing our dissent, anticipating every desire of our partners, and never expressing inconvenience, we are being generous lovers, devoted children, or exemplary colleagues.'
      },
      {
        type: 'paragraph',
        text: 'In reality, chronic accommodation creates a toxic residue. Resentment is the emotional tax we pay for pretending to feel something we do not.'
      }
    ],
    relatedArticles: ['the-art-of-unspoken-agreements']
  },
  {
    id: 'navigating-ambiguous-loss',
    title: 'Navigating Ambiguous Loss: When Grieving Has No Clear Marker',
    slug: 'navigating-ambiguous-loss',
    excerpt: 'A psychological examination of mourning what is still physically present, but emotionally altered or lost in transition.',
    category: 'Life & Change',
    author: {
      name: 'Nidhi Wadhwa',
      role: 'Psychotherapist & Relationship Specialist',
      avatar: '/images/nidhi-avatar.png'
    },
    publishedDate: 'July 19, 2025',
    readingTime: '8 min read',
    heroImage: '/images/couples-therapy.jpg',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Psychologist Pauline Boss coined the term "ambiguous loss" to describe grief that lacks closure or clear social acknowledgment. In life transitions, this often looks like mourning the dream of a relationship while remaining together, or grieving a parent whose memory is intact while their emotional availability has evaporated.'
      }
    ]
  }
];
