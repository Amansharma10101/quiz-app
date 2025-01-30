const QuizQuestion = ({ question, options, onAnswer }) => {
  return (
    <div className="quiz-question">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onAnswer(option)}>
            {option.description} {/* Display the option description */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;