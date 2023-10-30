import styled from "styled-components";
import { Breakpoints } from "../assets/themes/themes";
import PropTypes from "prop-types";
const Player = ({ PlayerNumber, active, score }) => {
  console.log(PlayerNumber);
  return (
    <Players active={active}>
      <span>{PlayerNumber}</span>
      <p>{score}</p>
    </Players>
  );
};
export default Player;

Player.propTypes = {
  PlayerNumber: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
};

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
  }
  p {
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.blueWood};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin-top: 2px;
  }
  @media (min-width: ${Breakpoints.medium}) {
    width: 164px;
    height: 80px;
    border-radius: 10px;
    text-align: start;
    padding: 14px 0 12px 16px !important;
    p {
      margin-top: 5px;
    }
  }
`;
