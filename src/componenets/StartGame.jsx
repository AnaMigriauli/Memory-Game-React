import { useState } from "react";
import styled from "styled-components";
import {
  EasyMemoryGameIcon,
  EasyMemoryGameNumber,
  HardMemoryGameIcon,
  HardMemoryGameNumber,
  EasyMultiplePlayerNumber,
  EasyMultiplePlayerIcon,
  HardMultiplePlayerIcon,
  HardMultiplePlayerNumber,
} from "./MemoryGame";
import { Breakpoints } from "../assets/themes/themes";

const StartGame = () => {
  const [theme, setTheme] = useState("Numbers");
  const [players, setPlayers] = useState(1);
  const [gridSize, setGridSize] = useState("4x4");
  const [gameType, setGameType] = useState(null);
  const [isThreePlayer, setIsThreePlayer] = useState(false);
  const [isForthPlayer, setIsForthPlayer] = useState(false);

  const gameStartHandler = () => {
    if (theme === "Numbers" && players === 1 && gridSize === "6x6") {
      setGameType("hardNumber");
    } else if (theme === "Numbers" && players === 1 && gridSize === "4x4") {
      setGameType("easyNumber");
    } else if (theme === "Icons" && players === 1 && gridSize === "4x4") {
      setGameType("easyIcons");
    } else if (theme === "Icons" && players === 1 && gridSize === "6x6") {
      setGameType("hardIcons");
    } else if (theme === "Numbers" && players === 2 && gridSize === "4x4") {
      setGameType("easyMultiplePlayer");
    } else if (theme === "Numbers" && players === 2 && gridSize === "6x6") {
      setGameType("hardMultiplePlayer");
    } else if (theme === "Icons" && players === 2 && gridSize === "4x4") {
      setGameType("easyMultiplePlayerIcons");
    } else if (theme === "Icons" && players === 2 && gridSize === "6x6") {
      setGameType("hardMultiplePlayerIcons");
    } else if (theme === "Numbers" && players === 3 && gridSize === "4x4") {
      setGameType("easyMultiplePlayer");
      setIsThreePlayer(true);
    } else if (theme === "Numbers" && players === 3 && gridSize === "6x6") {
      setGameType("hardMultiplePlayer");
      setIsThreePlayer(true);
    } else if (theme === "Icons" && players === 3 && gridSize === "4x4") {
      setGameType("easyMultiplePlayerIcons");
      setIsThreePlayer(true);
    } else if (theme === "Icons" && players === 3 && gridSize === "6x6") {
      setGameType("hardMultiplePlayerIcons");
      setIsThreePlayer(true);
    } else if (theme === "Numbers" && players === 4 && gridSize === "4x4") {
      setGameType("easyMultiplePlayer");
      setIsForthPlayer(true);
      setIsThreePlayer(true);
    } else if (theme === "Numbers" && players === 4 && gridSize === "6x6") {
      setGameType("hardMultiplePlayer");
      setIsForthPlayer(true);
      setIsThreePlayer(true);
    } else if (theme === "Icons" && players === 4 && gridSize === "4x4") {
      setGameType("easyMultiplePlayerIcons");
      setIsForthPlayer(true);
      setIsThreePlayer(true);
    } else if (theme === "Icons" && players === 4 && gridSize === "6x6") {
      setGameType("hardMultiplePlayerIcons");
      setIsForthPlayer(true);
      setIsThreePlayer(true);
    }
  };

  if (gameType === "easyNumber") {
    return <EasyMemoryGameNumber />;
  } else if (gameType === "hardNumber") {
    return <HardMemoryGameNumber />;
  } else if (gameType === "easyIcons") {
    return <EasyMemoryGameIcon />;
  } else if (gameType === "hardIcons") {
    return <HardMemoryGameIcon />;
  } else if (gameType === "easyMultiplePlayer") {
    return (
      <EasyMultiplePlayerNumber
        isThreePlayer={isThreePlayer}
        isForthPlayer={isForthPlayer}
      />
    );
  } else if (gameType === "hardMultiplePlayer") {
    return (
      <HardMultiplePlayerNumber
        isThreePlayer={isThreePlayer}
        isForthPlayer={isForthPlayer}
      />
    );
  } else if (gameType === "easyMultiplePlayerIcons") {
    return (
      <EasyMultiplePlayerIcon
        isThreePlayer={isThreePlayer}
        isForthPlayer={isForthPlayer}
      />
    );
  } else if (gameType === "hardMultiplePlayerIcons") {
    return (
      <HardMultiplePlayerIcon
        isThreePlayer={isThreePlayer}
        isForthPlayer={isForthPlayer}
      />
    );
  }

  return (
    <Div>
      <h1>memory</h1>
      <PlayOptions>
        <OptionGroup>
          <h2>Select Theme</h2>
          <BtnContainer>
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
          </BtnContainer>
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
          <BtnContainer>
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
          </BtnContainer>
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
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 80px 24px 116px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 45px;
  }
  @media (min-width: ${Breakpoints.medium}) {
    padding: 169px 57px 168px 57px;

    h1 {
      font-size: 40px;
      margin-bottom: 78px;
    }
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

  @media (min-width: ${Breakpoints.medium}) {
    width: 654px;
    height: 559px;
    padding: 56px;
    height: 559px;
    border-radius: 20px;
    h2 {
      font-size: 20px;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 11px;

  @media (min-width: ${Breakpoints.medium}) {
    gap: 30px;
  }
`;

const PlayerButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  @media (min-width: ${Breakpoints.medium}) {
    gap: 21px;
    margin-bottom: 33px;
  }
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
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_light};
  }
  @media (min-width: ${Breakpoints.medium}) {
    height: 52px;
    font-size: 26px;
  }
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
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_light};
  }
  @media (min-width: ${Breakpoints.medium}) {
    height: 52px;
    font-size: 24px;
    margin-bottom: 32px;
  }
`;
const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow_light};
  }
  @media (min-width: ${Breakpoints.medium}) {
    height: 70px;
    border-radius: 35px;
    font-size: 32px;
  }
`;
