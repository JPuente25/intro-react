import React from "react";
import "./StyledTodoSearch.css";
import { useNavigate, useParams } from  'react-router-dom';

export const TodoSearch = ({ setSearchValue, loading}) => {

   const navigate = useNavigate();
   const [ inputValue, setInputValue ]= React.useState('');

   const onChangeValue = (e) => {
      setInputValue(e.target.value); 
   };

   const onSearchValueChange = () => {
      // setSearchValue(inputValue);
      const transValue = inputValue.replaceAll(' ', '-');
      navigate(`/search/${transValue}`);
   };

   return (
      <div className="TodoSearch-container">
         <input
            placeholder="Search task"
            className="TodoSearch"
            value={inputValue}
            onChange={onChangeValue}
            disabled={loading}
         />
         <button
            className="TodoSearch-button"
            onClick={onSearchValueChange}
         >🐒</button>
      </div>
   );
}
