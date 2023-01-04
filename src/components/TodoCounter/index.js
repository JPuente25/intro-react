import React from 'react';
import { TodoContext } from '../../TodoContext';
import './StyledTodoCounter.css';

export const TodoCounter = () => {
   const { completedTodos, totalTodos } = React.useContext(TodoContext);
   
   return (
      <h2 className="TodoCounter">
         Completed {completedTodos} to {totalTodos} tasks
      </h2>
   )
};