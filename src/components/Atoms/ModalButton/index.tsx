import { useState } from "react";
import Modal from "../Modal";
import { SMButton } from "./style";

const ModalButton = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <SMButton onClick={openModal}>Ver mais</SMButton>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ModalButton;