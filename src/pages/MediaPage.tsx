import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { mediaAppearances } from '../data/media';

export const MediaPage: React.FC = () => {
  return (
    <div className="media-page theme-cream" style={{ paddingTop: 'clamp(6rem, 12vw, 10rem)' }}>
      <section className="section" style={{ paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-line" style={{ marginBottom: '1.25rem' }}>
            PUBLIC WORK & COMMENTARY
          </span>
          <h1 className="heading-hero" style={{ maxWidth: '1000px', marginBottom: '1.5rem' }}>
            Media & Inquiries.
          </h1>
          <p className="text-lead" style={{ maxWidth: '680px', fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)' }}>
            Selected essays, broadcasts, interviews, and roundtables discussing modern relationships, executive psychology, and emotional dynamics.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-subtle-light)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {mediaAppearances.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  borderTop: idx === 0 ? '1px solid var(--border-medium-light)' : 'none',
                  borderBottom: '1px solid var(--border-medium-light)',
                  paddingTop: 'clamp(2rem, 3.5vw, 3rem)',
                  paddingBottom: 'clamp(2rem, 3.5vw, 3rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                <div style={{ gridColumn: 'span 3' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
                    {item.type} • {item.date}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-ink-primary)', marginTop: '0.35rem' }}>
                    {item.publication}
                  </h4>
                </div>

                <div style={{ gridColumn: 'span 6' }}>
                  <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.25rem, 2vw, 1.6rem)', color: 'var(--color-ink-primary)', marginBottom: '0.6rem' }}>
                    "{item.title}"
                  </h3>
                  <p className="text-body" style={{ fontSize: '0.92rem', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'flex-end' }}>
                  <a
                    href={item.url}
                    className="btn btn-secondary"
                    style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
                  >
                    <span>Read feature</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--color-cream-light)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle-light)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              Press & Editorial Inquiries
            </h3>
            <p className="text-body" style={{ maxWidth: '540px', margin: '0 auto 1.5rem', color: 'var(--color-ink-secondary)' }}>
              For expert commentary, podcasts, or long-form interviews regarding relational dynamics and modern psychology:
            </p>
            <a href="mailto:press@prettygoodtherapist.com" className="editorial-link" style={{ fontWeight: 600, color: 'var(--color-burgundy)' }}>
              press@prettygoodtherapist.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
