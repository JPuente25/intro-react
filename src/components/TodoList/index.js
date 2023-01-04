import React from 'react';
import { TodoItem } from '../TodoItem';
import { LoadingSkeleton } from '../LoadingSkeleton';
import './TodoList.css';

export const TodoList = ({searchValue, todos, loading, setTodos}) => {
   const filterTodos = todos.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()));

   return (
      <React.Fragment>
         <div className='TodoList-container'>
            <LoadingSkeleton loading={loading}/>
            <LoadingSkeleton loading={loading}/>
            <LoadingSkeleton loading={loading}/>
            <LoadingSkeleton loading={loading}/>
            <LoadingSkeleton loading={loading}/>
            <LoadingSkeleton loading={loading}/>
            <LoadingSkeleton loading={loading}/>
         {filterTodos.map((item) => (
            <TodoItem
            key={item.text}
            todo={item}
            todos={todos}
            setTodos={setTodos}
            />
            ))}
         </div>
      </React.Fragment>
   )};
