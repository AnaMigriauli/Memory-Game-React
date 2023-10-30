import { createPortal } from "react-dom";
import styled from "styled-components";
import { Breakpoints } from "../../assets/themes/themes";
const ModalSoloPlayer = (props) => {
  return createPortal(
    <div>
      <Div>{props.children}</Div>,<Overlay></Overlay>
    </div>,
    document.getElementById("modal")
  );
};
export default ModalSoloPlayer;

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 327px;
  height: 376px;
  padding: 32px 24px 24px 24px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  border-radius: 10px;
  z-index: 5;
  @media (min-width: ${Breakpoints.medium}) {
    width: 654px;
    height: 510px;
    padding: 51px 56px 69px 56px;
    border-radius: 20px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  z-index: 4;
`;
