import React, { useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { libraryResources } from '../data/library';

export const LibraryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Recommended Reading',
    'Essays',
    'Conversations',
    'Resources',
  ];

  const filtered = activeCategory === 'All'
    ? libraryResources
    : libraryResources.filter((r) => r.category === activeCategory);

  return (
    <div className="library-page theme-cream" style={{ paddingTop: 'clamp(6rem, 12vw, 10rem)' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-line" style={{ marginBottom: '1.25rem' }}>
            EVERGREEN KNOWLEDGE HUB
          </span>
          <h1 className="heading-hero" style={{ maxWidth: '1000px', marginBottom: '1.5rem' }}>
            A little more clarity.
          </h1>
          <p className="text-lead" style={{ maxWidth: '680px', fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)' }}>
            A curated directory of foundational texts, reflective essays, clinical frameworks, and recorded dialogues recommended by Nidhi Wadhwa.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle-light)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.6rem 1.35rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-body)',
                  border: activeCategory === cat ? '1px solid var(--color-burgundy)' : '1px solid var(--border-medium-light)',
                  backgroundColor: activeCategory === cat ? 'var(--color-burgundy)' : 'transparent',
                  color: activeCategory === cat ? 'var(--color-cream)' : 'var(--color-ink-primary)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--color-cream-light)',
                  border: '1px solid var(--border-subtle-light)',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(246, 239, 233, 0.92)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--color-burgundy)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {item.type}
                  </div>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.85rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
                    {item.authorOrHost}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', lineHeight: 1.25, fontWeight: 400 }}>
                    {item.title}
                  </h3>

                  <p className="text-body" style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>

                  {item.curatorNote && (
                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-subtle-light)',
                        fontSize: '0.82rem',
                        fontStyle: 'italic',
                        color: 'var(--color-ink-muted)',
                      }}
                    >
                      "Note from Nidhi: {item.curatorNote}"
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-burgundy)', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.5rem' }}>
                    {item.category === 'Resources' ? <Download size={14} /> : <ExternalLink size={14} />}
                    <span>{item.category === 'Resources' ? 'Download Resource' : 'Explore Entry'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
