import styled from "styled-components";
const GameContainer = (props) => {
  return <PlayersGameBoard>{props.children}</PlayersGameBoard>;
};

export default GameContainer;

const PlayersGameBoard = styled.div`
  width: 375px;
  height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;
