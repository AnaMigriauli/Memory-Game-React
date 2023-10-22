import { useState, useEffect } from "react";
import styled from "styled-components";
const CountUpTimer = ({ matchPairLength }) => {
  const [totalSeconds, setTotalSecons] = useState(0);

  useEffect(() => {
    if (matchPairLength !== 36) {
      const intervalId = setInterval(() => {
        setTotalSecons((prevSec) => prevSec + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [totalSeconds, matchPairLength]);

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
