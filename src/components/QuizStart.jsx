const QuizStart = ({ onStart }) => {
  return (
    <div className="quiz-start">
      <h1>Welcome to the Quiz!</h1>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
};

export default QuizStart;