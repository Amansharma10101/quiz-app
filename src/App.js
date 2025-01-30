import React, { useState } from 'react';
import { useQuizData } from './hooks/useQuizData';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizSummary from './components/QuizSummary';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const { quizData, loading, error } = useQuizData();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption.is_correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setQuizStarted(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading quiz data.</div>;

  return (
    <div className="app">
      <Header />
      {!quizStarted ? (
        <QuizStart onStart={handleStart} />
      ) : quizCompleted ? (
        <QuizSummary score={score} totalQuestions={quizData.length} onRestart={handleRestart} />
      ) : (
        <QuizQuestion
          question={quizData[currentQuestionIndex].description}
          options={quizData[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;