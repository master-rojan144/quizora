import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
  { name: "Science", icon: "🔬", color: "#a855f7", path: "/quiz/science" },
  { name: "History", icon: "🏛️", color: "#60a5fa", path: "#" },
  { name: "Geography", icon: "🌍", color: "#34d399", path: "#" },
  { name: "Movies & TV", icon: "🎬", color: "#f472b6", path: "#" },
  { name: "Sports", icon: "⚽", color: "#fbbf24", path: "#" },
  { name: "Technology", icon: "💻", color: "#c084fc", path: "#" },
];

export default function Categories() {
  return (
    <section id="categories" className="categories-section">
      <div className="section-header">
        <h2>Choose Your Arena</h2>
        <p>Pick a category and prove your mastery</p>
      </div>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card" style={{ '--accent-color': cat.color }}>
            <div className="icon-circle">
              <span className="category-icon">{cat.icon}</span>
            </div>
            <h3>{cat.name}</h3>
            <p>50 Questions • 10 seconds</p>
            
            {cat.path !== "#" ? (
              <Link to={cat.path} className="start-challenge-btn">
                Start Challenge
              </Link>
            ) : (
              <button className="start-challenge-btn" disabled>Coming Soon</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}