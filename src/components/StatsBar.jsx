import React from 'react';
import './StatsBar.css';

const StatsBar = () => {
  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-num">10</div>
        <div className="stat-label">QUESTIONS</div>
      </div>

      <div className="divider"></div>

      <div className="stat">
        <div className="stat-num">3</div>
        <div className="stat-label">CATEGORIES</div>
      </div>

      <div className="divider"></div>

      <div className="stat">
        <div className="stat-num">15s</div>
        <div className="stat-label">PER QUESTION</div>
      </div>
    </div>
  );
};

export default StatsBar;