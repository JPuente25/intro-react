import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext();

export const TodoProvider = ({children}) => {
   const {
      item: todos, 
      saveItem: setTodos, 
      loading} = useLocalStorage('TODOS_V1', []);
   const [searchValue, setSearchValue] = React.useState('');
   const [openModal, setOpenModal] = React.useState(false);
   const [loadingSkeleton, setLoadingSkeleton] = React.useState(true);
   let error = false;
   const completedTodos = todos.filter((todo) => todo.completed).length;
   const totalTodos = todos.length;

   return (
      <TodoContext.Provider value={{
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
         {children}
      </TodoContext.Provider>
   )
}
