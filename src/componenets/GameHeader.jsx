import styled from "styled-components";
const GameHeader = ({ menuHandler }) => {
  return (
    <Header>
      <h1>memory</h1>
      <button onClick={() => menuHandler()}>Menu</button>
    </Header>
  );
};
export default GameHeader;

const Header = styled.div`
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
`;
