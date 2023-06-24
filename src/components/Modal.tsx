// Modal.js
const Modal = ({
  closeModal,
  selectedItem,
  goToNextProject,
  goToPreviousProject,
  currentProjectIndex,
  totalProjects,
}: any) => {
  return (
    <div className="modaly">
      <div className="ModalContainer">
        <h1 onClick={closeModal}>X</h1>
        <img src={selectedItem.image} alt="" />
        <p>{selectedItem.para}</p>
      </div>
      <button onClick={goToPreviousProject}>Previous</button>
      <button onClick={goToNextProject}>Next</button>
      <p>
        {currentProjectIndex + 1} of {totalProjects}
      </p>
    </div>
  );
};

export default Modal;
