import { useState } from "react";
import styled from "styled-components";
import CountUpTimer from "./CountUpTimer";
import GameResultModal from "./GameResultModal";
import useMemoryGame from "./hook/useMemoryGame";
import GameBoard from "./GameBoard";
import GameOptionsModal from "./GameOptionsModal";
import StartGame from "./StartGame";

const CustomSoloPlayer = ({ totalPairs, iconsArr }) => {
  const {
    state,
    menuHandler,
    checkCards,
    handleButtonClick,
    resumeGame,
    restartGame,
    timerHandler,
  } = useMemoryGame(totalPairs, iconsArr);
  const [newGame, setNewGame] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState();

  if (newGame) {
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
          startNewGame={() => setNewGame(true)}
        />
      )}
      {state.menu && (
        <GameOptionsModal
          startNewGame={() => setNewGame(true)}
          resumeGame={() => resumeGame()}
          restartGame={() => restartGame()}
        />
      )}
      <SoloPlayerGameBoard>
        <Header>
          <h1>memory</h1>
          <button onClick={() => menuHandler()}>Menu</button>
        </Header>
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
      </SoloPlayerGameBoard>
    </>
  );
};

export default CustomSoloPlayer;
const SoloPlayerGameBoard = styled.div`
  width: 375px;
  height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  h1 {
    color: ${({ theme }) => theme.colors.blue};

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }
  button {
    width: 78px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 26px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  }
`;

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
