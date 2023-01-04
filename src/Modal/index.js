import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export const Modal = ({ children, openModal }) => {
   return ReactDOM.createPortal(
      <div className={`ModalBackground
                      ${openModal && 'enabled'}`}>
         {children}
      </div>,
      document.getElementById('modal'),
   )
}

