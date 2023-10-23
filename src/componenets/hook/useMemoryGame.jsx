import { useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const actionTypes = {
  SET_SELECTED_CARDS: "SET_SELECTED_CARDS",
  SET_CARD_SET: "SET_CARD_SET",
  SET_MATCHED_PAIR: "SET_MATCHED_PAIR",
  SET_IS_WAITING: "SET_IS_WAITING",
  INCREMENT_CLICK_COUNT: "INCREMENT_CLICK_COUNT",
  RETUNRN_TO_MENU: "RETUNRN_TO_MENU",
  RESTART_GAME: "RESTART_GAME",
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
    case actionTypes.RESTART_GAME:
      return {
        ...state,
        selectedCards: [],
        cardSet: action.payload(),
        matchedPair: [],
        isWaiting: false,
        clickCount: 0,
        menu: false,
      };

    default:
      return state;
  }
};

const useMemoryGame = (totalPairs) => {
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
    const values = Array.from({ length: totalPairs }, (_, index) => index + 1);

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

  const resumeGame = () => {
    dispatch({ type: actionTypes.RETUNRN_TO_MENU, payload: false });
  };
  const restartGame = () => {
    dispatch({ type: actionTypes.RESTART_GAME, payload: generateCardSet });
  };

  return {
    state,
    checkCards,
    handleButtonClick,
    menuHandler,
    resumeGame,
    restartGame,
  };
};

export default useMemoryGame;
