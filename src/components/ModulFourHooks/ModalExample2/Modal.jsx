import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ about, onClick }) => {
  return createPortal(
    <div>
      <p>{about}</p>
      <button onClick={() => onClick} type="button">
        close
      </button>
    </div>,
    modalRoot
  );
};

export default Modal;
