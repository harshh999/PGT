import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onExploreWork: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenConsultation }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial Load Choreography
      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 1.0, delay: 0.1 }
      );

      tl.fromTo(
        '.hero-headline-line',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out' },
        '-=0.7'
      );

      tl.fromTo(
        '.hero-supporting',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.6'
      );

      tl.fromTo(
        '.hero-ctas',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );

      // Simple vertical clip-path reveal for the portrait
      tl.fromTo(
        imageContainerRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0.9 },
        { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.4, ease: 'power3.inOut' },
        0.2
      );

      // Subtle scroll parallax without zoom
      gsap.to(imageRef.current, {
        yPercent: -3,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(leftColRef.current, {
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        backgroundColor: '#F6EFE9',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(7.5rem, 13vw, 11rem)',
        paddingBottom: 'clamp(5rem, 8vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '58% 38%',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '4%',
          }}
          className="hero-grid"
        >
          {/* Left Column: Eyebrow + Headline + Supporting + CTAs (~60%) */}
          <div
            ref={leftColRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Eyebrow */}
            <div
              className="hero-eyebrow"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: '#886644',
                marginBottom: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E9A3AD', display: 'inline-block' }} />
              <span>PRETTY GOOD THERAPIST</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 5.8vw, 5.6rem)',
                fontWeight: 400,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                color: '#886644',
                maxWidth: '850px',
                marginBottom: 'clamp(2rem, 3.5vw, 3rem)',
              }}
            >
              <div className="hero-headline-line">
                Some things are hard to say out loud.
              </div>
              <div className="hero-headline-line" style={{ color: '#937C66' }}>
                We can start there.
              </div>
            </h1>

            {/* Supporting Text */}
            <p
              className="hero-supporting text-lead"
              style={{
                maxWidth: '560px',
                color: '#886644',
                fontSize: 'clamp(1.1rem, 1.35vw, 1.35rem)',
                lineHeight: 1.65,
                marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
                opacity: 0.9,
              }}
            >
              A space to understand yourself, your relationships, and what happens beneath the surface.
            </p>

            {/* CTAs */}
            <div
              className="hero-ctas"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={onOpenConsultation}
                style={{
                  backgroundColor: '#886644',
                  color: '#F6EFE9',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  padding: '1.05rem 2.2rem',
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
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={onExploreWork}
                style={{
                  backgroundColor: 'transparent',
                  color: '#886644',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  padding: '1.05rem 1.8rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid rgba(136, 102, 68, 0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span>Explore the work</span>
              </button>
            </div>
          </div>

          {/* Right Column: Full Editorial Portrait (~40%) */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <div
              ref={imageContainerRef}
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'clamp(480px, 70vh, 660px)',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                borderRadius: '16px',
                backgroundColor: 'transparent',
                position: 'relative',
              }}
            >
              <img
                ref={imageRef}
                src="/images/nidhi-avatar.png"
                alt="Nidhi Wadhwa — Full Editorial Portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  filter: 'contrast(1.01) saturate(0.98)',
                  display: 'block',
                  transform: 'scale(1)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Stacking */}
      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
