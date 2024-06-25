import { useCallback, useState } from 'react';
import QUESTIONS from '../data/questions.js';
import Question from './Question';
import Summary from './Summary.jsx';

const Quiz = () => {
  const [answers, setAnswers] = useState([]);

  const handleSelectAnswer = useCallback(
    (selectedAnswer) =>
      setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]),
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const activeQuestionIndex = answers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return <Summary userAnswers={answers} />;
  }

  return (
    <div className="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelect={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
