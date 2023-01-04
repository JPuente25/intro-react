import React from "react";
import './TodoIcon.css';

export function DeleteIcon({check, icon}) {
   return(
      <div 
         className={`icon-delete--ring
         ${(icon === 'delete') && 'enabled'}
         `}>
         <div className={`icon-delete--ring-inside`}>
            <p>X</p>
         </div>
      </div>
   )
}