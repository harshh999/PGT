import React, { useState } from 'react';
import { ArrowRight, Check, ArrowLeft } from 'lucide-react';

interface StartHereFlowProps {
  onComplete: (answers: { step1: string; step2: string }) => void;
  onNavigate: (path: string) => void;
  onOpenConsultation: (service?: string) => void;
}

export const StartHereFlow: React.FC<StartHereFlowProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Answer, setStep1Answer] = useState<string | null>(null);
  const [step2Answer, setStep2Answer] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const step1Options = [
    {
      label: 'I want support for myself',
      subtext: 'Exploring personal patterns, emotional fatigue, identity thresholds, or unspoken grief.',
    },
    {
      label: 'I want support for my relationship',
      subtext: 'Addressing repetitive arguments, emotional withdrawal, intimacy loss, or future decisions.',
    },
    {
      label: "I'm navigating a major transition",
      subtext: 'Relocation, career threshold, parenthood, separation, or significant life renegotiation.',
    },
    {
      label: "I'm not sure yet",
      subtext: 'Feeling an intuitive sense that something needs to shift, without a clear vocabulary for it.',
    },
  ];

  const step2Options = [
    {
      label: 'Work with Nidhi',
      subtext: 'Schedule an initial confidential consultation for private therapy.',
      action: () => onOpenConsultation(step1Answer || 'Therapy Inquiry'),
    },
    {
      label: 'Explore resources',
      subtext: 'Browse the curated library of recommended reading, essays, and clinical frameworks.',
      action: () => onNavigate('/library'),
    },
    {
      label: "Read Nidhi's perspectives",
      subtext: 'Deep dive into long-form essays on relationship dynamics and human behavior.',
      action: () => onNavigate('/journal'),
    },
    {
      label: 'Make a professional enquiry',
      subtext: 'Inquire regarding executive advisory, organizational keynotes, or media commentary.',
      action: () => onNavigate('/speaking'),
    },
  ];

  const handleSelectStep1 = (option: string) => {
    setStep1Answer(option);
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleSelectStep2 = (option: string, action: () => void) => {
    setStep2Answer(option);
    setIsFinished(true);
    setTimeout(() => {
      action();
    }, 800);
  };

  return (
    <div
      className="start-here-flow theme-cream"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(6rem, 12vw, 9rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        position: 'relative',
      }}
    >
      <div className="container container-editorial" style={{ width: '100%' }}>
        {/* Top Progress Indication */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {currentStep > 1 && !isFinished && (
              <button
                onClick={() => setCurrentStep(1)}
                className="editorial-link"
                style={{ fontSize: '0.82rem', marginRight: '1rem' }}
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            )}
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
              Concierge Orientation • Step 0{currentStep} of 02
            </span>
          </div>

          <button onClick={() => onNavigate('/')} className="editorial-link" style={{ fontSize: '0.82rem' }}>
            Exit flow
          </button>
        </div>

        {/* Step 1 Question */}
        {currentStep === 1 && (
          <div style={{ animation: 'stepFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <span className="eyebrow eyebrow-line" style={{ marginBottom: '1rem' }}>
              STEP 01
            </span>
            <h1 className="heading-hero" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
              What brings you here?
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {step1Options.map((opt, idx) => {
                const isSelected = step1Answer === opt.label;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectStep1(opt.label)}
                    style={{
                      border: isSelected ? '1px solid var(--color-burgundy)' : '1px solid var(--border-medium-light)',
                      backgroundColor: isSelected ? 'rgba(136, 102, 68, 0.08)' : 'var(--color-cream-light)',
                      padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                      borderRadius: 'var(--radius-xs)',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1.5rem',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', fontWeight: 400, color: 'var(--color-ink-primary)' }}>
                        {opt.label}
                      </h3>
                      <p className="text-body" style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', marginTop: '0.35rem' }}>
                        {opt.subtext}
                      </p>
                    </div>

                    <div
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        border: '1px solid currentColor',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSelected ? 'var(--color-burgundy)' : 'var(--color-ink-muted)',
                        flexShrink: 0,
                      }}
                    >
                      {isSelected ? <Check size={16} /> : <ArrowRight size={16} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2 Question */}
        {currentStep === 2 && !isFinished && (
          <div style={{ animation: 'stepFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <span className="eyebrow eyebrow-line" style={{ marginBottom: '1rem' }}>
              STEP 02
            </span>
            <h1 className="heading-hero" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
              What would you like to do next?
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {step2Options.map((opt, idx) => {
                const isSelected = step2Answer === opt.label;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectStep2(opt.label, opt.action)}
                    style={{
                      border: isSelected ? '1px solid var(--color-burgundy)' : '1px solid var(--border-medium-light)',
                      backgroundColor: isSelected ? 'rgba(136, 102, 68, 0.08)' : 'var(--color-cream-light)',
                      padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                      borderRadius: 'var(--radius-xs)',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1.5rem',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', fontWeight: 400, color: 'var(--color-ink-primary)' }}>
                        {opt.label}
                      </h3>
                      <p className="text-body" style={{ fontSize: '0.9rem', color: 'var(--color-ink-secondary)', marginTop: '0.35rem' }}>
                        {opt.subtext}
                      </p>
                    </div>

                    <div
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        border: '1px solid currentColor',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSelected ? 'var(--color-burgundy)' : 'var(--color-ink-muted)',
                        flexShrink: 0,
                      }}
                    >
                      <ArrowRight size={16} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Finished Confirmation */}
        {isFinished && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', animation: 'stepFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(136, 102, 68, 0.12)',
                color: 'var(--color-warm-brown)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <Check size={28} />
            </div>
            <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
              Guiding you forward...
            </h2>
            <p className="text-body" style={{ color: 'var(--color-ink-secondary)' }}>
              Preparing the tailored path for your inquiry.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes stepFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
