import GameHeader from "./GameHeader";
import GameContainer from "./GameContainer";
import GameBoard from "./GameBoard";
import GameOptionsModal from "./GameOptionsModal";
import useMemoryGame from "./hook/useMemoryGame";
import Player from "./Player";
import styled from "styled-components";
import StartGame from "./StartGame";
import MultiPlayerResultModal from "./MultiPlayerResultModal";
const MultiplePlayer = ({ totalPairs, iconsArr }) => {
  const {
    state,
    menuHandler,
    checkCards,
    handleButtonClick,
    resumeGame,
    restartGame,
    newGameHandler,
  } = useMemoryGame(totalPairs, iconsArr);

  if (state.newGame) {
    return <StartGame />;
  }

  return (
    <>
      {(state.matchedPair.length === totalPairs * 2 ||
        state.matchedPair.length === iconsArr?.length * 2) && (
        <MultiPlayerResultModal
          restartGame={() => restartGame()}
          startNewGame={() => newGameHandler()}
          pair={state.playersScore}
          isWinner={state.isWinner}
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
        <Players>
          <Player
            PlayerNumber="P1"
            active={state.activePlayer === "P1"}
            score={state.playersScore.P1}
          ></Player>
          <Player
            PlayerNumber="P2"
            active={state.activePlayer === "P2"}
            score={state.playersScore.P2}
          ></Player>
          {/* <Player
          PlayerNumber="P3"
          active={playerNumber === "3P"}
          onClick={() => setPlayerNumber("3P")}
          ></Player>
          <Player
          PlayerNumber="P4"
          active={playerNumber === "4P"}
          onClick={() => setPlayerNumber("4P")}
        ></Player> */}
        </Players>
      </GameContainer>
    </>
  );
};
export default MultiplePlayer;

const Players = styled.div`
  display: flex;
  justify-content: space-between;
`;
