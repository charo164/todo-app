import React from 'react';
import Todo from './Todo';
import Illustration from './Illustration';
import { TodosCType } from '../types';
import Empty from '../img/logging-off.svg';
import Empty2 from '../img/cart-is-empty.svg';
import Empty3 from '../img/searching-error.svg';

const Todos: React.FC<TodosCType> = ({ todos, filtre, updateTodo, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.length ? (
          <>
            {todos.map((todo, i) => {
              return (
                <Todo
                  key={`todo-${todo.id}`}
                  todo={todo}
                  updateTodo={updateTodo}
                  removeTodo={removeTodo}
                />
              );
            })}
          </>
        ) : (
          <>
            <Illustration
              text="You're done for this week! #NoTodo"
              img={Empty}
              show={filtre === 'active'}
            />
            <Illustration
              text="No activities found!"
              img={Empty2}
              show={filtre === 'completed'}
            />
            <Illustration text="No tasks to do!" img={Empty3} show={filtre === 'all'} />
          </>
        )}
      </ul>
    </div>
  );
};

export default Todos;
