import styled from "styled-components";
import ModalSoloPlayer from "./portals/ModalSoloPlayer";
import RestartButton from "./buttons/RestartButton";
import Button from "./buttons/Button";

const GameResultModal = ({ moves, timer }) => {
  return (
    <ModalSoloPlayer>
      <Header>You did it!</Header>
      <HeaderText>Game over! Here’s how you got on…</HeaderText>
      <Result>
        <span>Time Elapsed</span>
        <p>{timer}</p>
      </Result>
      <Result>
        <span>Moves Taken</span>
        <p>{moves}</p>
      </Result>
      <RestartButton />
      <Button>Setup New Game</Button>
    </ModalSoloPlayer>
  );
};

export default GameResultModal;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 9px;
`;
const HeaderText = styled.p`
  color: ${({ theme }) => theme.colors.cyanBlue};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.jungleMistLIight};
  margin-bottom: 8px;
  border-radius: 5px;
  align-items: center;
  padding: 0 16px;
  span {
    color: ${({ theme }) => theme.colors.cyanBlue};
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
  }
  p {
    color: ${({ theme }) => theme.colors.blueWood};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
`;
