import GameHeader from "./GameHeader";
import GameContainer from "./GameContainer";
import GameBoard from "./GameBoard";
import GameOptionsModal from "./GameOptionsModal";
import useMemoryGame from "./hook/useMemoryGame";
import Player from "./Player";
import styled from "styled-components";
import StartGame from "./StartGame";
import MultiPlayerResultModal from "./MultiPlayerResultModal";
import { useEffect } from "react";
const MultiplePlayer = ({
  totalPairs,
  iconsArr,
  isThreePlayer,
  isForthPlayer,
}) => {
  const {
    state,
    menuHandler,
    checkCards,
    handleButtonClick,
    resumeGame,
    restartGame,
    newGameHandler,
    thirdPlayerHandler,
    fourthPlayerHandler,
  } = useMemoryGame(totalPairs, iconsArr);

  useEffect(() => {
    if (isForthPlayer) {
      fourthPlayerHandler();
    } else if (isThreePlayer) {
      thirdPlayerHandler();
    }
  }, [isThreePlayer, isForthPlayer]);

  if (state.newGame) {
    return <StartGame />;
  }

  console.log(
    state.totalPlayer,
    isThreePlayer,
    isForthPlayer,
    fourthPlayerHandler
  );
  return (
    <>
      {(state.matchedPair.length === totalPairs * 2 ||
        state.matchedPair.length === iconsArr?.length * 2) && (
        <MultiPlayerResultModal
          restartGame={() => restartGame()}
          startNewGame={() => newGameHandler()}
          pair={state.playersScore}
          isWinner={state.isWinner}
          isThreePlayer={isThreePlayer}
          isForthPlayer={isForthPlayer}
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
          {isThreePlayer && (
            <Player
              PlayerNumber="P3"
              active={state.activePlayer === "P3"}
              score={state.playersScore.P3}
            ></Player>
          )}
          {isForthPlayer && (
            <Player
              PlayerNumber="P4"
              active={state.activePlayer === "P4"}
              score={state.playersScore.P4}
            ></Player>
          )}
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
