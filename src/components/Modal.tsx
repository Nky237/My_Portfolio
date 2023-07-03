// Modal.js
const Modal = ({ closeModal, selectedItem }: any) => {
  return (
    <div className="modaly">
      <div className="ModalContainer">
        <h1 onClick={closeModal}>X</h1>
        <img src={selectedItem.image} alt="" />
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.para}</p>
        <p>
          <a href={selectedItem.hosted} target="_blank">
            {" "}
            Click here to see live link
          </a>
        </p>
        <p>
          <a href={selectedItem.github} target="_blank">
            Click here to see github link
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
