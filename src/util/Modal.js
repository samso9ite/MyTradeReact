import { useState } from 'react';
import Modal from 'react-modal';

const ModalComponent = () => {
const [modalIsOpen, setIsOpen] = useState(false)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const openModal = () => {
    setIsOpen(true);
  }

 

  const closeModal = () => {
    setIsOpen(false);
  }

    return(
        <>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
         </>
    )
}

export default ModalComponent