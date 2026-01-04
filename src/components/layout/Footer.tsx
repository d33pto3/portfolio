
import { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "hello@rakinfarhan.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-cta">Let's work<br />together</h2>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button 
            onClick={handleCopy} 
            className="footer-link" 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            data-hover="true"
          >
            {email}
          </button>
          {copied && (
            <span style={{ 
              position: 'absolute', 
              top: '50%', 
              right: '-60px', 
              transform: 'translateY(-50%)',
              fontSize: '0.8rem',
              color: 'var(--color-text)',
              opacity: 0.7
            }}>
              Copied
            </span>
          )}
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-copyright">
          © Rakin Farhan {new Date().getFullYear()}
        </div>
        <div className="footer-bottom-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-hover="true">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-hover="true">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-hover="true">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
