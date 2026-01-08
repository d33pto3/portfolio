import { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  const [copied, setCopied] = useState(false);
  const email = "rakinfrhn@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="about-me-section">
      <div className="about-me-content">
        <div className="about-me-text">
          <p className="bio-text">
            I'm Rakin, a Full Stack Developer from Bangladesh with 3 years of
            experience. I am passionate about creating web applications that are
            both functional and visually appealing. I have a strong background
            in software development and a keen eye for detail. I am always
            looking for new challenges and opportunities to learn and grow.
          </p>
          <Link to="/about" className="more-about-link">
            <p>More about me</p>
            <span className="link-arrow">↗</span>
          </Link>
        </div>

        <div className="contact-info">
          <p className="contact-label">
            Get in touch <span className="label-hint">(Click to Copy)</span>
          </p>
          <div className="email-container" onClick={handleCopyEmail}>
            <p className="email-text">{copied ? "Email Copied!" : email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
