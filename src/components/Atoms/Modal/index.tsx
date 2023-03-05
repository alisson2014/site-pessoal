import { useRef, useEffect, useCallback } from 'react';
import { Background, CloseModalButton, ModalWrapper } from "./style";

interface IModalProps {
  showModal: any
  setShowModal: any
};

const Modal = ({ showModal, setShowModal }: IModalProps) => {
  const modalRef = useRef<any>();

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e: any) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {
        showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper>
              oi
            </ModalWrapper>
            <CloseModalButton aria-label='Close modal' />
          </Background>
        ) : null
      }
    </>
  );
};

export default Modal;