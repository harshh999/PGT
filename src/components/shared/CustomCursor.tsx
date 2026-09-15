import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const render = () => {
      // Lerp for outer ring
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovered ? 1.9 : 1})`;
      }

      rafId = requestAnimationFrame(render);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.closest('a') || target.closest('button') || target.closest('.interactive') || target.getAttribute('role') === 'button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeaveWindow = () => setIsVisible(false);
    const onMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      cancelAnimationFrame(rafId);
    };
  }, [isHovered, isVisible]);

  return (
    <div 
      className="custom-cursor-container" 
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      aria-hidden="true"
    >
      <div
        ref={cursorDotRef}
        style={{
          position: 'absolute',
          top: -3,
          left: -3,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'var(--color-warm-brown)',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
      <div
        ref={cursorRingRef}
        style={{
          position: 'absolute',
          top: -16,
          left: -16,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid var(--color-warm-brown)',
          opacity: isHovered ? 0.6 : 0.3,
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'border-color 0.2s ease, opacity 0.2s ease',
        }}
      />
    </div>
  );
};
