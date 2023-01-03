import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext();

export function TodoProvider(props) {
   const {
      item: todos, 
      saveItem: setTodos, 
      loading} = useLocalStorage('TODOS_V1', []);
   const [searchValue, setSearchValue] = React.useState('');
   const [openModal, setOpenModal] = React.useState(false);
   const [loadingSkeleton, setLoadingSkeleton] = React.useState(true);
   const [check, setCheck] = React.useState(false);
   let error = false;
   const completedTodos = todos.filter((todo) => todo.completed).length;
   const totalTodos = todos.length;

   return (
      <TodoContext.Provider value={{
         check,
         setCheck,
         loadingSkeleton,
         setLoadingSkeleton,
         openModal,
         setOpenModal,
         loading,
         error,
         todos,
         setTodos,
         searchValue,
         setSearchValue,
         completedTodos,
         totalTodos,
      }}>
         {props.children}
      </TodoContext.Provider>
   )
}
