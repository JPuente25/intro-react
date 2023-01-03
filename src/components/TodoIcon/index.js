import React from "react";
import { DeleteIcon } from './DeleteIcon'
import './TodoIcon.css';
import { CheckIcon } from './CheckIcon';

export function TodoIcon({icon, check}) {
   return(
      <div className={`container` }>
         <CheckIcon 
            icon={icon}
            check={check}/>

         <DeleteIcon 
            icon={icon}
            check={check}/>
      </div>
   )
}
