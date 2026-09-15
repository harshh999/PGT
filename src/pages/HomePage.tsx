import React from 'react';
import { Hero } from '../components/home/Hero';
import { Orientation } from '../components/home/Orientation';
import { PhilosophyPinned } from '../components/home/PhilosophyPinned';
import { NidhiBio } from '../components/home/NidhiBio';
import { WorkIndex } from '../components/home/WorkIndex';
import { FeaturedPerspective } from '../components/home/FeaturedPerspective';
import { TestimonialQuote } from '../components/home/TestimonialQuote';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <main>
      <Hero
        onExploreWork={() => onNavigate('/the-work')}
        onOpenConsultation={() => onOpenConsultation()}
      />

      <Orientation
        onSelectOption={(_headline, route) => {
          onNavigate(route);
        }}
      />

      <WorkIndex
        onSelectService={(_slug) => onNavigate('/the-work')}
        onExploreAll={() => onNavigate('/the-work')}
      />

      <FeaturedPerspective
        onReadArticle={(_slug) => onNavigate('/journal')}
        onExploreJournal={() => onNavigate('/journal')}
      />

      <PhilosophyPinned />

      <NidhiBio onLearnMore={() => onNavigate('/nidhi')} />

      <TestimonialQuote />
    </main>
  );
};

