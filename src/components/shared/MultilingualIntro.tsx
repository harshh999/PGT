import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Greeting {
  text: string;
  lang: string;
}

const GREETINGS: Greeting[] = [
  { text: 'Hello', lang: 'en' },
  { text: 'Bonjour', lang: 'fr' },
  { text: 'Hola', lang: 'es' },
  { text: 'Ciao', lang: 'it' },
  { text: 'Namaste', lang: 'hi' },
  { text: 'नमस्ते', lang: 'hi-Deva' },
  { text: 'こんにちは', lang: 'ja' },
  { text: 'مرحبا', lang: 'ar' },
];

export const MultilingualIntro: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro sequence in this session
    const hasSeen = sessionStorage.getItem('pgt_intro_seen');
    if (hasSeen === 'true') {
      setIsDone(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lock page scroll during intro
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if ((window as any).lenis) {
      (window as any).lenis.stop();
    }

    const finishIntro = () => {
      sessionStorage.setItem('pgt_intro_seen', 'true');
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

    // Step 1: Animate first word ("Hello") in
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );

    // Step 2: Iterate through remaining greetings (indices 1 to 7)
    GREETINGS.forEach((greeting, idx) => {
      if (idx === 0) return;

      // Hold previous word
      tl.to({}, { duration: 0.48 });

      // Animate out previous word
      tl.to(textRef.current, {
        opacity: 0,
        y: -18,
        duration: 0.35,
        ease: 'power2.inOut',
        onComplete: () => {
          if (textRef.current) {
            textRef.current.textContent = greeting.text;
          }
        },
      });

      // Animate in new word
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power2.inOut' }
      );
    });

    // Step 3: Hold final word ("مرحبا") briefly
    tl.to({}, { duration: 0.5 });

    // Step 4: Upward curtain reveal animation
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
        className="intro-greeting-wrapper"
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
            fontFamily:
              '"Newsreader", "Cormorant Garamond", "Noto Serif Devanagari", "Noto Sans JP", "Noto Naskh Arabic", Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(52px, 8.5vw, 120px)',
            lineHeight: 0.95,
            letterSpacing: '-0.025em',
            color: '#F6EFE9',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            willChange: 'transform, opacity',
          }}
        >
          {GREETINGS[0].text}
        </span>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .intro-greeting-wrapper span {
            font-size: clamp(42px, 12vw, 68px) !important;
            white-space: normal !important;
            word-break: break-word !important;
          }
        }
      `}</style>
    </div>
  );
};
