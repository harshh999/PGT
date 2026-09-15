import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/the-work' },
    { label: 'About', path: '/nidhi' },
    { label: 'Perspectives', path: '/journal' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? '#F6EFE9' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(136, 102, 68, 0.12)' : '1px solid transparent',
          paddingTop: isScrolled ? '1rem' : '1.75rem',
          paddingBottom: isScrolled ? '1rem' : '1.75rem',
          transition: 'background-color 0.4s ease, padding 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {/* Left: Brand Logo */}
          <button
            onClick={() => onNavigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
            aria-label="Pretty Good Therapist — Home"
          >
            <img
              src="/images/logo.png"
              alt="Pretty Good Therapist"
              style={{
                height: 'clamp(42px, 4.5vw, 54px)',
                width: 'auto',
                display: 'block',
              }}
            />
          </button>

          {/* Center: Primary Links (Desktop) */}
          <nav
            style={{
              display: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'clamp(2rem, 3.5vw, 3.5rem)',
            }}
            className="navbar-center-links"
          >
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.path)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.86rem',
                    letterSpacing: '0.04em',
                    fontWeight: isActive ? 600 : 400,
                    color: '#886644',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.35rem 0',
                    position: 'relative',
                    transition: 'opacity 0.25s ease',
                    opacity: isActive ? 1 : 0.85,
                  }}
                  className="editorial-link"
                >
                  {item.label}
                </button>
              );
            })}

            {/* Contact Action */}
            <button
              onClick={onOpenConsultation}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.86rem',
                letterSpacing: '0.04em',
                fontWeight: 400,
                color: '#886644',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.35rem 0',
                opacity: 0.85,
              }}
              className="editorial-link"
            >
              Contact
            </button>
          </nav>

          {/* Right: Desktop CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }}>
            <button
              onClick={onOpenConsultation}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#886644',
                color: '#F6EFE9',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                padding: '0.75rem 1.45rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid #886644',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="navbar-desktop-cta"
            >
              <span>Begin a conversation</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className="navbar-mobile-toggle"
              style={{
                color: '#886644',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Breakpoint Helper */}
      <style>{`
        @media (min-width: 860px) {
          .navbar-center-links {
            display: flex !important;
          }
          .navbar-desktop-cta {
            display: inline-flex !important;
          }
          .navbar-mobile-toggle {
            display: none !important;
          }
        }
      `}</style>

      {/* Mobile Full-Screen Cream Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#F6EFE9',
            color: '#886644',
            zIndex: 20000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.75rem',
          }}
          role="dialog"
          aria-modal="true"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img
              src="/images/logo.png"
              alt="Pretty Good Therapist"
              style={{ height: '42px', width: 'auto' }}
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                color: '#886644',
                padding: '0.5rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <X size={26} />
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', margin: 'auto 0' }}>
            {[
              { label: 'Home', path: '/' },
              { label: 'Work', path: '/the-work' },
              { label: 'About', path: '/nidhi' },
              { label: 'Perspectives', path: '/journal' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate(item.path);
                }}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 9vw, 3.5rem)',
                  color: currentPath === item.path ? '#937C66' : '#886644',
                  fontWeight: 300,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              style={{
                textAlign: 'left',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 9vw, 3.5rem)',
                color: '#886644',
                fontWeight: 300,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Contact
            </button>
          </nav>

          <div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              style={{
                width: '100%',
                backgroundColor: '#886644',
                color: '#F6EFE9',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 500,
                padding: '1.15rem',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Begin a conversation</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
