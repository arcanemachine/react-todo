import React from 'react';
import TodoCreateForm from './TodoCreateForm.js';
import TodoItems from './TodoItems.js';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [{ id: 0, description: 'hello' }]
    };
    this.todoCreate = this.todoCreate.bind(this);
    this.todoUpdate = this.todoUpdate.bind(this);
    this.todoDelete = this.todoDelete.bind(this);
  }

  todoCreate(todoDescription) {
    console.log(todoDescription)
    this.setState({
      todos: [...this.state.todos, {
        id: this.state.todos.length,
        description: todoDescription
      }]
    })
  }

  todoDelete(id) {
    this.setState({ todos: this.state.todos.splice(id, 1) });
    this.todoRegenerateIds();
  }

  todoUpdate(id, updatedDescription) {
    this.setState(prevState => {
      prevState.todos[id].description = updatedDescription;
      return prevState;
    })
  }

  todoRegenerateIds() {
    let todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      todos[i].id = i;
    }
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <TodoCreateForm emitTodoCreate={this.todoCreate} />
        <TodoItems todos={this.state.todos}
                   emitTodoUpdate={this.todoUpdate}
                   emitTodoDelete={this.todoDelete} />
      </div>
    );
  }
}
