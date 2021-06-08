import React from 'react';

export default class TodoCreateForm extends React.Component {
  constructor(props) {
    // props
    super(props);
    this.state = {
      description: ''
    }

    // events
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.emitTodoCreate(this.state.description);
    this.setState({ description: '' });
  }

  render() {
    return (
      <form className="mt-4 mx-auto is-flex is-justify-content-center"
            onSubmit={this.handleSubmit}>
        <input type="text"
               className="input is-inline is-medium btn-group-left-side"
               value={this.state.description}
               onChange={this.handleChange}
               placeholder="Enter new todo item..." />
        <input type="submit"
               className="button is-success is-medium btn-group-right-side"
               value="Create" />
      </form>
    );
  }
}
