import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { articles } from '../../data/articles';

interface FeaturedPerspectiveProps {
  onReadArticle: (slug: string) => void;
  onExploreJournal: () => void;
}

export const FeaturedPerspective: React.FC<FeaturedPerspectiveProps> = ({
  onReadArticle,
  onExploreJournal,
}) => {
  const featured = articles.find((a) => a.featured) || articles[0];

  return (
    <section
      className="section theme-cream"
      style={{
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(5rem, 8vw, 8rem)',
        borderTop: '1px solid var(--border-subtle-light)',
      }}
    >
      <div className="container">
        {/* Eyebrow and Journal Link */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#A99886', letterSpacing: '0.05em' }}>03</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#886644', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>THE PERSPECTIVE</span>
            </div>
            <h2 className="heading-2">Featured Essays</h2>
          </div>

          <button onClick={onExploreJournal} className="editorial-link" style={{ fontSize: '0.92rem' }}>
            <span>Explore all essays & publications</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Large Editorial Magazine Composition */}
        <div
          onClick={() => onReadArticle(featured.slug)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 4vw, 4rem)',
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: 'var(--color-cream-light)',
            padding: 'clamp(1.25rem, 3.5vw, 3.5rem)',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle-light)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
          className="perspective-card"
        >
          {/* Left: Cinematic Essay Imagery */}
          <div
            style={{
              gridColumn: 'span 6',
              aspectRatio: '16 / 11',
              overflow: 'hidden',
              borderRadius: '12px',
              position: 'relative',
              width: '100%',
            }}
            className="perspective-img-col"
          >
            <img
              src={featured.heroImage}
              alt={featured.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '0.85rem',
                left: '0.85rem',
                backgroundColor: 'rgba(246, 239, 233, 0.92)',
                backdropFilter: 'blur(8px)',
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'var(--color-burgundy)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {featured.category}
            </div>
          </div>

          {/* Right: Rich Editorial Content Column */}
          <div
            style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
              width: '100%',
            }}
            className="perspective-text-col"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--color-ink-muted)' }}>
              <span>{featured.publishedDate}</span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} />
                {featured.readingTime}
              </span>
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.45rem, 4.5vw, 2.5rem)',
                lineHeight: 1.15,
                fontWeight: 400,
                color: 'var(--color-ink-primary)',
                wordBreak: 'break-word',
                maxWidth: '100%',
              }}
            >
              {featured.title}
            </h3>

            <p className="text-body" style={{ color: 'var(--color-ink-secondary)', fontSize: 'clamp(0.92rem, 1.1vw, 1.02rem)', lineHeight: 1.65 }}>
              {featured.excerpt}
            </p>

            {featured.pullQuote && (
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  color: 'var(--color-warm-brown)',
                  borderLeft: '2px solid var(--color-warm-brown)',
                  paddingLeft: '1rem',
                  fontSize: '0.95rem',
                  margin: '0.25rem 0',
                }}
              >
                "{featured.pullQuote}"
              </p>
            )}

            <div style={{ marginTop: '0.25rem' }}>
              <span className="btn btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '0.85rem', maxWidth: '100%' }}>
                <span>Read the perspective</span>
                <ArrowUpRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .perspective-img-col {
            grid-column: span 12 !important;
            aspect-ratio: 4 / 3 !important;
          }
          .perspective-text-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
