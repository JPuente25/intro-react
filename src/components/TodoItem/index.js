import React from 'react';
import { TodoContext } from '../../TodoContext';
import { TodoIcon } from '../TodoIcon';
import './StyledTodoItem.css';

export const TodoItem = ({ todo }) => {
   const { todos, setTodos } = React.useContext(TodoContext);

   const onComplete = () => {
      const updatedTodos = todos.map((item) => {
         if (item.text === todo.text)
            return {
               text: item.text,
               completed: !item.completed,
            };
         return item;
      });
      setTodos(updatedTodos);
   };

   const onDelete = () => {
      const updatedTodos = todos.filter((item) => item.text !== todo.text);
      setTodos(updatedTodos);
   };

   return (
      <li className={`TodoItem ${todo.completed && 'TodoItem--complete'}`}>
         <div onClick={onComplete}>
            <TodoIcon
               check={todo.completed}
               icon="check"
            />
         </div>

         <p
            className={`TodoItem-p
               ${todo.completed && 'TodoItem-p--complete'}`}
         >
            {todo.text}
         </p>

         <div onClick={onDelete}>
            <TodoIcon icon="delete" />
         </div>
      </li>
   );
}
