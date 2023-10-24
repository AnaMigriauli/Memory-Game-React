import { useState, useEffect } from "react";
import styled from "styled-components";
const CountUpTimer = ({
  matchPairLength,
  totalPairs,
  timer,
  timerHandler,
  timeElapsedHandler,
  iconsArr,
}) => {
  const [totalSeconds, setTotalSecons] = useState(0);

  useEffect(() => {
    if (timer) {
      setTotalSecons(0);
      timerHandler();
    }
  }, [timer, timerHandler]);

  useEffect(() => {
    if (
      matchPairLength !== totalPairs * 2 ||
      matchPairLength !== iconsArr?.length * 2
    ) {
      const intervalId = setInterval(() => {
        setTotalSecons((prevSec) => prevSec + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [matchPairLength, totalPairs, timerHandler, iconsArr]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (
    matchPairLength === totalPairs * 2 ||
    matchPairLength === iconsArr?.length * 2
  ) {
    timeElapsedHandler(
      <Timer>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Timer>
    );
  }

  return (
    <Timer>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Timer>
  );
};

export default CountUpTimer;

const Timer = styled.p`
  color: ${({ theme }) => theme.colors.blueWood};
  text-align: center;
  font-family: Atkinson Hyperlegible;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
