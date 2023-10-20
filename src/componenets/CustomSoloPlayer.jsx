import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CountUpTimer from "./CountUpTimer";

const CustomSoloPlayer = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardSet, setCardSet] = useState(generateCardSet());
  const [matchedPair, setMatchedPair] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);

  function generateCardSet() {
    const values = Array.from({ length: 18 }, (_, index) => index + 1);

    const pairedValues = values.flatMap((value) => [
      {
        id: uuidv4(),
        value,
        matched: false,
        isShown: false,
        flashYellow: false,
      },
      {
        id: uuidv4(),
        value,
        matched: false,
        isShown: false,
        flashYellow: false,
      },
    ]);

    // Shuffle the Numbers
    return pairedValues.sort(() => 0.5 - Math.random());
  }

  const checkCards = (value, id, matched, isShown) => {
    if (matched || isShown || selectedCards.length === 2 || isWaiting) {
      return;
    }
    if (selectedCards.length < 2) {
      setSelectedCards((prevSelectedCard) => [
        ...prevSelectedCard,
        { value, id },
      ]);

      setCardSet((prevSet) => {
        return prevSet.map((card) => {
          if (card.id === id) {
            return { ...card, isShown: true };
          }
          return card;
        });
      });
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      setIsWaiting(true);
      if (selectedCards[0].value === selectedCards[1].value) {
        markCardsToFlashYellow();

        setTimeout(() => {
          removeYellowFlashFromCards();
          setMatchedPair((prevMatchedPair) => [
            ...prevMatchedPair,
            selectedCards[0].value,
            selectedCards[1].value,
          ]);
          setCardSet((prevSet) => {
            return prevSet.map((card) => {
              if (
                card.value === selectedCards[0].value &&
                card.value === selectedCards[1].value
              ) {
                return { ...card, matched: true };
              }
              return card;
            });
          });
        }, 500);
      } else {
        setTimeout(() => {
          setCardSet((prevSet) => {
            return prevSet.map((card) => {
              if (
                card.id === selectedCards[0].id ||
                card.id === selectedCards[1].id
              ) {
                return { ...card, isShown: false };
              }
              return card;
            });
          });
        }, 1500);
      }
      setSelectedCards([]);
      setTimeout(() => setIsWaiting(false), 1500);
    }
  }, [selectedCards]);

  function markCardsToFlashYellow() {
    setCardSet((prevSet) =>
      prevSet.map((card) => {
        if (
          card.value === selectedCards[0].value ||
          card.value === selectedCards[1].value
        ) {
          return { ...card, flashYellow: true };
        }
        return card;
      })
    );
  }

  function removeYellowFlashFromCards() {
    setCardSet((preSet) =>
      preSet.map((card) => {
        if (card.flashYellow) {
          return { ...card, flashYellow: false };
        }
        return card;
      })
    );
  }
  return (
    <SoloPlayerGameBoard>
      <div>
        <h1>memory</h1>
        <button>menu</button>
      </div>
      <GameBoard>
        {cardSet.map((el) => (
          <Card
            key={el.id}
            onClick={() => {
              checkCards(el.value, el.id, el.matched, el.isShown);
            }}
            isflipped={el.isShown}
            matched={el.matched}
          >
            <div>
              {el.isShown ? (
                <Back matched={el.matched} flashyellow={el.flashYellow}>
                  {el.value}
                </Back>
              ) : (
                <Front></Front>
              )}
            </div>
          </Card>
        ))}
      </GameBoard>
      <TimerMoves>
        <div>
          <span>Time</span>
          <CountUpTimer />
        </div>
        <div>
          <span>Moves</span>
          <p>moves</p>
        </div>
      </TimerMoves>
    </SoloPlayerGameBoard>
  );
};

export default CustomSoloPlayer;
const SoloPlayerGameBoard = styled.div`
  width: 375px;
  height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const GameBoard = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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

const TimerMoves = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    background-color: ${({ theme }) => theme.colors.jungleMistLIight};
    width: 46.2%;
    height: 70px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-top: 10px;
      color: ${({ theme }) => theme.colors.cyanBlue};
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
    }
  }
`;
