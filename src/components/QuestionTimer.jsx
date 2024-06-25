import { useEffect, useState } from 'react';

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  //move to the next question timeout expiry
  useEffect(() => {
    const timerId = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [onTimeout, timeout]);

  //render progress bar
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemaining) => {
        if (prevRemaining <= 0) {
          clearInterval(intervalId);
          return 0;
        }

        return prevRemaining - 100;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let classes = 'w-full h-2 ' + mode;

  return (
    <div className="w-1/2 mx-auto rounded">
      <progress value={remainingTime} max={timeout} className={classes} />
    </div>
  );
};

export default QuestionTimer;
