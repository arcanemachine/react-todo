import React, { useState } from 'react';

export default function TodoCreateForm(props) {
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.emitTodoCreate(description);
    setDescription('');
  }

  return (
    <form className="mt-4 mx-auto is-flex is-justify-content-center"
          onSubmit={handleSubmit}>
      <input type="text"
             className="input is-inline is-medium btn-group-left-side"
             value={description}
             onChange={(e) => setDescription(e.target.value )}
             placeholder="Enter new todo item..." />
      <input type="submit"
             className="button is-success is-medium btn-group-right-side"
             value="Create" />
    </form>
  );
}
