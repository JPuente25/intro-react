import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

export function TodoForm() {
   const [newTodoValue, setNewTodoValue] = React.useState('');

   const onChangeValue = (event) => {
      const value = event.target.value;
      setNewTodoValue(value);
   }

   const {
      todos,
      setTodos,
      setOpenModal,
   } = React.useContext(TodoContext);

   const onCancel = () => {
      setOpenModal(prev => !prev);
      setNewTodoValue('');
   };

   const onSubmit = () => {
      const newTodos = [...todos];
      newTodos.push({
         text: newTodoValue,
         completed: false,
      })
      setTodos(newTodos);
      setNewTodoValue('');
   };


   return(
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
         />
         <div className="todoform-buttonbox">
            <button 
               className="todoform-button todoform-button--cancel"
               id="text"
               type="button"
               onClick={onCancel}>
               Cancelar
            </button>
            <button
               className="todoform-button todoform-button--add"
               type="submit">
               Añadir
            </button>
         </div>
      </form>
   )
}