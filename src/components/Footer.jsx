import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Brand */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-dot"></span>
            Quizora
          </div>
          <p className="tagline">Test your knowledge. Challenge your mind.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="link-column">
            <h4>PLATFORM</h4>
            <a href="#">Home</a>
            <p>Quizzes</p>
            <p>Leaderboard</p>
          </div>
          <div className="link-column">
            <h4>COMPANY</h4>
            <p>About</p>
          </div>
          <div className="link-column">
            <h4>LEGAL</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <div className="social-icons">
            <a href="#">𝕏</a>
            <a href="#">📘</a>
            <a href="#">📷</a>
          </div>
          <p className="copyright">© 2026 Quizora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}