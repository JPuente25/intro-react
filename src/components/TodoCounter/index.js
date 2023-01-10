import React from 'react';
import './StyledTodoCounter.css';

export const TodoCounter = ({ completedTodos, totalTodos, loading }) => {   
   return (
      <h2 className="TodoCounter">
         {(loading) 
            ? "Getting your tasks..."
            : `Completed ${completedTodos} to ${totalTodos} tasks`
         }
      </h2>
   )
};