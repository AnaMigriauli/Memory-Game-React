import GameHeader from "./GameHeader";
import GameContainer from "./GameContainer";
import GameBoard from "./GameBoard";
import useMemoryGame from "./hook/useMemoryGame";
import Player from "./Player";
import styled from "styled-components";
import { useState } from "react";

const MultiplePlayer = ({ totalPairs, iconsArr }) => {
  const {
    state,
    menuHandler,
    checkCards,
    handleButtonClick,
    resumeGame,
    restartGame,
    timerHandler,
  } = useMemoryGame(totalPairs, iconsArr);

  return (
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
        <Player PlayerNumber="P1" active={state.activePlayer === "P1"}></Player>
        <Player PlayerNumber="P2" active={state.activePlayer === "P2"}></Player>
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
  );
};
export default MultiplePlayer;

const Players = styled.div`
  display: flex;
  justify-content: space-between;
`;
