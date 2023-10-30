import styled from "styled-components";
import { Breakpoints } from "../assets/themes/themes";
import PropTypes from "prop-types";

const GameContainer = ({ children }) => {
  return <PlayersGameBoard>{children}</PlayersGameBoard>;
};

export default GameContainer;

GameContainer.propTypes = {
  children: PropTypes.node,
};

const PlayersGameBoard = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${Breakpoints.medium}) {
    padding: 38px 40px 38px 39px;
    width: 654px;
    height: 559px;
  }
`;
