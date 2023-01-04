import React from 'react';
import { TodoContext } from '../../TodoContext';
import './StyledTodoItem.css';
import { TodoIcon } from '../TodoIcon';

export function TodoItem({todo}) {
   const { todos, setTodos } = React.useContext(TodoContext);
   const [check, setCheck] = React.useState(false);

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
      setCheck(prev => !prev);
   };

   const onDelete = () => {
      const updatedTodos = todos.filter((item) => item.text !== todo.text);
      setTodos(updatedTodos);
   };

   return (
      <li className={`TodoItem ${todo.completed && 'TodoItem--complete'}`}>
         <div onClick={onComplete}>
            <TodoIcon check={check} icon="check"/>
         </div>

         <p
            className={`TodoItem-p
               ${todo.completed && 'TodoItem-p--complete'}`}
         >
            {todo.text}
         </p>

         <div onClick={onDelete}>
            <TodoIcon check={check} icon="delete"/>
         </div>
      </li>
   );
}
