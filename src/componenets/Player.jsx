import styled from "styled-components";

const Player = ({ PlayerNumber, active, score }) => {
  return (
    <Players active={active}>
      <span>{PlayerNumber}</span>
      <p>{score}</p>
    </Players>
  );
};
export default Player;

const Players = styled.div`
  width: 64px;
  height: 70px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.yellow : theme.colors.jungleMistLIight};
  border-radius: 5px;
  text-align: center;
  padding: 10px 13px;
  cursor: pointer;
  span {
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.cyanBlue};
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 2px;
  }
  p {
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.blueWood};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }
`;
