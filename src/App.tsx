import { useTodos } from './utils';
import React, { useState } from 'react';
import Add from './components/Add';
import Header from './components/Header';
import Nav from './components/Nav';
import Todos from './components/Todos';
import Footer from './components/Footer';

const App = () => {
  const { todos, addTodo, removeTodo, updateTodo, clearCompletedTodo } = useTodos();
  const [filtre, setFiltre] = useState('all');
  const filter = (todos) => {
    if (filtre === 'completed') return todos.filter((t) => t.completed);
    if (filtre === 'active') return todos.filter((t) => !t.completed);
    return todos;
  };
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen m-auto px-2">
      <div className=" w-full max-w-2xl flex-auto">
        <Header />
        <Nav filtre={filtre} setFiltre={setFiltre} />
        {filtre !== 'completed' && <Add addTodo={addTodo} />}
        {todos ? (
          <Todos
            todos={filter(todos)}
            filtre={filtre}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ) : (
          <div className="flex justify-center w-full py-5">
            <h2 className="text-lg font-medium text-gray-700 animate-pulse">Loading...</h2>
          </div>
        )}
        {filtre === 'completed' && todos.filter((t) => t.completed).length !== 0 && (
          <div className="flex justify-end items-center py-8">
            <button
              onClick={clearCompletedTodo}
              className="py-2 px-4 text-sm text-white font-medium rounded-lg bg-red-500"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
