import quizCompleteImage from '../assets/images/quiz-complete.png';
import QUESTIONS from '../data/questions';
import SummaryStats from './SummaryStats';
import UserAnswersList from './UserAnswersList';

const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div className="summary max-w-[40rem] mx-auto my-8 p-8 rounded-lg bg-gradient-to-b from-[#a17eda] to-[#895fc4] shadow-customBlack text-[#191321]">
      <img
        src={quizCompleteImage}
        alt="Trophy icon"
        className="w-[8rem] h-[8rem] object-contain mx-auto p-4 rounded-[50%] mb-4 border-2 border-[#3a2353] bg-[#c18cfa] drop-shadow-customBlack"
      />
      <h2 className="font-roboto text-3xl min-[600px]:text-[2.5rem] text-center uppercase text-[#312353]F">
        Quiz Completed
      </h2>
      <SummaryStats
        skippedAnswersShare={skippedAnswersShare}
        correctAnswersShare={correctAnswersShare}
        wrongAnswersShare={wrongAnswersShare}
      />
      <UserAnswersList userAnswers={userAnswers} />
    </div>
  );
};

export default Summary;
