import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedDescription: '',
    }

    // events
    this.emitTodoDelete = this.emitTodoDelete.bind(this);
    this.handleChangeUpdatedDescription = 
      this.handleChangeUpdatedDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.todoUpdatePanelEnable = this.todoUpdatePanelEnable.bind(this);
    this.todoUpdatePanelDisable = this.todoUpdatePanelDisable.bind(this);

    // refs
    this.inputUpdatedDescription = React.createRef();
  }

  emitTodoDelete(todo) {
    this.todoUpdatePanelDisable();
    this.props.emitTodoDelete(todo);
  }

  handleChangeUpdatedDescription(e) {
    this.setState({ updatedDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.todoUpdatePanelDisable();
    this.props.emitTodoUpdate(
      this.props.todo,
      this.state.updatedDescription
    );
  }

  todoUpdatePanelEnable() {
    console.log('TodoItem: emitted emitSetCurrentUpdatePanel()');
    this.props.emitSetCurrentUpdatePanel(this.props.todo.id);
    this.setState({ updatedDescription: this.props.todo.description });
  }

  todoUpdatePanelDisable() {
    this.props.emitSetCurrentUpdatePanel(undefined);
  }

  render() {
    return (
      this.props.currentUpdatePanel === this.props.todo.id ? (
        <form className="my-4"
              onSubmit={this.handleSubmit}>
          <input type="button"
                 onClick={this.emitTodoDelete}
                 value="Delete" />
          <input type="text"
                 className="ml-2"
                 ref={this.inputUpdatedDescription}
                 value={this.state.updatedDescription}
                 onChange={this.handleChangeUpdatedDescription}
                 autoFocus />
          <input type="submit"
                 className="ml-2"
                 value="Confirm" />
          <input type="button"
                 className="ml-2"
                 value="Cancel"
                 onClick={this.todoUpdatePanelDisable} />
        </form>
      ) : (
        <li className="my-4 cursor-pointer"
            onClick={this.todoUpdatePanelEnable}>
          {this.props.todo.description}
        </li>
      )
    );
  }
}

