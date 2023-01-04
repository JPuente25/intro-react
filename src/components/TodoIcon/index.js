import React from "react";
import { DeleteIcon } from './DeleteIcon'
import { CheckIcon } from './CheckIcon';
import './TodoIcon.css';

export const TodoIcon = ({icon, check}) => (
   <div className="container">
      <CheckIcon 
         icon={icon}
         check={check}/>
      <DeleteIcon 
         icon={icon}
         check={check}/>
   </div>
)

