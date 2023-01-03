import React from "react";

export function useLocalStorage(itemName, initialValue) {
   const [loading, setLoading] = React.useState(true);
   const [item, setItem] = React.useState(initialValue);

   try{
      React.useEffect(() => {
         setTimeout(() => {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if (!localStorageItem) {
               localStorage.setItem(itemName, JSON.stringify(initialValue));
               parsedItem = initialValue;
            } else {
               parsedItem = JSON.parse(localStorageItem);
            };
   
            setItem(parsedItem);
            setLoading(false);
   
         }, 3000);
      }, [])
   } catch{
      console.log('error')
   }


   const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
   };

   return {
      item, 
      saveItem, 
      loading
   }
};