const QuizSummary = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="quiz-summary">
      <h1>Quiz Completed!</h1>
      <p>You scored {score} out of {totalQuestions}.</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default QuizSummary;