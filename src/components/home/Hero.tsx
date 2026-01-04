import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text reveal
      gsap.from(".hero-char", {
        y: 200,
        opacity: 0,
        rotate: 5,
        duration: 1.5,
        stagger: 0.05,
        ease: "power4.out",
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderTitle = () => {
    const words = ["FULL", "STACK", "DEVELOPER"];
    const result: React.ReactNode[] = [];
    
    words.forEach((word, wordIndex) => {
      // Add each character of the word
      word.split("").forEach((char, charIndex) => {
        result.push(
          <span key={`char-${wordIndex}-${charIndex}`} className="hero-char-wrapper">
            <span className="hero-char">{char}</span>
          </span>
        );
      });
      
      // Add responsive breaks after each word
      if (wordIndex === 0) {
        // Break after "FULL" - hidden on large, visible on medium and small
        result.push(<br key="break-1" className="break-medium" />);
      } else if (wordIndex === 1) {
        // Space between "FULL" and "STACK" on large screens
        result.push(
          <span key="space-1" className="hero-char-wrapper space-large">
            <span className="hero-char">&nbsp;</span>
          </span>
        );
        // Break after "STACK" - hidden on large and medium, visible on small
        result.push(<br key="break-2" className="break-small" />);
      } else if (wordIndex < words.length - 1) {
        // Space between other words
        result.push(
          <span key={`space-${wordIndex}`} className="hero-char-wrapper">
            <span className="hero-char">&nbsp;</span>
          </span>
        );
      }
    });
    
    return result;
  };

  return (
    <section className="hero" ref={containerRef}>
      <h1 className="hero-title">
        {renderTitle()}
      </h1>
      <p className="hero-subtitle">
        Building Digital Experiences
      </p>
    </section>
  );
}
