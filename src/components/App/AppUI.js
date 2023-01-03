import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../../Modal';
import { TodoForm } from '../../TodoForm';

export function AppUI() {
   return (
      <React.Fragment>
         <TodoCounter />
         <TodoSearch />
         <TodoList />
         <Modal>
            <TodoForm />
         </Modal>
         <CreateTodoButton />
      </React.Fragment>
   );
}
