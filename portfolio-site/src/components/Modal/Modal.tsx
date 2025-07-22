import type { ReactNode } from 'react';
import './Modal.scss';

interface ModalProps {
  visible: boolean;
  onClick: (value: boolean) => void;
  children?: ReactNode;
}

export default function Modal({ visible, onClick, children }: ModalProps) {
  return (
    <div className={`modal${ visible ? ' visible' : ''}`} onClick={() => onClick(false)}>
      <div className='modal-content'>
        { children }
      </div>
    </div>
  );
}
