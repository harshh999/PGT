import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MultilingualIntro: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
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

    // Use gsap.context for complete cleanup and zero duplicate timeline state in React StrictMode
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: finishIntro,
      });

      // Initial state setup for the single text node
      gsap.set(textRef.current, { opacity: 0, y: 20 });

      // Step 1: "Welcome." enters gently (0.7s)
      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Hold "Welcome." (1.0s)
      tl.to({}, { duration: 1.0 });

      // Step 2: "Welcome." fades out and moves upward (0.4s)
      tl.to(textRef.current, {
        opacity: 0,
        y: -18,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          if (textRef.current) {
            textRef.current.textContent = 'You are safe here.';
            gsap.set(textRef.current, { opacity: 0, y: 18 });
          }
        },
      });

      // Step 3: "You are safe here." enters from below into center (0.5s)
      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });

      // Hold "You are safe here." (1.5s)
      tl.to({}, { duration: 1.5 });

      // Step 4: Upward physical maroon curtain reveal (1.15s)
      tl.to(overlayRef.current, {
        yPercent: -100,
        duration: 1.15,
        ease: 'power4.inOut',
      });
    }, overlayRef);

    return () => {
      ctx.revert();
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
      className="pgt-intro"
      role="presentation"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100svh',
        backgroundColor: '#6E232D',
        color: '#F6EFE9',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: 'auto',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <p
        ref={textRef}
        className="pgt-intro-text"
        style={{
          color: '#F6EFE9',
          fontFamily: '"Newsreader", "Cormorant Garamond", Georgia, serif',
          fontWeight: 400,
          textAlign: 'center',
          fontSize: 'clamp(46px, 8vw, 110px)',
          lineHeight: 0.98,
          letterSpacing: '-0.02em',
          margin: 0,
          padding: '0 24px',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          whiteSpace: 'nowrap',
          willChange: 'transform, opacity',
        }}
      >
        Welcome.
      </p>

      <style>{`
        @media (max-width: 767px) {
          .pgt-intro-text {
            font-size: clamp(42px, 11vw, 68px) !important;
            white-space: normal !important;
            word-break: break-word !important;
          }
        }
      `}</style>
    </div>
  );
};
