// src/scenes/Todos/index.js

// importing modules
import React from 'react';

// material ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// custom modules
import Navbar from 'components/Navbar';

// components
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

// stylesheets
import './styles.css';

// creating the component
class TodosScene extends React.Component {
  /**
   * Renders the Todos Scene
   *
   * @returns React.Component
   * @memberof TodosScene
   */
  render() {
    return (
      <div className="todos-scene">
        <Navbar />
        <Paper elevation={1} className="paper">
          <Typography variant="h5" component="h3">
            This is the Todos!
          </Typography>
          <TodoList />
          <AddTodoForm />
        </Paper>
      </div>
    );
  }
}

// exporting the component
export default TodosScene;
