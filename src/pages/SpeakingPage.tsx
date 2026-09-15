import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { speakingEngagements } from '../data/speaking';

interface SpeakingPageProps {
  onOpenConsultation: (topicTitle?: string) => void;
}

export const SpeakingPage: React.FC<SpeakingPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="speaking-page theme-cream" style={{ paddingTop: 'clamp(6rem, 12vw, 10rem)' }}>
      {/* Editorial Header */}
      <section className="section" style={{ paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-line" style={{ marginBottom: '1.25rem' }}>
            KEYNOTES & ADVISORY
          </span>
          <h1 className="heading-hero" style={{ maxWidth: '1050px', marginBottom: '2rem' }}>
            Conversations worth having.
          </h1>
          <p className="text-lead" style={{ maxWidth: '720px', fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)', lineHeight: 1.6 }}>
            Nidhi Wadhwa delivers transformative keynotes, interactive salons, and executive workshops that demystify human behavior, conflict de-escalation, and relational intelligence in high-pressure environments.
          </p>
        </div>
      </section>

      {/* Speaking Topics Archive */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle-light)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {speakingEngagements.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: 'clamp(2rem, 4vw, 4rem)',
                  alignItems: 'center',
                  borderTop: idx > 0 ? '1px solid var(--border-subtle-light)' : 'none',
                  paddingTop: idx > 0 ? '4rem' : '0',
                }}
              >
                <div style={{ gridColumn: 'span 5' }} className="speaking-media-col">
                  <div style={{ width: '100%', aspectRatio: '16 / 11', borderRadius: 'var(--radius-xs)', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="speaking-info-col">
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
                    {item.type} • Ideal for {item.audience}
                  </span>

                  <h2 className="heading-2" style={{ lineHeight: 1.15 }}>
                    {item.title}
                  </h2>

                  <p className="text-body" style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--color-ink-secondary)' }}>
                    {item.description}
                  </p>

                  <div style={{ margin: '0.5rem 0' }}>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-muted)', marginBottom: '0.6rem' }}>
                      Key Inquiry Themes
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {item.keyThemes.map((theme, tIdx) => (
                        <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--color-ink-primary)' }}>
                          <Check size={14} color="var(--color-warm-brown)" />
                          <span>{theme}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => onOpenConsultation(`Speaking: ${item.title}`)}
                      className="btn btn-primary"
                    >
                      <span>Inquire about this session</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .speaking-media-col, .speaking-info-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
