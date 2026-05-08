import React, { useState, useEffect } from 'react';
import './QuizPage.css';

const quizData = {
  Easy: [
    { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: "Paris" },
    { question: "What is 5 + 7?", options: ["10", "11", "12", "13"], answer: "12" },
    { question: "Which is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "What color is the sky on a clear day?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Blue" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Tiger", "Leopard"], answer: "Cheetah" },
    { question: "What is H2O?", options: ["Salt", "Water", "Sugar", "Oxygen"], answer: "Water" },
    { question: "How many days are in a week?", options: ["5", "6", "7", "8"], answer: "7" }
  ],
  Medium: [
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
    { question: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
    { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Rembrandt"], answer: "Leonardo da Vinci" },
    { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
    { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
    { question: "What year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: "1945" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen" },
    { question: "Who discovered Penicillin?", options: ["Newton", "Einstein", "Alexander Fleming", "Marie Curie"], answer: "Alexander Fleming" },
    { question: "What is the largest desert in the world?", options: ["Gobi", "Sahara", "Antarctica", "Kalahari"], answer: "Antarctica" },
    { question: "What is the speed of light?", options: ["299,792 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], answer: "299,792 km/s" }
  ],
  Hard: [
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
    { question: "Which element has the atomic number 79?", options: ["Silver", "Platinum", "Gold", "Copper"], answer: "Gold" },
    { question: "In which year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], answer: "2007" },
    { question: "What is the capital of Bhutan?", options: ["Thimphu", "Kathmandu", "Dhaka", "Colombo"], answer: "Thimphu" },
    { question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Hawking"], answer: "Einstein" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
    { question: "Which country has the most time zones?", options: ["USA", "Russia", "China", "France"], answer: "France" },
    { question: "What is the pH level of pure water?", options: ["6", "7", "8", "9"], answer: "7" },
    { question: "Who was the first person to walk on the Moon?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"], answer: "Neil Armstrong" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" }
  ]
};

export default function QuizPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Timer
  useEffect(() => {
    if (!selectedCategory || quizCompleted) return;

    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, isAnswered, selectedCategory, quizCompleted]);

  const startQuiz = (category) => {
    setSelectedCategory(category);
    setQuestions(quizData[category]);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizCompleted(false);
  };

  const handleAnswer = (option) => {
    if (isAnswered) return;
    
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(handleNext, 1400);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(15);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setSelectedCategory(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  // Category Selection Screen
  if (!selectedCategory) {
    return (
      <div className="quiz-page category-selection">
        <div className="selection-container">
          <h1>Choose Difficulty</h1>
          <p>Select your challenge level</p>

          <div className="categories">
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <div 
                key={level}
                className={`category-card ${level}`}
                onClick={() => startQuiz(level)}
              >
                <h2>{level}</h2>
                <p>10 Questions • 15 seconds each</p>
                <button className="start-category-btn">Start {level} Quiz</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-page result-screen">
        <div className="result-card">
          <h1>Quiz Completed!</h1>
          <h2>{selectedCategory} Level</h2>
          
          <div className="score-display">
            <span className="score">{score}</span>
            <span className="total">/10</span>
          </div>
          <p className="percentage">{percentage}%</p>

          <p className="message">
            {percentage >= 80 ? "Legendary Performance! 🏆" : 
             percentage >= 60 ? "Great Job! 👏" : 
             "Keep Practicing! 💪"}
          </p>

          <button onClick={restartQuiz} className="restart-btn">
            Play Another Category
          </button>
        </div>
      </div>
    );
  }

  // Quiz Playing Screen
  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <div>
            <span className="level-badge">{selectedCategory}</span>
            <span className="question-count">Question {currentQuestion + 1} / 10</span>
          </div>
          <div className="timer">⏱️ {timeLeft}s</div>
        </div>

        <div className="progress-bar">
          <div className="progress" style={{ width: `${((currentQuestion + 1) / 10) * 100}%` }}></div>
        </div>

        <h2 className="question">{questions[currentQuestion].question}</h2>

        <div className="options-grid">
          {questions[currentQuestion].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className={`option-btn ${
                selectedAnswer === option 
                  ? option === questions[currentQuestion].answer ? 'correct' : 'wrong'
                  : ''
              }`}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}