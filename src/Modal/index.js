import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext';
import './Modal.css';

export function Modal({ children }) {
   const { openModal } = React.useContext(TodoContext);
   return ReactDOM.createPortal(
      <div className={`ModalBackground
                      ${openModal && 'enabled'}`}>
         {children}
      </div>,
      document.getElementById('modal'),
   )
}

