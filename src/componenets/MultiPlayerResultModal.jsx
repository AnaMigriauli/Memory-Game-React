import styled from "styled-components";
import ModalMultiplePlayer from "./portals/ModalMultiplePlayer";
import RestartButton from "./buttons/RestartButton";
import Button from "./buttons/Button";

const MultiPlayerResultModal = ({
  pair,
  isWinner,
  restartGame,
  startNewGame,
  isThreePlayer,
  isForthPlayer,
}) => {
  console.log(isWinner);
  return (
    <ModalMultiplePlayer>
      <Header>
        {isWinner === "TIE" ? "It’s a tie!" : `Player ${isWinner} Wins!`}
      </Header>
      <Text>Game over! Here are the results…</Text>

      <Result iswinner={isWinner === 1 || isWinner === "TIE"}>
        <span>
          {isWinner === 1 || isWinner === "TIE"
            ? "Player 1(Winner)"
            : "Player 1"}
        </span>
        <p>{pair.P1} Pairs</p>
      </Result>
      <Result iswinner={isWinner === 2 || isWinner === "TIE"}>
        <span>
          {isWinner === 2 || isWinner === "TIE"
            ? "Player 2(Winner)"
            : "Player 2"}
        </span>
        <p>{pair.P2} Pairs</p>
      </Result>
      {isThreePlayer && isForthPlayer && (
        <Result iswinner={isWinner === 3 || isWinner === "TIE"}>
          <span>
            {isWinner === 3 || isWinner === "TIE"
              ? "Player 3(Winner)"
              : "Player 3"}
          </span>
          <p>{pair.P3} Pairs</p>
        </Result>
      )}
      {isForthPlayer && (
        <Result iswinner={isWinner === 4 || isWinner === "TIE"}>
          <span>
            {isWinner === 3 || isWinner === "TIE"
              ? "Player 4(Winner)"
              : "Player 4"}
          </span>
          <p>{pair.P4} Pairs</p>
        </Result>
      )}
      <RestartButton onclick={restartGame} />
      <Button onclick={startNewGame}>Setup New Game</Button>
    </ModalMultiplePlayer>
  );
};
export default MultiPlayerResultModal;

const Result = styled.div`
  height: 48px;
  width: 100%;
  padding: 11px 16px;
  border-radius: 5px;
  margin-bottom: 8px;
  background-color: ${({ theme, iswinner }) =>
    iswinner ? theme.colors.blue : theme.colors.jungleMistLIight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: ${({ theme, iswinner }) =>
      iswinner ? theme.colors.white : theme.colors.cyanBlue};
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: ${({ theme, iswinner }) =>
      iswinner ? theme.colors.white : theme.colors.blueWood};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 9px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.cyanBlue};
  text-align: center;
  margin-bottom: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;
