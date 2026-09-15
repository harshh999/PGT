import type { TherapyService } from '../types';

export const therapyServices: TherapyService[] = [
  {
    id: 'individual-therapy',
    title: 'Individual Therapy',
    slug: 'individual-therapy',
    order: '01',
    shortDescription: 'Understanding yourself.',
    description: 'A discreet, reflective container to untangle unresolved emotions, internal conflicts, personal identity, and the quiet patterns that govern your everyday choices.',
    heroImage: '/images/individual-therapy.jpg',
    audience: 'Individuals navigating transition, anxiety, unspoken grief, or seeking deeper alignment with who they are.',
    format: '50-minute clinical sessions conducted in-person or via secure tele-health.',
    duration: '50 Minutes',
    details: [
      'Deconstructing unconscious emotional scripts',
      'Navigating career, identity, and personal life thresholds',
      'Healing relational wounds and boundary fatigue',
      'Cultivating emotional resilience and grounded clarity'
    ],
    faq: [
      {
        question: 'How do I know if individual therapy is right for my current situation?',
        answer: 'You do not need to be in acute crisis to benefit from therapy. Many people begin when they notice recurring friction, a subtle sense of stagnation, or simply need an emotionally neutral, rigorous space to unpack complex thoughts.'
      },
      {
        question: 'What is the frequency of our sessions?',
        answer: 'Typically, we begin with weekly sessions. Consistency allows for a cumulative psychological momentum that is difficult to achieve with sporadic check-ins.'
      },
      {
        question: 'Is virtual therapy as effective as in-person?',
        answer: 'Yes. Online sessions are conducted through an encrypted, HIPAA-compliant platform, providing a focused, confidential space without geographical friction.'
      }
    ],
    cta: 'Begin individual work'
  },
  {
    id: 'couples-therapy',
    title: 'Couples Therapy',
    slug: 'couples-therapy',
    order: '02',
    shortDescription: 'Understanding each other.',
    description: 'When the same conversation keeps happening, there is usually something underneath it. A structured dialogue designed to dismantle repetitive cycles and rebuild genuine intimacy.',
    heroImage: '/images/couples-therapy.jpg',
    audience: 'Couples facing repetitive arguments, disconnection, communication breakdowns, or crossroad life decisions.',
    format: '75-minute dual sessions with dedicated dyadic facilitation.',
    duration: '75 Minutes',
    details: [
      'Uncovering the vulnerable emotions beneath reactive anger and withdrawal',
      'De-escalating recurring conflict loops and gridlock',
      'Re-establishing trust, affection, and emotional safety',
      'Developing sustainable communication rituals for ongoing intimacy'
    ],
    faq: [
      {
        question: 'What if one partner is hesitant or ambivalent about coming?',
        answer: 'Ambivalence is completely normal. The first session is an exploratory consultation to understand both viewpoints without taking sides or assigning blame.'
      },
      {
        question: 'Do you take sides during couples sessions?',
        answer: 'Never. The client in couples therapy is the relationship itself. My role is to act as an objective, compassionate interpreter of the dynamics between both partners.'
      },
      {
        question: 'How long does couples therapy typically take?',
        answer: 'Duration varies based on goals. Some couples gain breakthrough clarity within 8 to 12 sessions, while others choose a longer developmental trajectory.'
      }
    ],
    cta: 'Begin couples work'
  },
  {
    id: 'relationship-work',
    title: 'Relationship Work',
    slug: 'relationship-work',
    order: '03',
    shortDescription: 'Understanding the patterns.',
    description: 'Examining attachment patterns, relational conditioning, family-of-origin dynamics, and how you show up in every meaningful partnership.',
    heroImage: '/images/relationship-work.jpg',
    audience: 'Individuals or non-traditional partnerships seeking to break generational relationship cycles and communicate with honesty.',
    format: '60-minute intensive consultative sessions.',
    duration: '60 Minutes',
    details: [
      'Identifying anxious, avoidant, and disorganized attachment triggers',
      'Differentiating self from parental and family-of-origin expectations',
      'Cultivating relational bravery: speaking difficult truths without shutting down',
      'Navigating dating, conscious uncoupling, or partnership redefinition'
    ],
    faq: [
      {
        question: 'Can I do relationship work even if I am currently single?',
        answer: 'Absolutely. Relational patterns are formed long before a partner enters your life. Examining attachment and self-narratives when single provides unparalleled preparation for healthy partnership.'
      },
      {
        question: 'How does this differ from standard individual therapy?',
        answer: 'Relationship work focuses specifically through the lens of interpersonal systems, attachment history, and communication architecture.'
      }
    ],
    cta: 'Explore relationship work'
  },
  {
    id: 'speaking-consulting',
    title: 'Speaking & Advisory',
    slug: 'speaking',
    order: '04',
    shortDescription: 'Understanding the world around us.',
    description: 'Transformative keynotes, curated workshops, and executive relationship advisory addressing modern relational intelligence, emotional safety, and cultural friction.',
    heroImage: '/images/speaking-advisory.jpg',
    audience: 'Leadership teams, progressive cultural institutions, conferences, and executive retreats.',
    format: 'Keynotes, half-day masterclasses, and executive advisory salons.',
    duration: 'Custom Engagement',
    details: [
      'Relational Intelligence in High-Pressure Environments',
      'The Art of Difficult Conversations: De-escalation and Psychological Safety',
      'Modern Intimacy, Identity, and Vulnerability in the Digital Age',
      'Burnout, Boundaries, and the Psychology of Connection'
    ],
    faq: [
      {
        question: 'Can speaking topics be tailored to specific organizational contexts?',
        answer: 'Yes. Every keynote or workshop is preceded by a discovery conversation to contextualize themes for your specific audience and organizational ethos.'
      },
      {
        question: 'Do you offer remote/virtual keynotes?',
        answer: 'Yes, with custom interactive elements to ensure high engagement across distributed teams.'
      }
    ],
    cta: 'Inquire about speaking'
  }
];
