import React from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: '',
      isLoaded: false
    }
    this.fetchTodos = this.fetchTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    axios.get('/getTodos')
      .then(results => {
        this.setState({
          todos: results.data,
          isLoaded: true
        })
      })
      .catch(err => console.error(err));
  }

  addTodo() {
    axios.post('/postTodo', {
      item: this.state.newTodo
    })
      .then(() => this.setState({ newTodo: '' }))
      .then(() => this.fetchTodos())
      .catch(err => console.error(err))
  }

  handleChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  render() {
    return this.state.isLoaded ? (
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Item"
          value={this.state.newTodo}>
        </input>
        <button onClick={this.addTodo}>Add item</button>
        <h3>To do:</h3>
        <TodoList todos={this.state.todos} fetchTodos={this.fetchTodos} />
      </div>
    ) : <div>Loading...</div>
  }
}

export default App;