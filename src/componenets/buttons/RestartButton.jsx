import styled from "styled-components";
import PropTypes from "prop-types";
import { Breakpoints } from "../../assets/themes/themes";

const RestartButton = ({ onclick }) => {
  return <Restart onClick={onclick}>Restart</Restart>;
};
RestartButton.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default RestartButton;

const Restart = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 26px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  border: none;
  margin: 16px 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow_light};
  }
  @media (min-width: ${Breakpoints.medium}) {
    margin: 0;
    height: 52px;
  }
`;
