import React from "react";
import { useStorageListener } from './useStorageListener';

export const ChangeAlert = () => {
   const { show, toggleShow } = useStorageListener();
   if (show) {
      return (
         <div>
            <p>Hubo cambios?</p>
            <button 
               onClick={toggleShow}>Reload</button>
         </div>
      )
   };
};