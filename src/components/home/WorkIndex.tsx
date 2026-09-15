import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { therapyServices } from '../../data/services';

interface WorkIndexProps {
  onSelectService: (slug: string) => void;
  onExploreAll: () => void;
}

export const WorkIndex: React.FC<WorkIndexProps> = ({ onSelectService, onExploreAll }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = therapyServices[activeIdx] || therapyServices[0];

  return (
    <section
      style={{
        backgroundColor: '#6E232D',
        color: '#F6EFE9',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(5rem, 8vw, 8rem)',
        borderTop: '1px solid rgba(246, 239, 233, 0.15)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#A99886', letterSpacing: '0.05em' }}>02</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#E9A3AD', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>AREAS OF PRACTICE</span>
            </div>
            <h2 className="heading-1" style={{ color: '#F6EFE9' }}>The Work</h2>
          </div>

          <button onClick={onExploreAll} className="editorial-link" style={{ fontSize: '0.95rem', color: '#F6EFE9' }}>
            <span>View complete practice overview</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Dynamic Dual-Column Editorial Stage */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Numbered Editorial Index */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="work-index-list-col"
          >
            {therapyServices.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => onSelectService(service.slug)}
                  style={{
                    borderTop: idx === 0 ? '1px solid rgba(246, 239, 233, 0.2)' : 'none',
                    borderBottom: '1px solid rgba(246, 239, 233, 0.2)',
                    paddingTop: 'clamp(1.75rem, 2.8vw, 2.5rem)',
                    paddingBottom: 'clamp(1.75rem, 2.8vw, 2.5rem)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isActive ? 'rgba(233, 163, 173, 0.08)' : 'transparent',
                    paddingLeft: isActive ? '1.25rem' : '0.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1rem, 2vw, 2rem)' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: isActive ? '#E9A3AD' : '#A99886',
                        }}
                      >
                        {service.order}
                      </span>
                      <div>
                        <h3
                          className="font-display"
                          style={{
                            fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                            fontWeight: isActive ? 400 : 300,
                            color: isActive ? '#E9A3AD' : '#F6EFE9',
                            transition: 'color 0.25s ease',
                          }}
                        >
                          {service.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'var(--font-editorial)',
                            fontStyle: 'italic',
                            fontSize: '1.05rem',
                            color: '#A99886',
                            marginTop: '0.25rem',
                          }}
                        >
                          {service.shortDescription}
                        </p>
                      </div>
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
                        color: isActive ? '#E9A3AD' : '#A99886',
                        transform: isActive ? 'translate(4px, -4px)' : 'none',
                        transition: 'all 0.25s ease',
                        flexShrink: 0,
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Responsive Editorial Image Preview & Context */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
            className="work-preview-col"
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                borderRadius: '16px',
                position: 'relative',
                boxShadow: '0 20px 48px rgba(136, 102, 68, 0.15)',
              }}
            >
              <img
                key={activeService.id}
                src={activeService.heroImage}
                alt={activeService.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: 'contrast(1.02) saturate(0.95)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  backgroundColor: 'rgba(38, 16, 21, 0.88)',
                  backdropFilter: 'blur(10px)',
                  color: 'var(--color-cream)',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-muted-taupe)' }}>
                  Session Structure
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-cream)', marginTop: '0.2rem' }}>
                  {activeService.format}
                </p>
              </div>
            </div>

            <p className="text-body" style={{ color: 'var(--color-ink-secondary)', fontSize: '0.95rem' }}>
              {activeService.description}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 860px) {
          .work-grid-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .work-index-list-col {
            grid-column: span 1 !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }
          .work-preview-col {
            grid-column: span 1 !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  );
};
