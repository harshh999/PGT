import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NidhiBioProps {
  onLearnMore: () => void;
}

export const NidhiBio: React.FC<NidhiBioProps> = ({ onLearnMore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.03 },
          {
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      if (contentRef.current) {
        const children = Array.from(contentRef.current.children);
        gsap.fromTo(
          children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: '#F6EFE9',
        color: '#886644',
        paddingTop: 'clamp(3rem, 5.5vh, 5rem)',
        paddingBottom: 'clamp(3rem, 5.5vh, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '43% 51%',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '6%',
          }}
          className="bio-grid"
        >
          {/* Left Column: Portrait */}
          <div className="bio-portrait-col" style={{ width: '100%' }}>
            <div
              style={{
                width: '100%',
                maxHeight: 'clamp(320px, 56vh, 520px)',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                borderRadius: '16px',
                position: 'relative',
              }}
              className="bio-image-wrapper"
            >
              <img
                ref={imageRef}
                src="/images/nidhi-portrait.png"
                alt="Nidhi Wadhwa"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 30%',
                  filter: 'saturate(0.98) contrast(1.01)',
                  display: 'block',
                }}
              />
            </div>

            {/* Understated Attribution Caption */}
            <div
              style={{
                marginTop: '0.6rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                color: '#937C66',
                opacity: 0.85,
              }}
            >
              Nidhi Wadhwa
            </div>
          </div>

          {/* Right Column: Editorial Profile Teaser */}
          <div
            ref={contentRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            className="bio-text-col"
          >
            {/* Eyebrow */}
            <div
              className="bio-eyebrow"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '1.15rem',
              }}
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#A99886', letterSpacing: '0.05em' }}>04</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#886644', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>THE PERSON BEHIND THE PRACTICE</span>
            </div>

            {/* Headline */}
            <h2
              className="bio-headline"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 4vw, 4.25rem)',
                fontWeight: 400,
                lineHeight: 1.0,
                color: '#886644',
                margin: '0 0 1.75rem 0',
              }}
            >
              Meet Nidhi.
            </h2>

            {/* Short Editorial Quote */}
            <blockquote
              className="bio-quote"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.35rem, 2.1vw, 2.1rem)',
                lineHeight: 1.2,
                color: '#886644',
                maxWidth: '650px',
                margin: '0 0 1.5rem 0',
                padding: 0,
                border: 'none',
              }}
            >
              “People don't come to therapy because they lack advice. They come because something deeper needs to be understood.”
            </blockquote>

            {/* Concise Body Paragraph */}
            <p
              className="bio-body"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 1.05vw, 1.08rem)',
                lineHeight: 1.5,
                color: '#937C66',
                maxWidth: '580px',
                margin: '0 0 1.5rem 0',
              }}
            >
              Nidhi is a psychotherapist and relationship specialist working with individuals and couples through complex emotional terrain.
            </p>

            {/* Editorial Text Link CTA */}
            <div className="bio-cta">
              <button
                onClick={onLearnMore}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#886644',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'opacity 0.25s ease',
                }}
                className="bio-cta-link"
              >
                <span>Read the full story</span>
                <span className="cta-arrow" style={{ display: 'inline-block', transition: 'transform 0.3s ease' }}>
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bio-cta-link:hover .cta-arrow {
          transform: translate(3px, -3px);
        }
        @media (max-width: 860px) {
          .bio-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.25rem !important;
          }
          .bio-text-col {
            display: contents !important;
          }
          .bio-eyebrow {
            order: 1 !important;
            margin-bottom: 0.5rem !important;
          }
          .bio-headline {
            order: 2 !important;
            margin-bottom: 1rem !important;
          }
          .bio-portrait-col {
            order: 3 !important;
            margin: 0.75rem 0 !important;
          }
          .bio-image-wrapper {
            max-height: 340px !important;
          }
          .bio-quote {
            order: 4 !important;
            margin-bottom: 1rem !important;
          }
          .bio-body {
            order: 5 !important;
            margin-bottom: 1.25rem !important;
          }
          .bio-cta {
            order: 6 !important;
          }
        }
      `}</style>
    </section>
  );
};

