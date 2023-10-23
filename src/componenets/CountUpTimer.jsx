import { useState, useEffect } from "react";
import styled from "styled-components";
const CountUpTimer = ({ matchPairLength, totalPairs, restartGame }) => {
  const [totalSeconds, setTotalSecons] = useState(0);

  console.log(matchPairLength, totalPairs);

  useEffect(() => {
    if (restartGame) {
      setTotalSecons(0);
    }
  }, [restartGame]);

  console.log(restartGame);

  useEffect(() => {
    if (matchPairLength !== totalPairs * 2) {
      const intervalId = setInterval(() => {
        setTotalSecons((prevSec) => prevSec + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [totalSeconds, matchPairLength, totalPairs]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

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
