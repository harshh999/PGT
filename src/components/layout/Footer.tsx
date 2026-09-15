import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const containerRef = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (statementRef.current) {
        gsap.fromTo(
          statementRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
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
              start: 'top 70%',
            },
          }
        );
      }

      if (navRef.current) {
        const columns = Array.from(navRef.current.children);
        gsap.fromTo(
          columns,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 65%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      style={{
        backgroundColor: '#6E232D',
        color: '#F6EFE9',
        position: 'relative',
        paddingTop: 'clamp(5rem, 8vh, 8.5rem)',
        paddingBottom: 'clamp(3rem, 5vh, 4.5rem)',
        borderTop: '1px solid rgba(246, 239, 233, 0.2)',
      }}
    >
      <div className="container" style={{ paddingLeft: 'clamp(1.5rem, 7vw, 6rem)', paddingRight: 'clamp(1.5rem, 7vw, 6rem)' }}>
        {/* Dominant Closing Statement */}
        <h2
          ref={statementRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5.5vw, 5.25rem)',
            lineHeight: 1.0,
            fontWeight: 400,
            color: '#F6EFE9',
            maxWidth: '1050px',
            marginBottom: 'clamp(4.5rem, 7vh, 6.5rem)',
            margin: '0 0 clamp(4.5rem, 7vh, 6.5rem) 0',
          }}
        >
          Come as you are. Start where you are.
        </h2>

        {/* Subtle Horizontal Divider Line */}
        <div
          ref={dividerRef}
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#A99886',
            opacity: 0.3,
            marginBottom: 'clamp(3rem, 5vh, 4.5rem)',
          }}
        />

        {/* Four-Column Editorial Navigation Grid */}
        <div
          ref={navRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            marginBottom: 'clamp(3.5rem, 6vh, 5rem)',
          }}
          className="footer-nav-grid"
        >
          {/* Column 01: Brand */}
          <div style={{ gridColumn: 'span 3' }} className="footer-col">
            <img
              src="/images/logo-light.png"
              alt="Pretty Good Therapist"
              style={{ height: 'clamp(46px, 5vw, 60px)', width: 'auto', marginBottom: '1.25rem', display: 'block' }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                lineHeight: 1.5,
                color: '#F6EFE9',
                opacity: 0.75,
                maxWidth: '280px',
                margin: 0,
              }}
            >
              A thoughtful space for exploring yourself, your relationships, and what lies beneath the surface.
            </p>
          </div>

          {/* Column 02: THE PRACTICE */}
          <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.9rem' }} className="footer-col">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A99886',
                fontWeight: 500,
                marginBottom: '0.35rem',
              }}
            >
              THE PRACTICE
            </span>
            <button
              onClick={() => onNavigate('/the-work')}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              Individual Therapy
            </button>
            <button
              onClick={() => onNavigate('/the-work')}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              Couples Therapy
            </button>
            <button
              onClick={() => onNavigate('/the-work')}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              Relationship Work
            </button>
            <button
              onClick={() => onNavigate('/the-work')}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              Online Tele-health
            </button>
          </div>

          {/* Column 03: IDEAS & PERSPECTIVES */}
          <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.9rem' }} className="footer-col">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A99886',
                fontWeight: 500,
                marginBottom: '0.35rem',
              }}
            >
              IDEAS & PERSPECTIVES
            </span>
            <button
              onClick={() => onNavigate('/journal')}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              Perspectives
            </button>
            <button
              onClick={() => onNavigate('/journal')}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              Journal
            </button>
          </div>

          {/* Column 04: CONTACT */}
          <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.9rem' }} className="footer-col">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A99886',
                fontWeight: 500,
                marginBottom: '0.35rem',
              }}
            >
              CONTACT
            </span>
            <button
              onClick={onOpenConsultation}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              Begin a conversation <span style={{ display: 'inline-block', transition: 'transform 0.25s ease' }} className="footer-arrow">↗</span>
            </button>
            <button
              onClick={() => onNavigate('/nidhi')}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              About
            </button>
            <button
              onClick={onOpenConsultation}
              style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
              className="footer-link"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Small Understated Legal Area */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(169, 152, 134, 0.15)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: '#A99886',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span>© Pretty Good Therapist</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}>Privacy</span>
            <span style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}>Terms</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-family: var(--font-body);
          font-size: 0.98rem;
          color: #F6EFE9;
          opacity: 0.85;
          transition: opacity 0.3s ease, color 0.3s ease;
        }
        .footer-link:hover {
          opacity: 1;
          color: #F6EFE9;
        }
        .footer-link:hover .footer-arrow {
          transform: translate(3px, -3px);
        }
        @media (max-width: 860px) {
          .footer-nav-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-col {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 540px) {
          .footer-nav-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

