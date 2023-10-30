import styled from "styled-components";
import ModalSoloPlayer from "./portals/ModalSoloPlayer";
import RestartButton from "./buttons/RestartButton";
import Button from "./buttons/Button";
import PropTypes from "prop-types";
import { Breakpoints } from "../assets/themes/themes";

const GameResultModal = ({ moves, timer, restartGame, startNewGame }) => {
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
      <BtnContainer>
        <RestartButton onclick={restartGame} />
        <Button onclick={startNewGame}>Setup New Game</Button>
      </BtnContainer>
    </ModalSoloPlayer>
  );
};

export default GameResultModal;

GameResultModal.propTypes = {
  moves: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  restartGame: PropTypes.func.isRequired,
  startNewGame: PropTypes.func.isRequired,
};

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 9px;
  @media (min-width: ${Breakpoints.medium}) {
    font-size: 48px;
    margin-bottom: 16px;
  }
`;
const HeaderText = styled.p`
  color: ${({ theme }) => theme.colors.cyanBlue};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
  @media (min-width: ${Breakpoints.medium}) {
    font-size: 18px;
    margin-bottom: 40px;
  }
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
  @media (min-width: ${Breakpoints.medium}) {
    border-radius: 10px;
    height: 72px;
    margin-bottom: 16px;
    span {
      font-size: 18px;
    }
    p {
      font-size: 32px;
    }
  }
`;
const BtnContainer = styled.div`
  @media (min-width: ${Breakpoints.medium}) {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 24px;
  }
`;
