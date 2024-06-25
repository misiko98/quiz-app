import PercentageInfo from './PercentageInfo';

const SummaryStats = ({
  skippedAnswersShare,
  correctAnswersShare,
  wrongAnswersShare,
}) => {
  return (
    <div className="summary-stats w-3/5 my-8 pb-8 mx-auto flex gap-12 justify-center border-b-2 border-[#594276]">
      <PercentageInfo label="skipped" percentage={skippedAnswersShare} />
      <PercentageInfo
        label="answered correctly"
        percentage={correctAnswersShare}
      />
      <PercentageInfo
        label="answered incorrectly"
        percentage={wrongAnswersShare}
      />
    </div>
  );
};

export default SummaryStats;
