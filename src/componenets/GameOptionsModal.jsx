import MenuModal from "./portals/MenuModal";
import RestartButton from "./buttons/RestartButton";
import Button from "./buttons/Button";
import PropTypes from "prop-types";
const GameOptionsModal = ({ startNewGame, resumeGame, restartGame }) => {
  return (
    <MenuModal>
      <RestartButton onclick={restartGame} />
      <Button onclick={startNewGame}>New Game</Button>
      <Button onclick={resumeGame}>Resume Game</Button>
    </MenuModal>
  );
};

export default GameOptionsModal;

GameOptionsModal.propTypes = {
  startNewGame: PropTypes.func.isRequired,
  resumeGame: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
};
