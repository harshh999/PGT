import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenConsultation: () => void;
  onExploreStartHere: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenConsultation, onExploreStartHere }) => {
  return (
    <section
      className="section"
      style={{
        backgroundColor: '#6E232D',
        color: '#F6EFE9',
        paddingTop: 'clamp(6rem, 12vw, 11rem)',
        paddingBottom: 'clamp(6rem, 12vw, 11rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container container-editorial" style={{ position: 'relative', zIndex: 2 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 6vw, 5.6rem)',
            fontWeight: 400,
            color: '#F6EFE9',
            maxWidth: '1000px',
            margin: '0 auto clamp(2rem, 3.5vw, 3rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
          }}
        >
          Come as you are. Start where you are.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            maxWidth: '540px',
            margin: '0 auto clamp(2.5rem, 4vw, 3.5rem)',
            fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
            color: '#F6EFE9',
            opacity: 0.85,
            lineHeight: 1.6,
          }}
        >
          A confidential space to explore yourself, your relationships, and what lies beneath the surface.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <button
            onClick={onOpenConsultation}
            style={{
              backgroundColor: '#886644',
              color: '#F6EFE9',
              fontFamily: 'var(--font-body)',
              fontSize: '0.92rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '1.15rem 2.6rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid #886644',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span>Begin a conversation</span>
            <ArrowUpRight size={18} />
          </button>

          <button
            onClick={onExploreStartHere}
            style={{
              backgroundColor: 'transparent',
              color: '#F6EFE9',
              fontFamily: 'var(--font-body)',
              fontSize: '0.92rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '1.15rem 2.2rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(246, 239, 233, 0.35)',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span>Explore the approach</span>
          </button>
        </div>
      </div>
    </section>
  );
};
