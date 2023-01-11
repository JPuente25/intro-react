import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../useLocalStorage';

const EditTodoPage = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const {todos, setTodos} = useLocalStorage('TODOS_V1', []);
   
   const todo = todos.find(item => item.id === id);
   const [newTodoValue, setNewTodoValue] = React.useState(todo?.text);

   const onCancel = () => navigate('/');

   const onChangeValue = (event) => {
      const value = event.target.value;
      setNewTodoValue(value);
   }

   const onSubmit = (e) => {
      e.preventDefault();
      
      const anyElse = todos.filter(item => item.id !== id);
      const editedTodo = {
         ...todo,
         text: newTodoValue,
      }
      const allTodos = [...anyElse, editedTodo];

      setTodos(allTodos);
      navigate('/');
   };

   return (
      <form 
         className="todoform"
         onSubmit={onSubmit}
         >
         <label
            className="todoform-label"
         >Escribe tu nuevo TODO</label>
         <textarea 
            className="todoform-textarea"
            onChange={onChangeValue}
            placeholder={todo?.text}
            value={newTodoValue}
            required
         />
         <div className="todoform-buttonbox">
            <button 
               className="todoform-button todoform-button--cancel"
               id="text"
               type="button"
               onClick={onCancel}
            >
               Volver
            </button>
            <button
               className="todoform-button todoform-button--add"
               type="submit">
               Editar
            </button>
         </div>
      </form>
   );
};

export { EditTodoPage };