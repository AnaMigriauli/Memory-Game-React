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
import { Breakpoints } from "../assets/themes/themes";
import PropTypes from "prop-types";

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
    if (isForthPlayer) fourthPlayerHandler();
    else if (isThreePlayer) thirdPlayerHandler();
  }, [isThreePlayer, isForthPlayer]);

  if (state.newGame) {
    return <StartGame />;
  }

  const playerNumber = (playerNum) =>
    window.innerWidth <= 768 ? `P${playerNum}` : `Player ${playerNum}`;

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
        <GameHeader
          menuHandler={menuHandler}
          restartGame={restartGame}
          startNewGame={newGameHandler}
        />
        <GameBoard
          cardSet={state.cardSet}
          checkCards={checkCards}
          handleButtonClick={handleButtonClick}
          totalPairs={totalPairs}
          iconsArr={iconsArr?.length}
        />
        <Players>
          {[1, 2, isThreePlayer ? 3 : null, isForthPlayer ? 4 : null].map(
            (playerNum) =>
              playerNum && (
                <Player
                  key={playerNum}
                  PlayerNumber={playerNumber(playerNum)}
                  active={state.activePlayer === `P${playerNum}`}
                  score={state.playersScore[`P${playerNum}`]}
                />
              )
          )}
        </Players>
      </GameContainer>
    </>
  );
};
export default MultiplePlayer;

MultiplePlayer.propTypes = {
  totalPairs: PropTypes.number.isRequired,
  iconsArr: PropTypes.array.isRequired,
  isThreePlayer: PropTypes.bool.isRequired,
  isForthPlayer: PropTypes.bool.isRequired,
};

const Players = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${Breakpoints.medium}) {
    width: 100%;
    gap: 11px;
  }
`;
