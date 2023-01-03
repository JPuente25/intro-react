import React from "react";
import './TodoIcon.css';

export function DeleteIcon({check, icon}) {
   return(
      <img src="https://img.icons8.com/ios/2x/delete-forever.png"
               className={`svg-icon
                  svg-icon-delete
                  ${((icon === 'delete') && 'enabled')}
                  ${check && 'svg-icon-delete--on'}`}/>
   )
}