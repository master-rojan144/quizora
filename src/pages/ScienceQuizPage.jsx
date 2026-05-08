import React, { useState, useEffect } from 'react';
import './ScienceQuizPage.css';

const scienceQuestions = [
  { question: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" },
  { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
  { question: "What gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { question: "What is the atomic number of Carbon?", options: ["6", "8", "12", "14"], answer: "6" },
  { question: "Which organ pumps blood in the human body?", options: ["Liver", "Heart", "Kidney", "Lungs"], answer: "Heart" },
  { question: "What is H₂O commonly known as?", options: ["Salt", "Water", "Sugar", "Oxygen"], answer: "Water" },
  { question: "What is the speed of light approximately?", options: ["150,000 km/s", "299,792 km/s", "500,000 km/s", "1,000,000 km/s"], answer: "299,792 km/s" },
  { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
  { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"], answer: "Mitochondria" },
  { question: "What is the main gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" },
  { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dynamic Nuclear Assembly", "Digital Neural Algorithm", "Deoxyribose Nucleic Acid"], answer: "Deoxyribonucleic Acid" },
  { question: "What is the pH of pure water?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which element has the symbol 'Fe'?", options: ["Fluorine", "Iron", "Francium", "Fermium"], answer: "Iron" },
  { question: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Skin", "Liver"], answer: "Skin" },
  { question: "What force keeps planets in orbit around the Sun?", options: ["Magnetism", "Gravity", "Electricity", "Friction"], answer: "Gravity" },
  { question: "What is the chemical formula for table salt?", options: ["NaCl", "H2O", "CO2", "HCl"], answer: "NaCl" },
  { question: "Which blood type is known as the universal donor?", options: ["A+", "B-", "O-", "AB+"], answer: "O-" },
  { question: "What is the study of living organisms called?", options: ["Physics", "Chemistry", "Biology", "Geology"], answer: "Biology" },
  { question: "What is the unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], answer: "Ampere" },
  { question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], answer: "Vitamin D" },
  { question: "What is the chemical symbol for Silver?", options: ["Si", "Sv", "Ag", "Au"], answer: "Ag" },
  { question: "What is the smallest unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], answer: "Cell" },
  { question: "What planet is the hottest in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
  { question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"], answer: "Photosynthesis" },
  { question: "What is the human body's largest bone?", options: ["Femur", "Tibia", "Humerus", "Skull"], answer: "Femur" },
  { question: "What is the speed of sound in air (approx)?", options: ["343 m/s", "500 m/s", "1500 m/s", "3000 m/s"], answer: "343 m/s" },
  { question: "What element is diamond made of?", options: ["Carbon", "Silicon", "Oxygen", "Nitrogen"], answer: "Carbon" },
  { question: "What is the center of an atom called?", options: ["Electron", "Proton", "Neutron", "Nucleus"], answer: "Nucleus" },
  { question: "Which blood cells carry oxygen?", options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"], answer: "Red blood cells" },
  { question: "What is the chemical symbol for Potassium?", options: ["P", "Po", "K", "Pt"], answer: "K" },
  { question: "What is the study of fossils called?", options: ["Biology", "Paleontology", "Archaeology", "Geology"], answer: "Paleontology" },
  { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Newton" },
  { question: "What planet is famous for its rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
  { question: "What is the main component of the Sun?", options: ["Oxygen", "Helium", "Hydrogen", "Carbon"], answer: "Hydrogen" },
  { question: "What is the human skeleton made up of?", options: ["Muscles", "Bones", "Cartilage", "Tendons"], answer: "Bones" },
  { question: "What is the chemical symbol for Sodium?", options: ["So", "Sd", "Na", "Sa"], answer: "Na" },
  { question: "What causes tides on Earth?", options: ["Wind", "Moon's gravity", "Sun's heat", "Earth's rotation"], answer: "Moon's gravity" },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
  { question: "What is the process of cell division called?", options: ["Mitosis", "Photosynthesis", "Respiration", "Digestion"], answer: "Mitosis" },
  { question: "What is the unit of energy?", options: ["Newton", "Joule", "Watt", "Ampere"], answer: "Joule" },
  { question: "What is the main gas exhaled by humans?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
  { question: "What is the study of weather called?", options: ["Geology", "Meteorology", "Astronomy", "Biology"], answer: "Meteorology" },
  { question: "What is the chemical symbol for Iron?", options: ["Ir", "Fe", "In", "I"], answer: "Fe" },
  { question: "What protects the Earth from harmful UV rays?", options: ["Ozone Layer", "Clouds", "Atmosphere", "Magnetic Field"], answer: "Ozone Layer" },
  { question: "What is the basic unit of heredity?", options: ["Chromosome", "Gene", "DNA", "Cell"], answer: "Gene" },
  { question: "What is the freezing point of water?", options: ["0°C", "32°C", "-10°C", "100°C"], answer: "0°C" },
  { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" }
];

export default function ScienceQuizPage() {
  const [questions] = useState(scienceQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (quizCompleted || isAnswered) return;

    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, isAnswered, quizCompleted]);

  const handleAnswer = (option) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(handleNext, 1800);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(10);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(10);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-page result-screen">
        <div className="result-card">
          <h1>Science Quiz Completed!</h1>
          <div className="score-circle">
            <span className="score">{score}</span>
            <span className="total">/{questions.length}</span>
          </div>
          <p className="percentage">{percentage}%</p>
          <p className="message">
            {percentage >= 80 ? "Outstanding Performance! 🧪" : 
             percentage >= 60 ? "Well Done! 👏" : 
             "Keep Learning! You can do better 💪"}
          </p>
          <button onClick={restartQuiz} className="restart-btn">Play Again</button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const correctAnswer = currentQ.answer;

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <span className="question-count">Question {currentQuestion + 1} / {questions.length}</span>
          <div className="timer">⏱️ {timeLeft}s</div>
        </div>

        <div className="progress-bar">
          <div className="progress" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
        </div>

        <h2 className="question">{currentQ.question}</h2>

        <div className="options-grid">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === correctAnswer;

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className={`option-btn 
                  ${isSelected && !isCorrect ? 'wrong' : ''}
                  ${isCorrect && isAnswered ? 'correct' : ''}
                `}
                disabled={isAnswered}
              >
                {option}
                {isAnswered && isCorrect && <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>✓</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}