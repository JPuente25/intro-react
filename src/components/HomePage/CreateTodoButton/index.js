import React from "react";
import './StyledCreateTodoButton.css';
import { useNavigate } from 'react-router-dom';

export const CreateTodoButton = ({route}) => {
   const navigate = useNavigate();
   const onNavigate = () => navigate(route)
   return(
      <button 
         className="CreateTodoButton"
         onClick={onNavigate}
      >
         +
      </button>
   );
}