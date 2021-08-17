import React from 'react';
import axios from 'axios';

class TodoListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    }

    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  deleteTodo(id) {
    axios.delete(`/deleteTodo/${id}`)
      .then(() => this.props.fetchTodos())
      .catch(err => console.error(err))
  }

  updateTodo(id) {
    this.setState({ completed: !this.state.completed }, () => {
      axios.patch(`/updateTodo/${this.props.todo._id}`, {
        completed: this.state.completed
      })
      .then(() => this.props.fetchTodos())
      .catch(err => console.error(err))
    })
  }

  toggleCompleted() {
    this.setState({ completed: !this.state.completed })
  }



  render() {
    return (
      <div style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>
       • {this.props.todo.item}
       <button onClick={() => this.updateTodo(this.props.todo._id)}>Mark as complete</button>
       <button onClick={() => this.deleteTodo(this.props.todo._id)}>Delete</button>
      </div>
    )
  }
}

export default TodoListEntry;