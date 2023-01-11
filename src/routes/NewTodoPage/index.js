import React from 'react';
import { useLocalStorage } from '../useLocalStorage';
import { TodoForm } from '../../components/NewTodoPage/TodoForm';

const NewTodoPage = () => {
   const { todos, setTodos } = useLocalStorage('TODOS_V1', []);

   return (
      <div className="ModalBackground">
         <TodoForm 
            todos={todos}
            setTodos={setTodos}
         />
      </div>
   );
};

export { NewTodoPage };
