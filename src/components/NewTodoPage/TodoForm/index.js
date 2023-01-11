import React, { useRef } from "react";
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

export function TodoForm({todos, setTodos}) {
   const navigate = useNavigate();
   const [newTodoValue, setNewTodoValue] = React.useState('');
   const [addedMsg, setAddedMsg] = React.useState(false);

   const onChangeValue = (event) => {
      const value = event.target.value;
      setNewTodoValue(value);
   }

   const onCancel = () => navigate('/');

   const onSubmit = () => {
      const newTodos = [...todos];
      newTodos.push({
         text: newTodoValue,
         completed: false,
         id: Date.now().toString(16),
      })
      setTodos(newTodos);
      setNewTodoValue('');
      setAddedMsg(true);
      setTimeout(() => setAddedMsg(false), 3000);
   };

   return(
      <div>
         <form 
            className="todoform"
            onSubmit={onSubmit}>
            <label
               className="todoform-label"
            >Escribe tu nuevo TODO</label>
            <textarea 
               className="todoform-textarea"
               onChange={onChangeValue}
               placeholder="Cortar la cebolla para el almuerzo"
               value={newTodoValue}
               required
            />
            <div className="todoform-buttonbox">
               <button 
                  className="todoform-button todoform-button--cancel"
                  id="text"
                  type="button"
                  onClick={onCancel}>
                  Volver
               </button>
               <button
                  className="todoform-button todoform-button--add"
                  type="submit">
                  Añadir
               </button>
            </div>
         </form>
         {addedMsg && <p className="success-msg">ToDo added successfully!</p>}
      </div>
   )
}