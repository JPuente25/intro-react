import React from 'react';
import './StyledTodoCounter.css';

export const TodoCounter = ({ completedTodos, totalTodos }) => {   
   return (
      <h2 className="TodoCounter">
         Completed {completedTodos} to {totalTodos} tasks
      </h2>
   )
};