import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import './TodoList.css';

export const TodoList = ({ searchValue, todos, loading, error, setTodos}) => {
   const filterTodos = todos.filter((item) =>
      item.text.toLowerCase().includes(searchValue.toLowerCase())
   );

   return (
      <section className="TodoList-container">
         {/* Loading = true, error = false */}
         {loading && <TodoLoading loading={loading} />}

         {/* Loading = false, error = false, empty = false */}
         {!error &&
            filterTodos.map((item) => (
               <TodoItem
                  key={item.text}
                  todo={item}
                  todos={todos}
                  setTodos={setTodos}
               />
            ))}

         {/* Loading = false, error = true */}
         {error && <TodoError />}

         {/* Loading = false, error = false, empty = true */}
         {!loading && !todos.length && <TodoEmpty />}
      </section>
   );
};
