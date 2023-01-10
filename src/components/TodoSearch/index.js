import React from "react";
import "./StyledTodoSearch.css";

export const TodoSearch = ({searchValue, setSearchValue, loading}) => {
   const onSearchValueChange = (event) => setSearchValue(event.target.value);

   return (
      <div className="TodoSearch-container">
         <input
            placeholder="Search task"
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
         />
         <div className="TodoSearch-button">🐒</div>
      </div>
   );
}
