import React from 'react';
import { ArrowUpRight, ShieldCheck, HeartHandshake, Compass, Sparkles } from 'lucide-react';

interface NidhiPageProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const NidhiPage: React.FC<NidhiPageProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="nidhi-page theme-cream" style={{ paddingTop: 'clamp(6rem, 12vw, 10rem)' }}>
      {/* Editorial Profile Hero */}
      <section className="section" style={{ paddingBottom: 'clamp(4rem, 7vw, 7rem)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(2rem, 5vw, 5rem)',
              alignItems: 'center',
            }}
          >
            <div style={{ gridColumn: 'span 7' }} className="nidhi-lead-col">
              <span className="eyebrow eyebrow-line" style={{ marginBottom: '1.25rem' }}>
                FOUNDER & CLINICIAN
              </span>
              <h1 className="heading-hero" style={{ marginBottom: '1.5rem', lineHeight: 1.02 }}>
                Nidhi Wadhwa
              </h1>
              <p
                className="font-editorial font-italic"
                style={{
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                  color: 'var(--color-warm-brown)',
                  marginBottom: '2rem',
                  lineHeight: 1.35,
                }}
              >
                "The quiet things that happen beneath the surface are almost always what determine where our relationships go."
              </p>
              <p className="text-body" style={{ fontSize: '1.08rem', lineHeight: 1.8, maxWidth: '640px', marginBottom: '2.5rem' }}>
                Nidhi is a psychotherapist, relationship specialist, and speaker. She works with discerning individuals, couples, and leaders who desire an intellectually rigorous, emotionally safe container to unpack relationship gridlock, personal thresholds, and psychological complexity.
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenConsultation} className="btn btn-primary">
                  <span>Begin a conversation</span>
                  <ArrowUpRight size={16} />
                </button>
                <button onClick={() => onNavigate('/the-work')} className="btn btn-secondary">
                  <span>Explore clinical modalities</span>
                </button>
              </div>
            </div>

            <div style={{ gridColumn: 'span 5' }} className="nidhi-hero-img-col">
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3 / 4',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  boxShadow: '0 24px 60px rgba(136, 102, 68, 0.16)',
                }}
              >
                <img
                  src="/images/nidhi-portrait.png"
                  alt="Nidhi Wadhwa Portrait"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Biography in Soft Pink Section */}
      <section className="section" style={{ backgroundColor: '#E9A3AD', color: '#6E232D', padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container container-editorial">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#6E232D', opacity: 0.65, letterSpacing: '0.05em' }}>01</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#6E232D', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>NARRATIVE & BACKGROUND</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.8vw, 3.5rem)',
              fontWeight: 400,
              color: '#6E232D',
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}
          >
            A practice grounded in emotional rigor.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', fontSize: '1.08rem', lineHeight: 1.85, color: '#6E232D' }}>
            <p>
              Before establishing Pretty Good Therapist, Nidhi trained extensively across psychodynamic psychotherapy, attachment theory, and emotionally focused couples systems. She observed early in her clinical practice that traditional, clinical therapy was often alienated from real human nuance—relying either on sterile medical jargon or superficial wellness positivity.
            </p>
            <p>
              Pretty Good Therapist was founded to bridge that gap: creating a private practice that feels as refined and intellectually thoughtful as an independent publication, while upholding the highest ethical and clinical standards of care.
            </p>
            <p>
              Her clinical style is direct, warm, and perceptive. Rather than nodding passively, she acts as an engaged, active collaborator—helping you identify the repetitive loops in your relationships, notice somatic distress signals before arguments escalate, and foster genuine self-trust.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Foundations Grid */}
      <section className="section" style={{ backgroundColor: '#F6EFE9', color: '#886644', padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container">
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#A99886', letterSpacing: '0.05em' }}>02</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#886644', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>THEORETICAL FRAMEWORK</span>
            </div>
            <h2 className="heading-2">Clinical Foundations & Methodology</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: HeartHandshake,
                title: 'Attachment & Relational Systems',
                description: 'Deconstructing early attachment injuries and how unconscious expectations manifest as defensive withdrawal or anxious protest.',
              },
              {
                icon: Compass,
                title: 'Emotionally Focused Therapy (EFT)',
                description: 'An evidence-based model centered on dismantling reactive cycles and creating sustainable emotional safety between partners.',
              },
              {
                icon: ShieldCheck,
                title: 'Psychodynamic Depth',
                description: 'Uncovering the underlying forces, defenses, and family-of-origin scripts that drive current choices and recurring conflicts.',
              },
              {
                icon: Sparkles,
                title: 'Somatic & Nervous System Attunement',
                description: 'Recognizing that cognitive insight alone is insufficient without regulating physiological fight-or-flight triggers.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(136, 102, 68, 0.04)',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ color: '#886644' }}>
                  <item.icon size={28} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 400, color: '#886644' }}>
                  {item.title}
                </h3>
                <p className="text-body" style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#937C66' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Chapter: Maroon Quote */}
      <section className="section" style={{ backgroundColor: '#6E232D', color: '#F6EFE9', padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        <div className="container container-editorial" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              color: '#F6EFE9',
              lineHeight: 1.35,
              marginBottom: '2.5rem',
            }}
          >
            "You do not have to conquer yourself. You simply have to learn how to inhabit your own life with honesty, courage, and grace."
          </p>
          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#E9A3AD' }}>
            Nidhi Wadhwa • Founder, Pretty Good Therapist
          </span>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .nidhi-lead-col, .nidhi-hero-img-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
