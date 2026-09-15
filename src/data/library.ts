import type { LibraryResource } from '../types';

export const libraryResources: LibraryResource[] = [
  {
    id: 'the-body-keeps-the-score',
    title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
    description: 'A foundational exploration of how emotional distress leaves somatic fingerprints in the nervous system.',
    category: 'Recommended Reading',
    type: 'Book',
    authorOrHost: 'Bessel van der Kolk, M.D.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    curatorNote: 'Essential reading for understanding why talking alone sometimes fails to resolve deeply held distress.',
    featured: true
  },
  {
    id: 'hold-me-tight-attachment',
    title: 'Hold Me Tight: Seven Conversations for a Lifetime of Love',
    description: 'The core manual of Emotionally Focused Therapy (EFT) translated for couples seeking to de-escalate circular fights.',
    category: 'Recommended Reading',
    type: 'Book',
    authorOrHost: 'Dr. Sue Johnson',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80',
    curatorNote: 'I recommend this text in the early stages of couples therapy to map out your specific reactive loop.',
    featured: true
  },
  {
    id: 'somatic-attunement-essay',
    title: 'Somatic Grounding: Moving Out of the Head and into the Ribcage',
    description: 'An inquiry into how micro-movements, breath shifts, and posture recalibration break ruminative mental loops.',
    category: 'Essays',
    type: 'Essay',
    authorOrHost: 'Nidhi Wadhwa',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
    curatorNote: 'A short practical guide to regulate nervous system arousal during challenging relationship discussions.',
    featured: false
  },
  {
    id: 'conversations-on-silence',
    title: 'The Dignity of Silence in Dialogue',
    description: 'A recorded dialogue on why pausing before answering is often the highest form of respect in intimate relationships.',
    category: 'Conversations',
    type: 'Audio Dialogue',
    authorOrHost: 'Nidhi Wadhwa with Dr. Julian Croft',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80',
    curatorNote: 'Listen when you feel the urge to immediately defend yourself in an argument.',
    featured: false
  },
  {
    id: 'conflict-de-escalation-worksheet',
    title: 'The Relational Pause: A 4-Step Self-Intervention Guide',
    description: 'A downloadable clinical framework to halt escalating communication cycles before saying things you regret.',
    category: 'Resources',
    type: 'Clinical Framework PDF',
    authorOrHost: 'Pretty Good Therapist Practice',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    curatorNote: 'Keep this printed or saved on your phone for high-friction moments.',
    featured: true
  }
];
