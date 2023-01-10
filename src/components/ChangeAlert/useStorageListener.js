import React from "react";

function useStorageListener() {
   const [storageChange, setStorageChange] = React.useState(false);

   const setStorageSwitch = () => {
      window.location.reload();
   }

   window.addEventListener('storage', (change) => {
      setStorageChange(true);
   })

   return {
      show: storageChange,
      toggleShow: setStorageSwitch,
   }
}


export { useStorageListener };