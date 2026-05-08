import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Quizora</h2>
          <p className="about-description">
            Quizora is a fun and engaging quiz platform designed to challenge your knowledge 
            across multiple categories. Whether you're a student, professional, or trivia lover, 
            Quizora helps you learn while having fun.
          </p>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Multiple Categories</h3>
              <p>Science, History, Geography, Movies, Sports, Technology & more</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⏱️</div>
              <h3>Timed Challenges</h3>
              <p>15 seconds per question to test your quick thinking</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Track Progress</h3>
              <p>Compete with friends and climb the leaderboard</p>
            </div>
          </div>

          <p className="mission">
            Our mission is to make learning addictive through gamification and friendly competition.
          </p>
        </div>
      </div>
    </section>
  );
}