import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ about, onClick }) => {
  return createPortal(
    <div>
      <div className="Modal__content">{about}</div>
      <button onClick={onClick} type="button">
        close
      </button>
    </div>,
    modalRoot
  );
};

export default Modal;
