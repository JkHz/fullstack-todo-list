import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    // fetch Todo items from database and save them to state
  }

  // TODO: Create components as needed to create Todo List

  render() {
    return (
      <div>
        <div>• Build a Todo List</div>
        <input type="text" placeholder="Item"></input>
        <button>Add item</button>
      </div>
    )
  }
}

export default App;
