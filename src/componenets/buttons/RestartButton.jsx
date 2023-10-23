import styled from "styled-components";

const RestartButton = ({ onclick }) => {
  return <Restart onClick={onclick}>Restart</Restart>;
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
`;
