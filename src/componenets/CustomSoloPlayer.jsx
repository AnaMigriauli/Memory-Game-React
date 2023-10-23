import { useState } from "react";
import styled from "styled-components";
import CountUpTimer from "./CountUpTimer";
import GameResultModal from "./GameResultModal";
import useMemoryGame from "./hook/useMemoryGame";
import GameBoard from "./GameBoard";
import GameOptionsModal from "./GameOptionsModal";
import StartGame from "./StartGame";

const CustomSoloPlayer = ({ totalPairs }) => {
  const {
    state,
    menuHandler,
    checkCards,
    handleButtonClick,
    resumeGame,
    restartGame,
  } = useMemoryGame(totalPairs);
  const [newGame, setNewGame] = useState(false);

  if (newGame) {
    return <StartGame />;
  }

  return (
    <>
      {state.matchedPair.length === totalPairs * 2 && (
        <GameResultModal moves={state.clickCount} timer={<CountUpTimer />} />
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
          <button onClick={() => menuHandler()}>menu</button>
        </Header>
        <GameBoard
          cardSet={state.cardSet}
          checkCards={checkCards}
          handleButtonClick={handleButtonClick}
          totalPairs={totalPairs}
        />
        <TimerMoves>
          <div>
            <span>Time</span>
            <CountUpTimer
              matchPairLength={state.matchedPair.length}
              totalPairs={totalPairs}
              restartGame={state.clickCount}
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
