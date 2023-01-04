import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../../Modal';
import { TodoForm } from '../../TodoForm';
import './App.css';

export const AppUI = () => (
      <React.Fragment>
         <h1 className='app-title'>Your Task</h1>
         <TodoCounter />
         <TodoSearch />
         <TodoList />
         <Modal>
            <TodoForm />
         </Modal>
         <CreateTodoButton />
      </React.Fragment>
);
