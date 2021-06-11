import React, { useEffect, useState } from 'react';
import TodoCreateForm from './TodoCreateForm.js';
import TodoItems from './TodoItems.js';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentUpdatePanel, setCurrentUpdatePanel] = useState(undefined);

  function todoCreate(description) {
    if (description) {
      setTodos(state => [...state, {
          id: state.length,
          description: description
      }]);
    }
  }

  function todoUpdate(id, description) {
    let state = todos;
    if (!description) {
      todoDelete(id); // delete the todo if description is empty
    } else {
      state[id].description = description;
      setTodos(state)
    }
  }

  function todoDelete(id) {
    let state = [...todos].filter(todo => todo.id !== id); // delete the todo
    updateTodoIds(state);
    setTodos(state);
  }

  function updateTodoIds(state) {
    return state.forEach((todo, i) => state[i].id = i);
  }

  useEffect(() => {
    const title = "React Todos";
    document.title = 
      `${title} - ${todos.length} item${todos.length === 1 ? '' : 's'}`;
  }, [todos]);

  return (
    <React.Fragment>
      <TodoCreateForm
        emitTodoCreate={(description) => todoCreate(description)} />
      <TodoItems
        todos={todos}
        currentUpdatePanel={currentUpdatePanel}
        emitSetCurrentUpdatePanel={(id) => setCurrentUpdatePanel(id)}
        emitTodoUpdate={(id, description) => todoUpdate(id, description)}
        emitTodoDelete={(id) => todoDelete(id)} />
    </React.Fragment>
  );
}
