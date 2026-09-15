import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PhilosophyPinned: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      word: 'HEARD',
      eyebrow: 'BEYOND SURFACE SYMPTOMS',
      text: 'A space where your thoughts, feelings and experiences are truly heard.',
      image: '/images/philosophy-heard.jpg',
    },
    {
      word: 'UNDERSTOOD',
      eyebrow: 'DECODING UNCONSCIOUS SCRIPTS',
      text: "A deeper exploration of what's happening beneath the surface.",
      image: '/images/philosophy-understood.jpg',
    },
    {
      word: 'CONNECTED',
      eyebrow: 'SUSTAINABLE RELATIONAL BRAVERY',
      text: 'Healthier, more meaningful relationships with yourself and others.',
      image: '/images/philosophy-connected.jpg',
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || window.innerWidth < 860) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=120%',
        pin: pinRef.current,
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.33) {
            setActiveStep(0);
          } else if (p < 0.66) {
            setActiveStep(1);
          } else {
            setActiveStep(2);
          }
        },
      });

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.03 },
          {
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '+=120%',
              scrub: true,
            },
          }
        );
      }

      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const current = steps[activeStep];

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: '#886644',
        color: '#F6EFE9',
        position: 'relative',
      }}
    >
      <div
        ref={pinRef}
        style={{
          minHeight: '100vh',
          maxHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(2rem, 3.5vh, 3.5rem)',
          paddingBottom: 'clamp(2rem, 3.5vh, 3.5rem)',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
        className="philosophy-pin-wrapper"
      >
        <div
          className="container"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxHeight: '100%',
          }}
        >
          {/* Section Eyebrow & Intro Text */}
          <div ref={introRef} style={{ marginBottom: 'clamp(1.25rem, 2vh, 2rem)', maxWidth: '920px' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: '#F6EFE9',
                opacity: 0.9,
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              PRACTICE PHILOSOPHY
            </span>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.1vw, 2.0rem)',
                lineHeight: 1.35,
                color: '#F6EFE9',
                fontWeight: 400,
                maxWidth: '920px',
              }}
            >
              Therapy is not simply about fixing a problem. It is about understanding what is happening beneath the surface and creating healthier, more connected relationships.
            </p>
          </div>

          {/* Extremely subtle horizontal divider */}
          <div
            ref={dividerRef}
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#A99886',
              opacity: 0.4,
              marginBottom: 'clamp(1.25rem, 2.5vh, 2.25rem)',
            }}
          />

          {/* Two-Column Editorial Layout */}
          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: '42% 52%',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '6%',
              flex: '0 1 auto',
            }}
            className="philosophy-grid"
          >
            {/* Left Column: Portrait */}
            <div
              style={{
                width: '100%',
                maxHeight: 'clamp(300px, 46vh, 440px)',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                borderRadius: '16px',
                position: 'relative',
              }}
              className="philosophy-image-wrapper"
            >
              <img
                ref={imageRef}
                src={current.image}
                alt={`Philosophy — ${current.word}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.02) saturate(0.95)',
                  display: 'block',
                  transition: 'opacity 0.4s ease',
                }}
              />
            </div>

            {/* Right Column: HEARD / UNDERSTOOD / CONNECTED typography stack */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 'clamp(1rem, 2vh, 1.75rem)',
              }}
            >
              {/* Vertical Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.word}
                      onClick={() => setActiveStep(idx)}
                      style={{
                        textAlign: 'left',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.1rem, 3.6vw, 3.6rem)',
                        fontWeight: 400,
                        lineHeight: 1.0,
                        letterSpacing: '-0.01em',
                        color: isActive ? '#F6EFE9' : '#A99886',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.1rem 0',
                        transition: 'color 0.4s ease, transform 0.4s ease',
                        transform: isActive ? 'translateX(8px)' : 'none',
                      }}
                    >
                      {step.word}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Supporting Content */}
              <div
                style={{
                  maxWidth: '460px',
                  minHeight: '75px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: '#F6EFE9',
                    opacity: 0.85,
                    marginBottom: '0.35rem',
                    display: 'block',
                  }}
                >
                  {current.eyebrow}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.9rem, 1vw, 1.02rem)',
                    lineHeight: 1.5,
                    color: '#F6EFE9',
                    opacity: 0.9,
                  }}
                >
                  {current.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Stacking */}
        <style>{`
          @media (max-width: 860px) {
            .philosophy-pin-wrapper {
              min-height: auto !important;
              max-height: none !important;
              padding-top: 3.5rem !important;
              padding-bottom: 3.5rem !important;
            }
            .philosophy-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .philosophy-image-wrapper {
              max-height: 320px !important;
              aspect-ratio: 4 / 3 !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};
