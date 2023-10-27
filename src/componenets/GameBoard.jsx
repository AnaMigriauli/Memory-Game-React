import styled from "styled-components";

const GameBoard = ({
  cardSet,
  checkCards,
  handleButtonClick,
  totalPairs,
  iconsArr,
}) => {
  return (
    <StyledGameBoard totalpairs={totalPairs} iconsarr={iconsArr}>
      {cardSet.map((el) => {
        return (
          <Card
            key={el.id}
            onClick={() => {
              checkCards(el.value, el.id, el.matched, el.isShown);
              handleButtonClick();
            }}
            isflipped={el.isShown}
            matched={el.matched}
          >
            <div>
              {el.isShown ? (
                el.isIconVisible ? (
                  <BackImg matched={el.matched} flashyellow={el.flashYellow}>
                    <img src={el.value} alt="icons" />
                  </BackImg>
                ) : (
                  <Back matched={el.matched} flashyellow={el.flashYellow}>
                    {el.value}
                  </Back>
                )
              ) : (
                <Front></Front>
              )}
            </div>
          </Card>
        );
      })}
    </StyledGameBoard>
  );
};
export default GameBoard;

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-columns: ${({ totalpairs, iconsarr }) =>
    totalpairs === 18 || iconsarr === 18 ? "repeat(6, 1fr)" : "repeat(4, 1fr)"};
  margin-bottom: 102.12px;
`;

const Card = styled.div`
  margin-bottom: 9.12px;
  width: 46.878px;
  height: 46.878px;
  cursor: ${({ isflipped, matched }) =>
    isflipped || matched ? "not-allowed" : "pointer"};
  position: relative;
  div {
    border-radius: 41px;
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
    transform: rotateY(${({ isflipped }) => (isflipped ? "180deg" : "0deg")});
  }
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.colors.blueWood};
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_light};
  }
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-color: ${({ theme, matched, flashyellow }) =>
    flashyellow
      ? theme.colors.yellow
      : matched
      ? theme.colors.jungleMist
      : theme.colors.blueWood};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

const BackImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-color: ${({ theme, matched, flashyellow }) =>
    flashyellow
      ? theme.colors.yellow
      : matched
      ? theme.colors.jungleMist
      : theme.colors.blueWood};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  img {
    width: 25px;
    height: 25px;
  }
`;
