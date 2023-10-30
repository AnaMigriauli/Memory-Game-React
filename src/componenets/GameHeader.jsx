import styled from "styled-components";
import { Breakpoints } from "../assets/themes/themes";
import PropTypes from "prop-types";

const GameHeader = ({ menuHandler, restartGame, startNewGame }) => {
  return (
    <Header>
      <h1>memory</h1>
      {window.innerWidth <= 768 ? (
        <button onClick={() => menuHandler()}>Menu</button>
      ) : (
        <BtnContainer>
          <button onClick={restartGame}>Restart</button>
          <button onClick={startNewGame}>New Game</button>
        </BtnContainer>
      )}
    </Header>
  );
};
export default GameHeader;

GameHeader.propTypes = {
  menuHandler: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
  startNewGame: PropTypes.func.isRequired,
};

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  h1 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }
  button {
    width: 78px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 26px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow_light};
    }
  }
  @media (min-width: ${Breakpoints.medium}) {
    margin-bottom: 121px;
    h1 {
      font-size: 40px;
    }
  }
`;

const BtnContainer = styled.div`
  @media (min-width: ${Breakpoints.medium}) {
    display: flex;
    gap: 16px;
    button:first-child {
      width: 127px;
      height: 52px;
      border-radius: 26px;
      background-color: ${({ theme }) => theme.colors.yellow};
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.yellow_light};
      }
    }
    button:last-child {
      width: 149px;
      height: 52px;
      border-radius: 26px;
      background-color: ${({ theme }) => theme.colors.jungleMistLIight};
      color: ${({ theme }) => theme.colors.blueWood};
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.blue_light};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
