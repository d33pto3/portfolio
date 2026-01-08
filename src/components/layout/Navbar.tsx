import { Link } from "react-router-dom";
import "./Navbar.css";

import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
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
    </nav>
  );
}
