import {useRef, useEffect} from 'react';
import * as Styles from "../../components/StyledComponents/modalStyles/modalStyles";

import {FC} from 'react'

interface IModalOverlay {
  onClick: ()=> void;
}

const ModalOverlay: FC<IModalOverlay> = ({ onClick }) => {
  const overlay = useRef(null)
  useEffect(() => {
    const handleOverlayClick = (e: MouseEvent) => {
      if (e.target === overlay.current) {
        onClick();
      }
    };
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [onClick]);

  return (
    <Styles.ModalOverlay ref={overlay}></Styles.ModalOverlay>
  );
}

export default ModalOverlay;
