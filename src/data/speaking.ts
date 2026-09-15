import type { SpeakingEngagement } from '../types';

export const speakingEngagements: SpeakingEngagement[] = [
  {
    id: 'relational-intelligence-leadership',
    title: 'Relational Intelligence Under High Stakes',
    description: 'How leaders and founders can navigate unspoken organizational anxieties, make grounded decisions under ambiguity, and create enduring psychological safety without emotional fragility.',
    type: 'Keynote',
    audience: 'Executive Leadership, Founders, and C-Suite Teams',
    image: '/images/speaking-advisory.jpg',
    featured: true,
    keyThemes: [
      'The Psychology of High-Pressure Conflict',
      'Attachment in Team Dynamics',
      'Moving Beyond Defensive Leadership'
    ]
  },
  {
    id: 'the-art-of-difficult-conversations',
    title: 'The Anatomy of Difficult Conversations',
    description: 'An experiential masterclass that breaks down why conversations stall, how nervous system arousal drives argument escalation, and the exact language shifts that restore connection.',
    type: 'Workshop',
    audience: 'Organizations, Creative Agencies, Leadership Offsites',
    image: '/images/relationship-work.jpg',
    featured: true,
    keyThemes: [
      'De-escalating Chronic defensiveness',
      'The Biology of Emotional Flooding',
      'Boundary Architecture'
    ]
  },
  {
    id: 'modern-intimacy-and-belonging',
    title: 'Modern Intimacy in an Era of Hyper-Connectivity',
    description: 'Examining the paradox of unprecedented communication tools alongside increasing emotional estrangement and relational fatigue.',
    type: 'Panel',
    audience: 'Cultural Institutions, Global Forums, University Auditoriums',
    image: '/images/couples-therapy.jpg',
    featured: false,
    keyThemes: [
      'The Digital Filter on Vulnerability',
      'Reclaiming Sustained Attention',
      'The Architecture of Sacred Spaces'
    ]
  }
];
