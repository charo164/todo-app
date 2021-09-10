import React, { useRef, useState } from 'react';
import { CgTrashEmpty } from 'react-icons/cg';
import { MdEdit, MdCancel } from 'react-icons/md';
import { TodoCType } from '../types';
import EditTodo from './EditTodo';

const Todo: React.FC<TodoCType> = ({ todo, updateTodo, removeTodo }) => {
  const [editing, setEditing] = useState(false);
  const todoRef = useRef<HTMLLIElement>(null);

  const toggleEdit = (e) => {
    if (!editing) setEditing(true);
    else {
      updateTodo(todo.id, 'text', sessionStorage[`todo-${todo.id}-defaultValue`] || todo.text);
      setEditing(false);
    }
  };
  return (
    <li ref={todoRef} className="flex items-center justify-between w-full py-1 mt-5 group fadeIn">
      <div className="flex items-center">
        <input
          onChange={(e) => updateTodo(todo.id, 'completed', e.target.checked)}
          className="form-checkbox w-6 h-6 focus:ring-0 rounded-md "
          type="checkbox"
          id={`todo-${todo.id}`}
          defaultChecked={todo.completed}
        />
        <label
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          htmlFor={`todo-${todo.id}`}
          className="text-gray-700 text-lg font-medium ml-2 capitalize cursor-pointer"
        >
          {!editing ? (
            todo.text
          ) : (
            <EditTodo todo={todo} updateTodo={updateTodo} setEditing={setEditing} />
          )}
        </label>
      </div>
      <div className="flex items-center opacity-0 group-hover:opacity-100">
        {!todo.completed && (
          <span
            onClick={toggleEdit}
            className="cursor-pointer text-gray-500 hover:text-blue-500 mr-2"
          >
            {!editing ? <MdEdit size="1.2em" /> : <MdCancel size="1.2em" />}
          </span>
        )}
        <span
          className="cursor-pointer text-gray-500 hover:text-red-500"
          onClick={() => removeTodo(todo.id, todoRef)}
        >
          <CgTrashEmpty size="1.2em" />
        </span>
      </div>
    </li>
  );
};

export default Todo;
