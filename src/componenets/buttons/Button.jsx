import styled from "styled-components";

const Button = ({ onclick, children }) => {
  return <SetupNewGame onClick={onclick}>{children}</SetupNewGame>;
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
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_light};
    color: ${({ theme }) => theme.colors.white};
  }
`;
