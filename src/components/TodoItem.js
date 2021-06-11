import React, { useState } from 'react';

export default function NewTodoItem(props) {
  const [updatedDescription, setUpdatedDescription] = useState('');

  function emitTodoDelete() {
    todoUpdatePanelDisable();
    props.emitTodoDelete(props.todo.id);
  }

  function handleUpdate(e) {
    e.preventDefault();
    todoUpdatePanelDisable();
    props.emitTodoUpdate(props.todo.id, updatedDescription);
  }

  function todoUpdatePanelEnable() {
    props.emitSetCurrentUpdatePanel(props.todo.id);
    setUpdatedDescription(props.todo.description);
  }

  function todoUpdatePanelDisable() {
    props.emitSetCurrentUpdatePanel(undefined);
  }

  return (
    props.currentUpdatePanel === props.todo.id ? (
      <form className="my-4"
            onSubmit={handleUpdate}>
        <input type="button"
               onClick={emitTodoDelete}
               value="Delete" />
        <input type="text"
               className="ml-2"
               value={updatedDescription}
               onChange={(e) => setUpdatedDescription(e.target.value)}
               autoFocus />
        <input type="submit"
               className="ml-2"
               value="Confirm" />
        <input type="button"
               className="ml-2"
               value="Cancel"
               onClick={todoUpdatePanelDisable} />
      </form>
    ) : (
      <li className="my-4 cursor-pointer"
          onClick={todoUpdatePanelEnable}>
        {props.todo.id + 1}. {props.todo.description}
      </li>
    )
  );
}
