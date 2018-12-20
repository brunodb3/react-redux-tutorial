// src/scenes/Users/index.js

// importing modules
import React from 'react';

// material ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// custom modules
import Navbar from 'components/Navbar';

// components
import UserList from './components/UserList';

// stylesheets
import './styles.css';

// creating the component
class UsersScene extends React.Component {
  /**
   * Renders the Users Scene
   *
   * @returns React.Component
   * @memberof UsersScene
   */
  render() {
    return (
      <div className="users-scene">
        <Navbar />
        <Paper elevation={1} className="paper">
          <Typography variant="h5" component="h3">
            This is the Users!
          </Typography>
          <UserList />
        </Paper>
      </div>
    );
  }
}

// exporting the component
export default UsersScene;
