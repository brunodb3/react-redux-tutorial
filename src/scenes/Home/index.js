// src/scenes/Home/index.js

// importing modules
import React from 'react';

// material ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// custom modules
import Navbar from 'components/Navbar';

// stylesheets
import './styles.css';

// creating the component
class HomeScene extends React.Component {
  /**
   * Renders the Home Scene
   *
   * @returns React.Component
   * @memberof HomeScene
   */
  render() {
    return (
      <div className="home-scene">
        <Navbar />
        <Paper elevation={1} className="paper">
          <Typography variant="h5" component="h3">
            This is the Home!
          </Typography>
          <Typography component="p">Welcome to the React + Redux tutorial app</Typography>
        </Paper>
      </div>
    );
  }
}

// exporting the component
export default HomeScene;
