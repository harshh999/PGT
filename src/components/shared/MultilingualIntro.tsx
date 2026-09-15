import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MultilingualIntro: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lock page scroll immediately during intro initialization
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if ((window as any).lenis) {
      (window as any).lenis.stop();
    }

    const finishIntro = () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
      if (overlayRef.current) {
        overlayRef.current.style.display = 'none';
        overlayRef.current.style.pointerEvents = 'none';
      }
      ScrollTrigger.refresh();
      setIsDone(true);
    };

    if (prefersReducedMotion) {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: finishIntro,
        });
      } else {
        finishIntro();
      }
      return;
    }

    const tl = gsap.timeline({
      onComplete: finishIntro,
    });

    // Stage 1: "Welcome." fades and slides gently in (0.7s)
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );

    // Hold "Welcome." (0.8s)
    tl.to({}, { duration: 0.8 });

    // Transition: Outgoing "Welcome." (0.55s) -> Incoming "You are safe here." (0.55s)
    tl.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.55,
      ease: 'power3.inOut',
      onComplete: () => {
        if (textRef.current) {
          textRef.current.textContent = 'You are safe here.';
        }
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power3.inOut' }
    );

    // Stage 2: Hold "You are safe here." for visitor to read and feel (1.5s)
    tl.to({}, { duration: 1.5 });

    // Stage 3: Upward physical curtain reveal (1.15s)
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 1.15,
      ease: 'power4.inOut',
    });

    return () => {
      tl.kill();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  if (isDone) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      role="presentation"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100svh',
        backgroundColor: '#6E232D',
        color: '#F6EFE9',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: 'auto',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <div
        className="intro-text-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '100%',
          padding: '0 24px',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <span
          ref={textRef}
          style={{
            display: 'inline-block',
            fontFamily: '"Newsreader", "Cormorant Garamond", Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(48px, 8vw, 110px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: '#F6EFE9',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            willChange: 'transform, opacity',
          }}
        >
          Welcome.
        </span>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .intro-text-wrapper span {
            font-size: clamp(42px, 11vw, 68px) !important;
            white-space: normal !important;
            word-break: break-word !important;
          }
        }
      `}</style>
    </div>
  );
};
