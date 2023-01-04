import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../../TodoContext';

export const App = () => (
      <TodoProvider>
         <AppUI/>
      </TodoProvider>
);
