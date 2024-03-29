import { createPortal } from "react-dom";
import styled from "styled-components";
const MenuModal = (props) => {
  return createPortal(
    <div>
      <Div>{props.children}</Div>,<Overlay></Overlay>
    </div>,
    document.getElementById("modal")
  );
};

export default MenuModal;

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 327px;
  height: 224px;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  border-radius: 10px;
  z-index: 5;
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
