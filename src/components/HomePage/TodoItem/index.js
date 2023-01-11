import React from 'react';
import { TodoIcon } from '../TodoIcon';
import './StyledTodoItem.css';
import { useNavigate } from 'react-router-dom';

export const TodoItem = ({ todo, todos, setTodos }) => {
   const navigate = useNavigate();

   const onComplete = () => {
      const updatedTodos = todos.map((item) => {
         if (item.id === todo.id)
            return {
               text: item.text,
               completed: !item.completed,
               id: item.id,
            };
         return item;
      });
      setTodos(updatedTodos);
   };

   const onDelete = () => {
      const updatedTodos = todos.filter((item) => item.id !== todo.id);
      setTodos(updatedTodos);
   };

   const onEdit = () => {
      navigate(`/edit/${todo.id}`);
   }

   return (
      <li className={`TodoItem ${todo.completed && 'TodoItem--complete'}`}>
         <div 
            className="Icon-check"
            onClick={onComplete}
         >
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

         <div className='edit-delete-container'>
            <div onClick={onDelete}>
               <TodoIcon icon="delete" />
            </div>

            <div onClick={onEdit}>
               <TodoIcon icon="edit" />
            </div>
         </div>

      </li>
   );
}
