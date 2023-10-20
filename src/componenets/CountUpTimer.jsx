import { useState, useEffect } from "react";
const CountUpTimer = () => {
  const [totalSeconds, setTotalSecons] = useState(0);

  useEffect(() => {
    if (totalSeconds < 3000) {
      const intervalId = setInterval(() => {
        setTotalSecons((prevSec) => prevSec + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [totalSeconds]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <p>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}{" "}
    </p>
  );
};

export default CountUpTimer;
