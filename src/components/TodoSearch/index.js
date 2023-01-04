import React from "react";
import { TodoContext } from "../../TodoContext";
import "./StyledTodoSearch.css";

export const TodoSearch = () => {
   const { searchValue, setSearchValue } = React.useContext(TodoContext);
   const onSearchValueChange = (event) => setSearchValue(event.target.value);

   return (
      <div className="TodoSearch-container">
         <input
            placeholder="Search task"
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
         />
         <div className="TodoSearch-button">🐒</div>
      </div>
   );
}
