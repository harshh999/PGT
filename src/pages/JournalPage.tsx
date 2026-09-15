import React, { useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { articles } from '../data/articles';
import type { Article } from '../types';

interface JournalPageProps {
  onSelectArticle: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Relationships',
    'Couples',
    'Self',
    'Emotional Wellbeing',
    'Communication',
    'Life & Change',
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const featured = articles.find((a) => a.featured) || articles[0];

  return (
    <div className="journal-page theme-cream" style={{ paddingTop: 'clamp(6rem, 12vw, 10rem)' }}>
      {/* Journal Title & Eyebrow */}
      <section className="section" style={{ paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-line" style={{ marginBottom: '1.25rem' }}>
            EDITORIAL PUBLICATION
          </span>
          <h1 className="heading-hero" style={{ maxWidth: '1000px', marginBottom: '1.5rem' }}>
            Journal & Perspectives.
          </h1>
          <p className="text-lead" style={{ maxWidth: '680px', fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)' }}>
            Essays, psychological frameworks, and quiet observations on relationships, emotional safety, and human behavior.
          </p>
        </div>
      </section>

      {/* Featured Essay Spotlight */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle-light)', paddingBottom: 'clamp(4rem, 7vw, 7rem)' }}>
        <div className="container">
          <div
            onClick={() => onSelectArticle(featured.slug)}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'center',
              backgroundColor: 'var(--color-cream-light)',
              padding: 'clamp(2rem, 4vw, 4rem)',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-subtle-light)',
              cursor: 'pointer',
            }}
          >
            <div style={{ gridColumn: 'span 7' }} className="journal-featured-media">
              <div style={{ width: '100%', aspectRatio: '16 / 10', borderRadius: 'var(--radius-xs)', overflow: 'hidden' }}>
                <img
                  src={featured.heroImage}
                  alt={featured.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="journal-featured-text">
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
                Featured Perspective • {featured.category}
              </span>
              <h2 className="heading-2" style={{ lineHeight: 1.15 }}>
                {featured.title}
              </h2>
              <p className="text-body" style={{ fontSize: '1rem', color: 'var(--color-ink-secondary)' }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: 'var(--color-ink-muted)' }}>
                <span>{featured.publishedDate}</span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} />
                  {featured.readingTime}
                </span>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <span className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '0.85rem' }}>
                  <span>Read essay</span>
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Pills */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle-light)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.35rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-body)',
                  border: selectedCategory === cat ? '1px solid var(--color-burgundy)' : '1px solid var(--border-medium-light)',
                  backgroundColor: selectedCategory === cat ? 'var(--color-burgundy)' : 'transparent',
                  color: selectedCategory === cat ? 'var(--color-cream)' : 'var(--color-ink-primary)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Editorial Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem' }}>
            {filteredArticles.map((article: Article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article.slug)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  cursor: 'pointer',
                }}
              >
                <div style={{ width: '100%', aspectRatio: '16 / 11', borderRadius: 'var(--radius-xs)', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(246, 239, 233, 0.9)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--color-burgundy)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {article.category}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}>
                  <span>{article.publishedDate}</span>
                  <span>•</span>
                  <span>{article.readingTime}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', lineHeight: 1.25, fontWeight: 400, color: 'var(--color-ink-primary)' }}>
                  {article.title}
                </h3>

                <p className="text-body" style={{ fontSize: '0.92rem', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                  {article.excerpt}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-warm-brown)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <span>Read essay</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .journal-featured-media, .journal-featured-text {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
