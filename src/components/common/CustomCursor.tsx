import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center the cursor relative to the mouse using offsets
    // Assuming cursor is 16px wide/high (from CSS)
    const xSet = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const ySet = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xSet(e.clientX - 8); 
      ySet(e.clientY - 8);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is interactive
      // This includes standard interactive elements and specific 'data-hover' markers
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('[data-hover="true"]') ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    // Animate cursor scale based on hover state
    if (cursorRef.current) {
        gsap.to(cursorRef.current, {
            scale: isHovering ? 3 : 1,
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    }
  }, [isHovering]);

  return <div ref={cursorRef} className="custom-cursor" />;
}
