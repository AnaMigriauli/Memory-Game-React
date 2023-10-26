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

const CustomSoloPlayer = ({ totalPairs, iconsArr }) => {
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
        <GameHeader menuHandler={menuHandler} />

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

const TimerMoves = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    background-color: ${({ theme }) => theme.colors.jungleMistLIight};
    width: 46.2%;
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
`;
