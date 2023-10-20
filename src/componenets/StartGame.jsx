import { useState } from "react";
import styled from "styled-components";
import CustomSoloPlayer from "./CustomSoloPlayer";
const StartGame = () => {
  const [theme, setTheme] = useState("Numbers");
  const [players, setPlayers] = useState(1);
  const [gridSize, setGridSize] = useState("4x4");
  const [gameStarted, setGameStarted] = useState(false);
  const gameStartHandler = () => {
    if (theme === "Numbers" || players === 1 || gridSize === "6x6") {
      setGameStarted(true);
    }
  };
  if (gameStarted) {
    return <CustomSoloPlayer />;
  }
  return (
    <Div>
      <h1>memory</h1>
      <PlayOptions>
        <OptionGroup>
          <h2>Select Theme</h2>
          <div>
            <Button
              active={theme === "Numbers"}
              onClick={() => setTheme("Numbers")}
            >
              Numbers
            </Button>
            <Button
              active={theme === "Icons"}
              onClick={() => setTheme("Icons")}
            >
              Icons
            </Button>
          </div>
        </OptionGroup>
        <OptionGroup>
          <h2>Numbers of Players</h2>
          <PlayerButtons>
            {[1, 2, 3, 4].map((num) => (
              <PlayerButton
                key={num}
                onClick={() => setPlayers(num)}
                active={players === num}
              >
                {num}
              </PlayerButton>
            ))}
          </PlayerButtons>
        </OptionGroup>
        <OptionGroup>
          <h2>Grid Size </h2>
          <div>
            <Button
              active={gridSize === "4x4"}
              onClick={() => setGridSize("4x4")}
            >
              4x4
            </Button>
            <Button
              active={gridSize === "6x6"}
              onClick={() => setGridSize("6x6")}
            >
              6x6
            </Button>
          </div>
        </OptionGroup>
        <StartGameBtn
          onClick={() => {
            gameStartHandler();
          }}
        >
          Start Game
        </StartGameBtn>
      </PlayOptions>
    </Div>
  );
};
export default StartGame;

const Div = styled.div`
  width: 375px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 80px 24px 116px 24px;
  text-align: center;

  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 45px;
  }
`;
const PlayOptions = styled.div`
  width: 100%;
  height: 386px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  h2 {
    color: ${({ theme }) => theme.colors.cyanBlue};
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: start;
  }
  div {
    display: flex;
    gap: 11px;
  }
`;
const PlayerButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

const PlayerButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 26px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.blueWood : theme.colors.jungleMist};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 26px;
  border: none;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.blueWood : theme.colors.jungleMist};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StartGameBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  text-align: center;
  width: 100%;
  height: 48px;
  border-radius: 26px;
  margin-bottom: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`;
