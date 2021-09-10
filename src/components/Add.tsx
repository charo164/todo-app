import React, { useState, useRef } from 'react';
import { Todo } from '../types';

const Add: React.FC<{ addTodo: (todo: Todo) => void }> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const add = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo({ text, completed: false, id: Date.now() });
    setText('');
    if (inputRef?.current) inputRef.current.value = '';
  };
  return (
    <form className="flex justify-between mt-5" onSubmit={add}>
      <input
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="add details"
        className="w-2/3 border-0 ring-1 ring-gray-300 px-3 py-3 rounded-xl sm:w-4/5 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-3 py-3 ml-2 text-white font-semibold w-28 rounded-xl bg-blue-500"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
