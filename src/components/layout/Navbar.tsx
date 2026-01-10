import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Navbar.css";

import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="navbar-logo" data-hover="true">
          <Link to="/">RAKIN FARHAN</Link>
        </div>
        <div className="navbar-links">
          <Link to="/about" data-hover="true">
            About
          </Link>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            data-hover="true"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
