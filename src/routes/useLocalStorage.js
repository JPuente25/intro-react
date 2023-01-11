import React from "react";

export function useLocalStorage(itemName, initialValue) {

   //UseReducer
   const [state, dispatch] = 
      React.useReducer(reducer, initialState(initialValue));

   const {sincronized,
          loading,
          item,
          error } = state;

   //ACTION CREATORS
   const onError = () => {
      dispatch ({type: actionTypes.error})
   };

   const onSuccess = (payload) => {
      dispatch ({type: actionTypes.success, payload: payload})
   };

   const onSave = (payload) => {
      dispatch({type: actionTypes.save, payload: payload});
   }
   
   // UseEffect
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
            
            onSuccess(parsedItem);
         }, 500);
      }, [sincronized]);
   } catch{
      onError();
   }

   const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
   };
   
   return {
      todos: item, 
      setTodos: saveItem, 
      loading, 
      error,
   }
};


///////////////////////////////////////////////////
//InitialValue
const initialState = (initialValue) => ({
   sincronized: true,
   loading: true,
   item: initialValue,
   error: false
});

//ActionTypes
const actionTypes = {
   error: 'ERROR',
   success: 'SUCCESS',
   save: 'SAVE',
};

//Reducer Function
const reducer = (state, action) => {
   return reducerObject(state, action.payload)[action.type] 
   || state;
};

//ReducerObject
const reducerObject = (state, payload) => ({
   [actionTypes.error]: {
      ...state,
      error: true,
   },
   [actionTypes.success]: {
      ...state,
      item: payload,
      loading: false,
   },
   [actionTypes.save]: {
      ...state,
      item: payload,
   }
});