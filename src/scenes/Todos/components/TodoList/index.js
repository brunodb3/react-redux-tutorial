// src/scenes/Todos/components/TodoList/index.js

// importing modules
import React from 'react';
import { connect } from 'react-redux';

// material ui
import List from '@material-ui/core/List';

// custom modules
import SingleTodo from './components/SingleTodo';

// stylesheets
import './styles.css';

// mapping the state to the component's props
const mapStateToProps = state => ({
  // mapping available props (from state)
  todos: state.todos,
});

// creating the connected list
const ConnectedList = ({ todos }) => (
  <List className="todo-list">
    {todos.map(element => (
      <SingleTodo key={element.id} id={element.id} title={element.title} />
    ))}
  </List>
);

// connecting the React component to Redux
const TodoList = connect(mapStateToProps)(ConnectedList);

// exporting the component
export default TodoList;
