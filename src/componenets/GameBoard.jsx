import styled from "styled-components";
import PropTypes from "prop-types";
import { Breakpoints } from "../assets/themes/themes";

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

GameBoard.propTypes = {
  cardSet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      matched: PropTypes.bool.isRequired,
      isShown: PropTypes.bool.isRequired,
      isIconVisible: PropTypes.bool,
      flashYellow: PropTypes.bool,
    })
  ).isRequired,
  checkCards: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  totalPairs: PropTypes.number.isRequired,
  iconsArr: PropTypes.arrayOf(PropTypes.any).isRequired,
};
const StyledGameBoard = styled.div`
  width: 326.878px;
  height: 326.878px;
  display: grid;
  grid-template-columns: ${({ totalpairs, iconsarr }) =>
    totalpairs === 18 || iconsarr === 18 ? "repeat(6, 1fr)" : "repeat(4, 1fr)"};
  margin-bottom: 102.12px;

  @media (min-width: ${Breakpoints.medium}) {
    width: 572px;
    height: 572px;
  }
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
  @media (min-width: ${Breakpoints.medium}) {
    width: 82px;
    height: 82px;
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
  font-size: 24px;
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
  @media (min-width: ${Breakpoints.medium}) {
    font-size: 44px;
  }
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
  @media (min-width: ${Breakpoints.medium}) {
    img {
      width: 56px;
      height: 56px;
    }
  }
`;
