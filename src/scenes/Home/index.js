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
          <Typography component="p">
            You can find the source code on{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/brunodb3/react-redux-tutorial"
            >
              GitHub/brunodb3
            </a>
          </Typography>
        </Paper>
      </div>
    );
  }
}

// exporting the component
export default HomeScene;
