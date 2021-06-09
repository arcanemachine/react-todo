import React from 'react';
import TodoCreateForm from './TodoCreateForm.js';
import TodoItems from './TodoItems.js';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [{ id: 0, description: 'hello' }],
      currentUpdatePanel: undefined
    };
    this.setCurrentUpdatePanel = this.setCurrentUpdatePanel.bind(this);
    this.todoCreate = this.todoCreate.bind(this);
    this.todoUpdate = this.todoUpdate.bind(this);
    this.todoDelete = this.todoDelete.bind(this);
  }

  setCurrentUpdatePanel(id) {
    console.log(`TodoList: received emitSetCurrentUpdatePanel() ${id}`);
    this.setState({ currentUpdatePanel: id });
  }

  todoCreate(todoDescription) {
    this.setState({
      todos: [...this.state.todos, {
        id: this.state.todos.length,
        description: todoDescription
      }]
    })
  }

  todoDelete(todo) {
    this.setState({ todos: this.state.todos.splice(todo.id, 1) });
    this.todoRegenerateIds();
  }

  todoUpdate(todo, updatedDescription) {
    this.setState(prevState => {
      prevState.todos[todo.id].description = updatedDescription;
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
                   currentUpdatePanel={this.state.currentUpdatePanel}
                   emitSetCurrentUpdatePanel={this.setCurrentUpdatePanel}
                   emitTodoUpdate={this.todoUpdate}
                   emitTodoDelete={this.todoDelete} />
      </div>
    );
  }
}
