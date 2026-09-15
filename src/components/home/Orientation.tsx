import React, { useState } from 'react';
interface OrientationProps {
  onSelectOption: (option: string, route: string) => void;
}

interface OrientationItem {
  id: string;
  headline: string;
  subtext: string;
  route: string;
  tag: string;
}

export const Orientation: React.FC<OrientationProps> = ({ onSelectOption }) => {
  const [activeId, setActiveId] = useState<string | null>('self');

  const options: OrientationItem[] = [
    {
      id: 'self',
      headline: 'Understanding Yourself',
      subtext: 'For personal patterns, emotions, identity, change, and everything happening beneath the surface.',
      route: '/work',
      tag: 'Individual Focus',
    },
    {
      id: 'relationship',
      headline: 'Understanding Your Relationship',
      subtext: 'For couples navigating distance, conflict, communication, or change together.',
      route: '/work',
      tag: 'Couples & Partnership',
    },
    {
      id: 'learn',
      headline: 'Exploring New Perspectives',
      subtext: 'For ideas, reflections, and writing on relationships, selfhood, and emotional life.',
      route: '/perspectives',
      tag: 'Editorial & Resources',
    },
    {
      id: 'work',
      headline: 'Working Together',
      subtext: 'For exploring therapy, professional collaboration, or other ways to connect with the practice.',
      route: '/contact',
      tag: 'Direct Practice & Speaking',
    },
  ];

  return (
    <section
      className="section theme-cream"
      style={{
        borderTop: '1px solid var(--border-subtle-light)',
        borderBottom: '1px solid var(--border-subtle-light)',
        paddingTop: 'clamp(4rem, 7vw, 7rem)',
        paddingBottom: 'clamp(4rem, 7vw, 7rem)',
      }}
    >
      <div className="container">
        {/* Header Eyebrow */}
        <div style={{ marginBottom: 'clamp(2rem, 3.5vh, 2.75rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#A99886', letterSpacing: '0.05em' }}>01</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#886644', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>ORIENTATION</span>
          </div>
          <h2 className="heading-2" style={{ maxWidth: '600px' }}>
            Where would you like to begin?
          </h2>
        </div>

        {/* Typographic Expandable List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {options.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => {
                  setActiveId(item.id);
                  onSelectOption(item.headline, item.route);
                }}
                style={{
                  borderTop: idx === 0 ? '1px solid var(--border-medium-light)' : 'none',
                  borderBottom: '1px solid var(--border-medium-light)',
                  paddingTop: 'clamp(1.75rem, 3vw, 2.5rem)',
                  paddingBottom: 'clamp(1.75rem, 3vw, 2.5rem)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, padding 0.3s ease',
                  position: 'relative',
                  backgroundColor: isActive ? 'rgba(136, 102, 68, 0.04)' : 'transparent',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    alignItems: 'baseline',
                    gap: 'clamp(1rem, 2vw, 2.5rem)',
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: isActive ? 'var(--color-warm-brown)' : 'var(--color-ink-muted)',
                      fontWeight: 600,
                    }}
                  >
                    0{idx + 1}
                  </span>

                  {/* Headline & Expandable Subtext */}
                  <div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.75rem)',
                        fontWeight: isActive ? 400 : 300,
                        color: isActive ? 'var(--color-ink-primary)' : 'var(--color-ink-secondary)',
                        transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease',
                      }}
                    >
                      {item.headline}
                    </h3>

                    {/* Supporting Narrative */}
                    <div
                      style={{
                        maxHeight: isActive ? '120px' : '0px',
                        opacity: isActive ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        marginTop: isActive ? '0.75rem' : '0',
                      }}
                    >
                      <p
                        className="text-body"
                        style={{
                          maxWidth: '680px',
                          color: 'var(--color-ink-secondary)',
                          fontSize: '1rem',
                        }}
                      >
                        {item.subtext}
                      </p>
                    </div>
                  </div>

                  {/* Tag & Action Arrow */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      opacity: isActive ? 1 : 0.4,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <span
                      style={{
                        display: 'none',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--color-warm-brown)',
                        fontWeight: 600,
                      }}
                      className="orientation-tag"
                    >
                      {item.tag}
                    </span>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        lineHeight: 1,
                        color: isActive ? 'var(--color-warm-brown)' : 'var(--color-ink-muted)',
                        transform: isActive ? 'translateX(8px)' : 'none',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      &rarr;
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .orientation-tag {
            display: inline-block !important;
          }
        }
      `}</style>
    </section>
  );
};
