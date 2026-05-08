import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when clicking Home
  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMobileOpen(false);
  };

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  return (
    <header className="header">
      <div className={`header-inner ${scrolled ? 'scrolled' : ''}`}>

        {/* Logo - Goes to top of Home */}
        <Link to="/" className="logo" onClick={goToHome}>
          <span className="logo-dot"></span>
          Quizora
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav">
          <Link to="/" className="nav-link" onClick={goToHome}>Home</Link>
          
          <a 
            href="#categories" 
            className="nav-link"
            onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}
          >
            Quizzes
          </a>
          
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
          
          <a 
            href="#about" 
            className="nav-link"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>

      </div>
    </header>
  );
}