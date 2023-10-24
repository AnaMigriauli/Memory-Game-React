import GameHeader from "./GameHeader";
import GameContainer from "./GameContainer";
import GameBoard from "./GameBoard";
import useMemoryGame from "./hook/useMemoryGame";
import Player from "./Player";
import styled from "styled-components";
import { useState } from "react";

const MultiplePlayer = ({ totalPairs, iconsArr }) => {
  const [playerNumber, setPlayerNumber] = useState("1P");
  const [playerScore, setPlayerScore] = useState({ P1: 0, P2: 0 });

  const {
    state,
    menuHandler,
    checkCards,
    handleButtonClick,
    resumeGame,
    restartGame,
    timerHandler,
  } = useMemoryGame(totalPairs, iconsArr);

  console.log(state.matchedPair);

  const switchPlayer = () => {
    setPlayerNumber((prevPlayer) => (prevPlayer === "1P" ? "2P" : "1P"));
  };
  if (state.matchedPair) {
    setPlayerScore((prevScores) => ({
      ...prevScores,
      [playerNumber]: prevScores[playerNumber] + 1,
    }));
    switchPlayer();
  } else {
    switchPlayer();
  }
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
        <Player
          PlayerNumber="P1"
          active={playerNumber === "1P"}
          onClick={() => setPlayerNumber("1P")}
          playerScore={playerScore}
        ></Player>
        <Player
          PlayerNumber="P2"
          active={playerNumber === "2P"}
          onClick={() => setPlayerNumber("2P")}
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
  );
};
export default MultiplePlayer;

const Players = styled.div`
  display: flex;
  justify-content: space-between;
`;
