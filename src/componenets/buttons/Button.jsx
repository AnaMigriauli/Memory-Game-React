import styled from "styled-components";

const Button = (props) => {
  return <SetupNewGame onClick={props.onclick}>{props.children}</SetupNewGame>;
};
export default Button;

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
  margin-bottom: 16px;
  cursor: pointer;
`;
