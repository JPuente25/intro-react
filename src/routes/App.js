import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { EditTodoPage } from './EditTodoPage';
import { NewTodoPage } from './NewTodoPage';

const App = () => {
   return (
      <HashRouter>
         <Routes>
               <Route 
                  path='/'
                  element={<HomePage />} 
               />
               <Route 
                  path='/edit/:id'
                  element={<EditTodoPage />} 
               />
               <Route 
                  path='/new'
                  element={<NewTodoPage />} 
               />
               <Route 
                  path='/search/:query'
                  element={<HomePage />} 
               />
               <Route 
                  path='/search/'
                  element={<HomePage />} 
               />
               <Route
                  path='*'
                  element={<p>Not found</p>}
               />
         </Routes>
      </HashRouter>
   );
}

export { App };