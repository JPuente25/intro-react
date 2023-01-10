import React from "react";
import './TodoIcon.css';

export const DeleteIcon = ({icon}) => (
   <div 
      className={`icon-delete--ring
      ${(icon === 'delete') && 'enabled'}
      `}>
      <div className={`icon-delete--ring-inside`}>
         <p>X</p>
      </div>
   </div>
);
