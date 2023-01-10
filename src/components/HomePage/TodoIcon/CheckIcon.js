import React from "react";
import './TodoIcon.css';

export const CheckIcon = ({check, icon}) => (
   <div 
      className={`icon-check--ring
      ${(icon === 'check') && 'enabled'}
      `}>
         <div className={`icon-check--ring-inside
         ${check && 'icon-check--true'}`}>
            {check && '✔'}
         </div>
   </div>
)
