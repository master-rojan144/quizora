import React from 'react';
import { Link } from 'react-router-dom';
import './StartButton.css';

function StartButton() {
  return (
    <Link to="/quiz" className="start-btn">
      Start Quiz
    </Link>
  );
}

export default StartButton;