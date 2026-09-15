import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { testimonials } from '../../data/testimonials';

export const TestimonialQuote: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const total = testimonials.length;

  const handleNext = () => {
    if (isAnimating.current) return;
    animateChange((currentIdx + 1) % total);
  };

  const handlePrev = () => {
    if (isAnimating.current) return;
    animateChange((currentIdx - 1 + total) % total);
  };

  const animateChange = (nextIndex: number) => {
    if (nextIndex === currentIdx) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !quoteRef.current) {
      setCurrentIdx(nextIndex);
      return;
    }

    isAnimating.current = true;
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIdx(nextIndex);
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
              isAnimating.current = false;
            },
          }
        );
      },
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIdx]);

  const active = testimonials[currentIdx];
  const padZero = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="section"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        backgroundColor: '#E9A3AD',
        color: '#6E232D',
        paddingTop: 'clamp(3.5rem, 7vh, 7rem)',
        paddingBottom: 'clamp(3.5rem, 7vh, 6.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1150px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vh, 3.5rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.5rem' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#6E232D', opacity: 0.65, letterSpacing: '0.05em' }}>05</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#6E232D', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>REFLECTIONS</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: '#6E232D',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Reflections from the work.
          </h2>
        </div>

        {/* Testimonial Display Container */}
        <div style={{ position: 'relative', minHeight: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            ref={quoteRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {/* Main Quote */}
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.35rem, 4.5vw, 2.8rem)',
                lineHeight: 1.25,
                fontWeight: 300,
                color: '#6E232D',
                maxWidth: '1000px',
                margin: '0 auto 1.75rem auto',
                padding: 0,
                border: 'none',
                wordBreak: 'break-word',
              }}
            >
              “{active.quote}”
            </blockquote>

            {/* Attribution & Location */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
                marginBottom: 'clamp(2rem, 3.5vh, 3rem)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(0.9rem, 1vw, 1.05rem)',
                  color: '#6E232D',
                }}
              >
                {active.descriptor}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: '#6E232D',
                  opacity: 0.75,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                }}
              >
                {active.location}
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Navigation Bar: [ Previous ← ]   01 / 05   [ Next → ] */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.75rem, 3vw, 3rem)',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="reflections-nav-btn"
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem 0.6rem',
              minHeight: '44px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              fontWeight: 500,
              color: '#6E232D',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'opacity 0.25s ease',
            }}
          >
            <span className="prev-arrow" style={{ display: 'inline-block', transition: 'transform 0.35s ease' }}>
              ←
            </span>
            <span>Previous</span>
          </button>

          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              letterSpacing: '0.08em',
              userSelect: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            <span style={{ color: '#6E232D', fontWeight: 600 }}>{padZero(currentIdx + 1)}</span>
            <span style={{ color: '#6E232D', opacity: 0.5 }}>/</span>
            <span style={{ color: '#6E232D', opacity: 0.5 }}>{padZero(total)}</span>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="reflections-nav-btn"
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem 0.6rem',
              minHeight: '44px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              fontWeight: 500,
              color: '#6E232D',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'opacity 0.25s ease',
            }}
          >
            <span>Next</span>
            <span className="next-arrow" style={{ display: 'inline-block', transition: 'transform 0.35s ease' }}>
              →
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .reflections-nav-btn:hover {
          opacity: 0.8;
        }
        .reflections-nav-btn:hover .prev-arrow {
          transform: translateX(-4px);
        }
        .reflections-nav-btn:hover .next-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};

