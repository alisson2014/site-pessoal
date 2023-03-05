interface IModalProps {
  showModal: any
  setShowModal: any
};

const Modal = ({ showModal, setShowModal }: IModalProps) => {
  return (
    <>
      {
        showModal ? <div>Modal</div> : null
      }
    </>
  );
};

export default Modal;