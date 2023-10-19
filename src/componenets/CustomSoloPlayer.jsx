import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const CustomSoloPlayer = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardSet, setCardSet] = useState(generateCardSet());
  const [matchedPair, setMatchedPair] = useState([]);
  // const [isShown, setIsSown] = useState(false);
  function generateCardSet() {
    const values = Array.from({ length: 18 }, (_, index) => index + 1);

    const pairedValues = values.flatMap((value) => [
      { id: uuidv4(), value, matched: false, isShown: false },
      { id: uuidv4(), value, matched: false, isShown: false },
    ]);

    // Shuffle the Numbers
    return pairedValues.sort(() => 0.5 - Math.random());
  }

  const checkCards = (value, id) => {
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
  const mutchSelectedCards = () => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].value === selectedCards[1].value) {
        setMatchedPair((prevMatchedPair) => [
          ...prevMatchedPair,
          selectedCards[0].id,
          selectedCards[1].id,
        ]);
      }
      setSelectedCards([]);
    }
  };
  mutchSelectedCards();

  console.log(cardSet);
  return (
    <GameBoard>
      {cardSet.map((el) => (
        <Card
          key={el.id}
          onClick={() => {
            checkCards(el.value, el.id);
          }}
          isFlipped={el.isShown}
        >
          <div>{el.isShown ? <Back>{el.value}</Back> : <Front></Front>}</div>
        </Card>
      ))}
    </GameBoard>
  );
};

export default CustomSoloPlayer;

const GameBoard = styled.div`
  width: 375px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Card = styled.div`
  width: 46.878px;
  height: 46.878px;
  cursor: pointer;
  position: relative;
  div {
    border-radius: 41px;
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
    transform: rotateY(${(props) => (props.isFlipped ? "180deg" : "0deg")});
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
  background-color: ${({ theme }) => theme.colors.blueWood};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;
