import { useState } from "react";
import styled from "styled-components";
import CountUpTimer from "./CountUpTimer";
import GameResultModal from "./GameResultModal";
import useMemoryGame from "./hook/useMemoryGame";
import GameBoard from "./GameBoard";
import GameOptionsModal from "./GameOptionsModal";
import StartGame from "./StartGame";
import GameHeader from "./GameHeader";
import GameContainer from "./GameContainer";
import { Breakpoints } from "../assets/themes/themes";
import PropTypes from "prop-types";

const CustomSoloPlayer = ({ totalPairs, iconsArr }) => {
  // const [windowWidth, setWindowWidth] = useState(false);
  const {
    state,
    menuHandler,
    checkCards,
    handleButtonClick,
    resumeGame,
    restartGame,
    timerHandler,
    newGameHandler,
  } = useMemoryGame(totalPairs, iconsArr);

  const [timeElapsed, setTimeElapsed] = useState();

  if (state.newGame) {
    return <StartGame />;
  }

  const timeElapsedHandler = (time) => {
    setTimeElapsed(time);
  };

  return (
    <>
      {(state.matchedPair.length === totalPairs * 2 ||
        state.matchedPair.length === iconsArr?.length * 2) && (
        <GameResultModal
          moves={state.clickCount}
          timer={timeElapsed}
          restartGame={() => restartGame()}
          startNewGame={() => newGameHandler()}
        />
      )}
      {state.menu && (
        <GameOptionsModal
          startNewGame={() => newGameHandler()}
          resumeGame={() => resumeGame()}
          restartGame={() => restartGame()}
        />
      )}
      <GameContainer>
        <GameHeader
          menuHandler={menuHandler}
          restartGame={() => restartGame()}
          startNewGame={() => newGameHandler()}
        />

        <GameBoard
          cardSet={state.cardSet}
          checkCards={checkCards}
          handleButtonClick={handleButtonClick}
          totalPairs={totalPairs}
          iconsArr={iconsArr?.length}
        />
        <TimerMoves>
          <div>
            <span>Time</span>
            <CountUpTimer
              matchPairLength={state.matchedPair.length}
              totalPairs={totalPairs}
              timer={state.timer}
              timerHandler={() => timerHandler()}
              timeElapsedHandler={timeElapsedHandler}
              iconsArr={iconsArr}
            />
          </div>
          <div>
            <span>Moves</span>
            <p>{state.clickCount}</p>
          </div>
        </TimerMoves>
      </GameContainer>
    </>
  );
};

export default CustomSoloPlayer;

CustomSoloPlayer.propTypes = {
  totalPairs: PropTypes.number.isRequired,
  iconsArr: PropTypes.array.isRequired,
};

const TimerMoves = styled.div`
  display: flex;
  gap: 25px;
  div {
    background-color: ${({ theme }) => theme.colors.jungleMistLIight};
    width: 151px;
    height: 70px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-top: 10px;
      margin-bottom: 2px;
      color: ${({ theme }) => theme.colors.cyanBlue};
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
    }
    p {
      color: ${({ theme }) => theme.colors.blueWood};
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
    }
  }

  @media (min-width: ${Breakpoints.medium}) {
    gap: 30px;
    div {
      width: 255px;
      height: 72px;
      border-radius: 10px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 24px 0 21px;
    }
    span {
      font-size: 18px !important;
    }
    p {
      font-size: 32px !important;
    }
  }
`;
