import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus, Check } from 'lucide-react';
import { therapyServices } from '../data/services';

interface TheWorkPageProps {
  onOpenConsultation: (serviceTitle?: string) => void;
  onNavigate: (path: string) => void;
}

export const TheWorkPage: React.FC<TheWorkPageProps> = ({ onOpenConsultation, onNavigate }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<string | null>(null);

  const toggleFaq = (key: string) => {
    setOpenFaqIdx(openFaqIdx === key ? null : key);
  };

  return (
    <div className="the-work-page theme-cream" style={{ paddingTop: 'clamp(6rem, 12vw, 10rem)' }}>
      {/* Editorial Header */}
      <section className="section" style={{ paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-line" style={{ marginBottom: '1.25rem' }}>
            CLINICAL PRACTICE & INQUIRY
          </span>
          <h1 className="heading-hero" style={{ maxWidth: '1050px', marginBottom: '2rem' }}>
            The Work.
          </h1>
          <p className="text-lead" style={{ maxWidth: '720px', fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)', lineHeight: 1.6 }}>
            Therapy is not an exercise in passive advice-giving. It is a rigorous, collaborative inquiry into the unconscious dynamics, relational contracts, and nervous system responses that shape your life.
          </p>
        </div>
      </section>

      {/* Pillars of Practice: Detailed Editorial Breakdowns */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle-light)', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5rem, 9vw, 9rem)' }}>
          {therapyServices.map((service, idx) => (
            <div
              key={service.id}
              id={service.slug}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: 'clamp(2rem, 5vw, 5rem)',
                alignItems: 'start',
                borderTop: idx > 0 ? '1px solid var(--border-subtle-light)' : 'none',
                paddingTop: idx > 0 ? 'clamp(4rem, 7vw, 7rem)' : '0',
              }}
            >
              {/* Left Column: Number, Title, Context & CTA */}
              <div style={{ gridColumn: 'span 5' }} className="service-details-col">
                <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--color-warm-brown)' }}>
                  {service.order} / 04
                </span>
                <h2 className="heading-2" style={{ margin: '0.5rem 0 1.25rem' }}>
                  {service.title}
                </h2>
                <p className="font-editorial font-italic" style={{ fontSize: '1.2rem', color: 'var(--color-warm-brown)', marginBottom: '1.5rem' }}>
                  {service.shortDescription}
                </p>
                <p className="text-body" style={{ fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                  {service.description}
                </p>

                <div style={{ backgroundColor: 'var(--color-cream-light)', padding: '1.5rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle-light)', marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Session Framework
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--color-ink-primary)' }}>
                    {service.format}
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                >
                  <span>{service.cta}</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Right Column: Hero Visual & Focus Areas */}
              <div style={{ gridColumn: 'span 7' }} className="service-visual-col">
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    marginBottom: '2.5rem',
                    boxShadow: '0 20px 40px rgba(136, 102, 68, 0.12)',
                  }}
                >
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Focus Areas */}
                {service.details && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
                      What We Work On
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                      {service.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            fontSize: '0.92rem',
                            color: 'var(--color-ink-secondary)',
                          }}
                        >
                          <div style={{ color: 'var(--color-warm-brown)', marginTop: '3px', flexShrink: 0 }}>
                            <Check size={16} />
                          </div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Service Specific FAQs */}
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                    Frequently Asked Questions
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {service.faq.map((faq, fIdx) => {
                      const faqKey = `${service.id}-${fIdx}`;
                      const isOpen = openFaqIdx === faqKey;
                      return (
                        <div
                          key={fIdx}
                          style={{
                            borderTop: fIdx === 0 ? '1px solid var(--border-medium-light)' : 'none',
                            borderBottom: '1px solid var(--border-medium-light)',
                            paddingTop: '1.2rem',
                            paddingBottom: '1.2rem',
                          }}
                        >
                          <button
                            onClick={() => toggleFaq(faqKey)}
                            style={{
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              textAlign: 'left',
                              gap: '1rem',
                              color: 'var(--color-ink-primary)',
                              fontWeight: 500,
                              fontSize: '0.95rem',
                            }}
                          >
                            <span>{faq.question}</span>
                            <div style={{ color: 'var(--color-warm-brown)', flexShrink: 0 }}>
                              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                          </button>
                          {isOpen && (
                            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--color-ink-secondary)', lineHeight: 1.65 }}>
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Practice Note */}
      <section className="section theme-burgundy" style={{ padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container container-editorial" style={{ textAlign: 'center' }}>
          <span className="eyebrow eyebrow-light eyebrow-line" style={{ justifyContent: 'center' }}>
            DISCRETION & ETHICS
          </span>
          <h2 className="heading-2" style={{ color: 'var(--color-cream)', margin: '1rem auto', maxWidth: '720px' }}>
            High-Touch, Unhurried Care.
          </h2>
          <p className="text-lead" style={{ color: 'var(--color-ink-on-dark-secondary)', margin: '0 auto 2.5rem', maxWidth: '620px' }}>
            To preserve clinical depth and responsiveness, Nidhi maintains a strictly capped patient roster. Each therapeutic relationship receives thorough attentiveness.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem' }}>
            <button onClick={() => onOpenConsultation()} className="btn btn-primary">
              Begin a conversation
            </button>
            <button onClick={() => onNavigate('/start-here')} className="btn btn-secondary">
              Concierge orientation
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .service-details-col, .service-visual-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
