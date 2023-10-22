import { useEffect, useReducer } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CountUpTimer from "./CountUpTimer";
import StartGame from "./StartGame";

const actionTypes = {
  SET_SELECTED_CARDS: "SET_SELECTED_CARDS",
  SET_CARD_SET: "SET_CARD_SET",
  SET_MATCHED_PAIR: "SET_MATCHED_PAIR",
  SET_IS_WAITING: "SET_IS_WAITING",
  INCREMENT_CLICK_COUNT: "INCREMENT_CLICK_COUNT",
  RETUNRN_TO_MENU: "RETUNRN_TO_MENU",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CARDS:
      return {
        ...state,
        selectedCards: action.selectedCards,
        cardSet: action.cardSet,
      };
    case actionTypes.INCREMENT_CLICK_COUNT:
      return { ...state, clickCount: action.payload };
    case actionTypes.SET_IS_WAITING:
      return {
        ...state,
        isWaiting: action.payload,
      };
    case actionTypes.SET_MATCHED_PAIR:
      return { ...state, matchedPair: action.payload };
    case actionTypes.SET_CARD_SET:
      return {
        ...state,
        cardSet: action.payload,
      };
    case actionTypes.RETUNRN_TO_MENU:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

const CustomSoloPlayer = () => {
  const [state, dispatch] = useReducer(reducer, {
    selectedCards: [],
    cardSet: generateCardSet(),
    matchedPair: [],
    isWaiting: false,
    clickCount: 0,
    menu: false,
  });

  const handleButtonClick = () => {
    dispatch({
      type: actionTypes.INCREMENT_CLICK_COUNT,
      payload: state.clickCount + 1,
    });
  };

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
    if (
      matched ||
      isShown ||
      state.selectedCards.length === 2 ||
      state.isWaiting
    ) {
      return;
    }

    dispatch({
      type: actionTypes.SET_SELECTED_CARDS,
      selectedCards: [...state.selectedCards, { value, id }],
      cardSet: state.cardSet.map((card) => {
        if (card.id === id) {
          return { ...card, isShown: true };
        }
        return card;
      }),
    });
  };

  useEffect(() => {
    if (state.selectedCards.length === 2) {
      dispatch({ type: actionTypes.SET_IS_WAITING, payload: true });

      if (state.selectedCards[0].value === state.selectedCards[1].value) {
        markCardsToFlashYellow();
        setTimeout(() => {
          removeYellowFlashFromCards();
          dispatch({
            type: actionTypes.SET_MATCHED_PAIR,
            payload: [
              ...state.matchedPair,
              state.selectedCards[0].value,
              state.selectedCards[1].value,
            ],
          });

          dispatch({
            type: actionTypes.SET_CARD_SET,
            payload: state.cardSet.map((card) => {
              if (
                card.value === state.selectedCards[0].value &&
                card.value === state.selectedCards[1].value
              ) {
                return { ...card, matched: true };
              }
              return card;
            }),
          });
        }, 500);
      } else {
        setTimeout(() => {
          dispatch({
            type: actionTypes.SET_CARD_SET,
            payload: state.cardSet.map((card) => {
              if (
                card.id === state.selectedCards[0].id ||
                card.id === state.selectedCards[1].id
              ) {
                return { ...card, isShown: false };
              }
              return card;
            }),
          });
        }, 1500);
      }

      dispatch({
        type: actionTypes.SET_SELECTED_CARDS,
        selectedCards: [],
        cardSet: state.cardSet,
      });
      setTimeout(
        () => dispatch({ type: actionTypes.SET_IS_WAITING, payload: false }),
        1500
      );
    }
  }, [state.selectedCards]);

  function markCardsToFlashYellow() {
    dispatch({
      type: actionTypes.SET_CARD_SET,
      payload: state.cardSet.map((card) => {
        if (
          card.value === state.selectedCards[0].value &&
          card.value === state.selectedCards[1].value
        ) {
          return { ...card, flashYellow: true };
        }
        return card;
      }),
    });
  }

  function removeYellowFlashFromCards() {
    dispatch({
      type: actionTypes.SET_CARD_SET,
      payload: state.cardSet.map((card) => {
        if (card.flashYellow) {
          return { ...card, flashYellow: false };
        }
        return card;
      }),
    });
  }

  const menuHandler = () => {
    dispatch({ type: actionTypes.RETUNRN_TO_MENU, payload: true });
  };
  if (state.menu) {
    return <StartGame />;
  }
  return (
    <SoloPlayerGameBoard>
      <Header>
        <h1>memory</h1>
        <button onClick={() => menuHandler()}>menu</button>
      </Header>
      <GameBoard>
        {state.cardSet.map((el) => (
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
          <p>{state.clickCount}</p>
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
  }
`;
const GameBoard = styled.div`
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
      margin-bottom: 2px;
      color: ${({ theme }) => theme.colors.cyanBlue};
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
    }
    p {
      color: ${({ theme }) => theme.colors.blueWood};
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
    }
  }
`;
