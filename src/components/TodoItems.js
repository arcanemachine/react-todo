import React from 'react';
import TodoItem from './TodoItem.js';

export default function TodoItems(props) {
  function getTodos() {
    if (props.todos.length) {
      return (
        props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              className="mt-4"
              currentUpdatePanel={props.currentUpdatePanel}
              emitSetCurrentUpdatePanel=
                {props.emitSetCurrentUpdatePanel}
              emitTodoUpdate={props.emitTodoUpdate}
              emitTodoDelete={props.emitTodoDelete} />
          );
        })
      )
    } else {
      return (
        <li className="my-4">
          Your todo list is empty.
        </li>
      );
    }
  }

  return (
    <div className="has-text-centered">
      <ul className="my-4 py-2 box">
        {getTodos()}
      </ul>
      <div className="my-4">
        You can modify or remove an item by clicking on it.
      </div>
    </div>
  );
}
