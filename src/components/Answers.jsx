import { useRef } from 'react';

const Answers = ({ answers, onSelect, answerState, selectedAnswer }) => {
  const shuffledAnswers = useRef();

  // shuffle answers
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    answers.length > 0 && (
      <ul className="answers flex  flex-col gap-2 items-center">
        {shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswer === answer;

          // base styling
          let classes =
            'inline-block px-8 py-4 w-full rounded-3xl transition-all duration-200 ease-in-out text-[#2c203d]';

          //default styling
          if (!isSelected) {
            classes += ' bg-[#6cb7f5] hover:bg-[#9d5af5] hover:text-white';
          }

          //selected styling
          if (isSelected && answerState === 'answered') {
            classes += ' bg-[#f5a76c]';
          }

          //correct or wrong styling
          if (
            isSelected &&
            (answerState === 'correct' || answerState === 'wrong')
          ) {
            classes +=
              answerState === 'correct' ? ' bg-[#5af59d]' : ' bg-[#f55a98]';
          }

          return (
            <li key={answer} className="w-[90%] mx-auto">
              <button onClick={() => onSelect(answer)} className={classes}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Answers;
