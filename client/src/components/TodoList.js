import React from 'react';
import TodoListEntry from './TodoListEntry';

const TodoList = (props) => (
  <div>
    {props.todos.map((todo, i) => (
      <TodoListEntry todo={todo} key={i} fetchTodos={props.fetchTodos} />
    ))}
  </div>
);

export default TodoList;