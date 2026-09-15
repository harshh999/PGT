import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { mediaAppearances } from '../../data/media';
import { speakingEngagements } from '../../data/speaking';

interface MediaSpeakingProps {
  onExploreMedia: () => void;
  onExploreSpeaking: () => void;
}

export const MediaSpeaking: React.FC<MediaSpeakingProps> = ({
  onExploreMedia,
  onExploreSpeaking,
}) => {
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
        {/* Section 1: Media Archive */}
        <div style={{ marginBottom: 'clamp(4rem, 7vw, 7rem)' }}>
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
              <span className="eyebrow eyebrow-line" style={{ marginBottom: '0.75rem' }}>
                PUBLIC DIALOGUES & PRESS
              </span>
              <h2 className="heading-2">Nidhi in the world.</h2>
            </div>

            <button onClick={onExploreMedia} className="editorial-link" style={{ fontSize: '0.92rem' }}>
              <span>View full media archive</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Editorial Archive List */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {mediaAppearances.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                style={{
                  borderTop: idx === 0 ? '1px solid var(--border-medium-light)' : 'none',
                  borderBottom: '1px solid var(--border-medium-light)',
                  paddingTop: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  paddingBottom: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '1.5rem',
                  alignItems: 'baseline',
                  transition: 'background-color 0.25s ease',
                }}
              >
                <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
                    {item.type} • {item.date}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--color-ink-primary)' }}>
                    {item.publication}
                  </span>
                </div>

                <div style={{ gridColumn: 'span 7' }}>
                  <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', fontWeight: 400, color: 'var(--color-ink-primary)', marginBottom: '0.5rem' }}>
                    "{item.title}"
                  </h3>
                  <p className="text-body" style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end' }}>
                  <a
                    href={item.url}
                    onClick={(e) => {
                      if (item.url === '#') {
                        e.preventDefault();
                        onExploreMedia();
                      }
                    }}
                    className="editorial-link"
                    style={{ fontSize: '0.82rem' }}
                  >
                    <span>Read feature</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Speaking Spotlight */}
        <div
          style={{
            backgroundColor: 'var(--color-burgundy)',
            color: 'var(--color-cream)',
            padding: 'clamp(2.5rem, 5vw, 5rem)',
            borderRadius: 'var(--radius-xs)',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
          }}
        >
          <div style={{ gridColumn: 'span 7' }} className="speaking-text-col">
            <span className="eyebrow eyebrow-light eyebrow-line" style={{ marginBottom: '1rem' }}>
              KEYNOTES & WORKSHOPS
            </span>
            <h2 className="heading-2" style={{ color: 'var(--color-cream)', marginBottom: '1.25rem' }}>
              Conversations worth having.
            </h2>
            <p className="text-lead" style={{ color: 'var(--color-ink-on-dark-secondary)', marginBottom: '2rem', maxWidth: '540px' }}>
              Bringing psychological depth, emotional de-escalation, and relational intelligence to leadership teams, progressive organizations, and international forums.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onExploreSpeaking} className="btn btn-primary" style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-burgundy)' }}>
                <span>Explore speaking topics</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div style={{ gridColumn: 'span 5' }} className="speaking-cards-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {speakingEngagements.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle-dark)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-rose)' }}>
                    {item.type} • {item.audience}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-cream)', marginTop: '0.35rem', fontWeight: 400 }}>
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .speaking-text-col {
            grid-column: span 12 !important;
          }
          .speaking-cards-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
