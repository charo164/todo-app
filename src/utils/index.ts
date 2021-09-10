import { useState, useEffect } from 'react';
import { Todo } from '../types';

export const getLocalTodos = (): Todo[] => {
  if (localStorage.todos) {
    const todos = JSON.parse(localStorage.todos);
    return todos;
  }
  return [];
};

export const setLocalTodos = (todos: Todo[]) => {
  localStorage.todos = JSON.stringify(todos);
};

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setLocalTodos(newTodos);
  };

  const removeTodo = (id: number, todoRef: React.MutableRefObject<HTMLLIElement>) => {
    todoRef.current.classList.add('fadeOut');
    setTimeout(() => {
      const newTodos = [...todos.filter((t) => t.id !== id)];
      setTodos(newTodos);
      setLocalTodos(newTodos);
    }, 200);
  };

  const updateTodo = (id: number, key: string, value: any) => {
    const newTodos = todos.map((t) => {
      if (t.id !== id) return t;
      t[key] = value;
      return t;
    });
    setTodos(newTodos);
    setLocalTodos(newTodos);
  };

  const clearCompletedTodo = () => {
    const newTodos = [...todos.filter((t) => !t.completed)];
    setTodos(newTodos);
    setLocalTodos(newTodos);
  };

  useEffect(() => {
    setTodos(getLocalTodos());
  }, []);

  return { todos, addTodo, removeTodo, updateTodo, clearCompletedTodo };
};
