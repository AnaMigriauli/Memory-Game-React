import styled from "styled-components";

const SetUpNewGameButton = () => {
  return <SetupNewGame>Setup New Game</SetupNewGame>;
};
export default SetUpNewGameButton;

const SetupNewGame = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.jungleMistLIight};
  color: ${({ theme }) => theme.colors.blueWood};
  text-align: center;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;
