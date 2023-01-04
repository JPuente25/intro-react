import React from "react";
import { TodoContext } from "../../TodoContext";
import './StyledCreateTodoButton.css';

export const CreateTodoButton = () => {
   const { setOpenModal } = React.useContext(TodoContext);
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