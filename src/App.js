import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import QuizPage from './pages/QuizPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ScienceQuizPage from './pages/ScienceQuizPage';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/science" element={<ScienceQuizPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;