'use client';

import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  // Variabel untuk tracking posisi
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const animateRing = () => {
      // Lerp (Linear Interpolation) untuk efek smooth
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      
      requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(28,110,243,0.8)';
    };

    const handleMouseLeave = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(28,110,243,0.5)';
    };

    // Event Listeners
    window.addEventListener('mousemove', onMouseMove);
    const animationFrame = requestAnimationFrame(animateRing);

    // Selektor untuk elemen yang interaktif
    const interactiveElements = document.querySelectorAll('a, button, .model-card, .color-swatch, .social-btn, .exp-link, .spec-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        id="cursor" 
        className="fixed w-[10px] h-[10px] bg-blue-600 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-300"
      />
      <div 
        ref={ringRef} 
        id="cursor-ring" 
        className="fixed w-[36px] h-[36px] border border-blue-600/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300"
      />
    </>
  );
};