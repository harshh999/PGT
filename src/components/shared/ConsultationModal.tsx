import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Individual Therapy',
}) => {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) setService(defaultService);
  }, [defaultService]);

  // Lock background scroll and pause Lenis when modal opens
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.stop();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      if (lenis) {
        lenis.start();
      }
    };
  }, [isOpen]);

  // Keyboard shortcut for closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className="consultation-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(38, 16, 21, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)',
        overflow: 'hidden',
        pointerEvents: 'auto',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
    >
      {/* Visual Modal Shell */}
      <div
        className="consultation-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          maxHeight: 'calc(100vh - 40px)',
          backgroundColor: 'var(--color-cream)',
          color: 'var(--color-ink-primary)',
          borderRadius: '16px',
          boxShadow: '0 24px 60px rgba(25, 8, 12, 0.3)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          pointerEvents: 'auto',
        }}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialogue"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-ink-secondary)',
            border: '1px solid var(--border-subtle-light)',
            backgroundColor: 'var(--color-cream)',
            zIndex: 20,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            pointerEvents: 'auto',
          }}
        >
          <X size={18} />
        </button>

        {/* Dedicated Scroll Container — The ONLY vertical scroll container */}
        <div
          className="consultation-scroll-content"
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: '100%',
            width: '100%',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
            scrollBehavior: 'auto',
            touchAction: 'pan-y',
            pointerEvents: 'auto',
          }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(136, 102, 68, 0.12)',
                  color: 'var(--color-warm-brown)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Check size={24} />
              </div>
              <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
                Your note has been received.
              </h2>
              <p className="text-body" style={{ maxWidth: '440px', margin: '0 auto 2.5rem' }}>
                Thank you for reaching out. Nidhi personally reads each introductory inquiry and will be in touch within 24 to 48 business hours to discuss next steps.
              </p>
              <button className="btn btn-primary" onClick={onClose}>
                Return to practice
              </button>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow eyebrow-line" style={{ marginBottom: '0.75rem' }}>
                  CONFIDENTIAL INQUIRY
                </span>
                <h2 id="consultation-title" className="heading-2" style={{ marginBottom: '0.5rem' }}>
                  Begin a conversation.
                </h2>
                <p className="text-body" style={{ color: 'var(--color-ink-secondary)' }}>
                  You do not need to have everything figured out. Simply share what feels present for you, and we will take it from there.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--font-body-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-warm-brown)', marginBottom: '0.5rem' }}>
                    Nature of Support
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {['Individual Therapy', 'Couples Therapy', 'Relationship Work', 'Speaking & Advisory'].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setService(item)}
                        style={{
                          padding: '0.55rem 1.15rem',
                          fontSize: '0.85rem',
                          borderRadius: 'var(--radius-pill)',
                          border: service === item ? '1px solid var(--color-burgundy)' : '1px solid var(--border-medium-light)',
                          backgroundColor: service === item ? 'var(--color-burgundy)' : 'transparent',
                          color: service === item ? 'var(--color-cream)' : 'var(--color-ink-primary)',
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: 'var(--font-body-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-ink-secondary)', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-medium-light)',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: 'var(--font-body-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-ink-secondary)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@domain.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-medium-light)',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontSize: 'var(--font-body-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-ink-secondary)', marginBottom: '0.4rem' }}>
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-medium-light)',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="location" style={{ display: 'block', fontSize: 'var(--font-body-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-ink-secondary)', marginBottom: '0.4rem' }}>
                      City / Timezone *
                    </label>
                    <input
                      id="location"
                      required
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="London (GMT) / New York (EST)"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-medium-light)',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: 'var(--font-body-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--color-ink-secondary)', marginBottom: '0.4rem' }}>
                    What brings you here at this time? (A few sentences is plenty)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share whatever context feels comfortable to explore..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      border: '1px solid var(--border-medium-light)',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}>
                    🔒 Strict clinical confidentiality guaranteed.
                  </span>
                  <button type="submit" className="btn btn-primary">
                    Submit confidential inquiry
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

