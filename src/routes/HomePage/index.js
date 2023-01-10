import React from 'react';
import { useLocalStorage } from '../../TodoContext/useLocalStorage'; 
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../../Modal';
import { TodoForm } from '../../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoError } from '../TodoError';
import { ChangeAlert } from '../ChangeAlert';
import './HomePage.css';

export const HomePage = () => {
      const {
         todos, 
         setTodos, 
         loading,
         error,
      } = useLocalStorage('TODOS_V1', []);

      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      
      const completedTodos = todos.filter((todo) => todo.completed).length;
      const totalTodos = todos.length;
   
      return (
         <React.Fragment>
            <h1 className='app-title'>Your Task</h1>

            <TodoHeader loading={loading}>
                  <TodoCounter 
                     totalTodos={totalTodos}
                     completedTodos={completedTodos}/>
                  <TodoSearch 
                     searchValue={searchValue}
                     setSearchValue={setSearchValue}/>
            </TodoHeader>

            <TodoList 
               loading={loading}
               error={error}
               searchValue={searchValue}
               todos={todos}
               setTodos={setTodos} />

            <Modal
               openModal={openModal}>
               <TodoForm 
                  todos={todos}
                  setTodos={setTodos}
                  setOpenModal={setOpenModal}/>
            </Modal>

            <CreateTodoButton
               setOpenModal={setOpenModal} />

            <ChangeAlert />
         </React.Fragment>
      )
   }
