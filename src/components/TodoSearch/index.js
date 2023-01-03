import React from "react";
import "./StyledTodoSearch.css";
import { TodoContext } from "../../TodoContext";

export function TodoSearch() {
   const { searchValue, setSearchValue } = React.useContext(TodoContext);
   const onSearchValueChange = (event) => {
      setSearchValue(event.target.value);
   };

   return (
      <input
         placeholder="Cebolla"
         className="TodoSearch"
         value={searchValue}
         onChange={onSearchValueChange}
      />
   );
}
