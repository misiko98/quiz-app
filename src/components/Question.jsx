import { useState } from 'react';
import QUESTIONS from '../data/questions.js';
import Answers from './Answers.jsx';
import QuestionTimer from './QuestionTimer.jsx';

const Question = ({ onSelect, index, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  const question = QUESTIONS[index];

  const handleSelectAnswer = (answer) => {
    // mark an answer as answered/selected
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    // mark selected answer as correct or wrong
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      //move to the next question
      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  };

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const getAnswerState = () => {
    if (!answer.selectedAnswer) return '';
    if (answer.isCorrect === null) return 'answered';
    return answer.isCorrect ? 'correct' : 'wrong';
  };

  const answerState = getAnswerState();

  return (
    <div className="question bg-gradient-to-b from-[#3e2a60] to-[#321061] p-8 rounded-lg shadow-customPurple max-w-[50rem] mx-auto text-center">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2 className="font-roboto text-2xl mb-8 text-[#c1b2dd]">
        {question?.text}
      </h2>
      <Answers
        answers={question?.answers}
        onSelect={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
      />
    </div>
  );
};

export default Question;
