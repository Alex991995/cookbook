import { createPortal } from 'react-dom';
import styles from '../styles/modal.module.css';

interface IModal {
  isOpened: boolean;
  onClose: () => void;
  children: React.ReactNode
}

function Modal({ isOpened, children, onClose }:IModal) {
  if (!isOpened) {
    return null;
  }

  return createPortal(
    <div>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal}`}>
        <div>
          <span className={`${styles['close-button']}`} onClick={onClose}>
            X
          </span>
          <div className={`${styles['close-modal-content']}`}>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')!,
  );
}

export default Modal;
