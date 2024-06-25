import QUESTIONS from '../data/questions';

const UserAnswersList = ({ userAnswers }) => {
  return (
    <ol className="my-8 text-center">
      {userAnswers.map((answer, index) => {
        //base styling
        let cssClasses =
          'user-answer my-1 font-roboto font-bold text-[#251e2f]';

        //skipped
        if (!answer) {
          cssClasses += ' text-[#d1baf2] font-normal';
        }

        // correct or wrong
        if (answer) {
          cssClasses +=
            QUESTIONS[index].answers[0] === answer
              ? ' text-[#054e37]'
              : ' text-[#730b4b]';
        }

        return (
          <li key={index} className="my-8">
            <h3 className="font-roboto text-base  bg-[#2c203d] text-[#d8cde8] w-8 h-8 rounded-[50%] flex justify-center items-center mx-auto">
              {index + 1}
            </h3>
            <p className="question my-1 text-[#251e2f]">
              {QUESTIONS[index].text}
            </p>
            <p className={cssClasses}>{answer ?? 'skipped'}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default UserAnswersList;
