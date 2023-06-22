const Modal = ({ closeModal, selectedItem }: any) => {
  return (
    <div className="modaly">
      <div className="ModalContainer">
        <h1 onClick={closeModal}>X</h1>
        <img src={selectedItem.image} alt="" />
        <p>{selectedItem.para}</p>
      </div>
    </div>
  );
};

export default Modal;
