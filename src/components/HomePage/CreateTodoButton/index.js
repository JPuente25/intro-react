import React from "react";
import './StyledCreateTodoButton.css';

export const CreateTodoButton = ({ setOpenModal }) => {
   const onModal = () => setOpenModal(prev => !prev);

   return(
         <button 
         className="CreateTodoButton"
         onClick={onModal}
         >
            +
         </button>
   );
}