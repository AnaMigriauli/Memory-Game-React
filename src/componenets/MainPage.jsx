import styled from "styled-components";
const MainPage = () => {
  return (
    <Div>
      <h1>memory</h1>
      <PlayOptions>
        <OptionGroup>
          <h2>Select Theme</h2>
          <div>
            <Button>Numbers</Button>
            <Button>Icons</Button>
          </div>
        </OptionGroup>
        <OptionGroup>
          <h2>Numbers of Players</h2>
          <PlayerButtons>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </PlayerButtons>
        </OptionGroup>
        <OptionGroup>
          <h2>Grid Size </h2>
          <div>
            <Button>4x4</Button>
            <Button>6x6</Button>
          </div>
        </OptionGroup>
        <StartGame>Start Game</StartGame>
      </PlayOptions>
    </Div>
  );
};
export default MainPage;

const Div = styled.div`
  width: 375px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 80px 24px 116px 24px;
  text-align: center;

  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 45px;
  }
`;
const PlayOptions = styled.div`
  width: 100%;
  height: 386px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  h2 {
    color: ${({ theme }) => theme.colors.cyanBlue};
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: start;
  }
  div {
    display: flex;
    gap: 11px;
  }
`;
const PlayerButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  button {
    width: 100%;
    height: 40px;
    border-radius: 26px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.jungleMist};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 26px;
  border: none;
  background-color: ${({ theme }) => theme.colors.jungleMist};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StartGame = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  text-align: center;
  width: 100%;
  height: 48px;
  border-radius: 26px;
  margin-bottom: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`;
