import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { FC } from "react";
import * as Styles from "../StyledComponents/modalStyles/modalStyles";
interface IModal {
  title?: string;
  text?: string;
  button?: string;
  onClose: any;
  deleteArticle?: any;
}

const modalRoot = document.getElementById("modal-root");

const Modal: FC<IModal> = ({ title, text, button, onClose, deleteArticle }) => {
  if (!modalRoot) {
    throw new Error("The element #portal wasn't found");
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(e);
      }
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal((
    <>
      <ModalOverlay onClick={onClose} />
      <Styles.ModalContainer>
        <Styles.ModalHeading>{title}</Styles.ModalHeading>
        <Styles.ModalSubHeading>
          {text}
        </Styles.ModalSubHeading>

        <Styles.ModalButtonClose onClick={onClose}>
        </Styles.ModalButtonClose>

        <Styles.ModalButtonSubmit onClick={deleteArticle}>
         {button}
        </Styles.ModalButtonSubmit>
      </Styles.ModalContainer>
    </>

  ), modalRoot
  )
};

export default Modal;
