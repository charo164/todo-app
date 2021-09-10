import React, { useEffect, useRef } from 'react';
import { EditTodoCType } from '../types';

const EditTodo: React.FC<EditTodoCType> = ({ setEditing, todo, updateTodo }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const toggleEdit = (e: MouseEvent) => {
    const el: any = e.target;
    if (formRef && formRef?.current && !formRef.current.contains(el)) handleSubmit();
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    setEditing(false);
  };

  useEffect(() => {
    sessionStorage[`todo-${todo.id}-defaultValue`] = todo.text;
    window.addEventListener('click', toggleEdit);
    return () => {
      sessionStorage.removeItem(`todo-${todo.id}-defaultValue`);
      window.removeEventListener('click', toggleEdit);
    };
  }, []);

  return (
    <form ref={formRef} className="flex items-center justify-between" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        onChange={(e) => updateTodo(todo.id, 'text', e.target.value)}
        className="bg-transparent capitalize text-gray-700 text-lg font-medium outline-none"
        defaultValue={todo.text}
      />
    </form>
  );
};

export default EditTodo;
