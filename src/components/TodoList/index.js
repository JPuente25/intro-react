import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../../TodoContext';
import { LoadingSkeleton } from '../LoadingSkeleton';
import './TodoList.css';

export function TodoList() {
   const { searchValue, todos, loading } = React.useContext(TodoContext);
   const filterTodos = todos.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()));

   return (
      <React.Fragment>
         <div className='TodoList-container'>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
         {filterTodos.map((item) => (
            <TodoItem
            key={item.text}
            todo={item}
            />
            ))}
         </div>
      </React.Fragment>
   )};
