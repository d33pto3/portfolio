import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Hero.css";

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
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const title = "FULL STACK DEVELOPER";

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-content">
        <h1 className="hero-title">
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="hero-word">
              {word.split("").map((char, charIndex) => (
                <span key={charIndex} className="hero-char-wrapper">
                  <span className="hero-char">{char}</span>
                </span>
              ))}
              {wordIndex < title.split(" ").length - 1 && (
                <span className="hero-char-wrapper">
                  <span className="hero-char">&nbsp;</span>
                </span>
              )}
            </span>
          ))}
        </h1>
        <p className="hero-subtitle">Building Digital Experiences</p>
      </div>
    </section>
  );
}
