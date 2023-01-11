import React from "react";
import './TodoIcon.css';

export const EditIcon = ({icon}) => (
   <div 
      className={`icon-edit--ring
      ${(icon === 'edit') && 'enabled'}
      `}>
      <div className={`icon-edit--ring-inside`}>
         <img src="https://www.pngarts.com/files/3/Pencil-Transparent.png"/>
      </div>
   </div>
);