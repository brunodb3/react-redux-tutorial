// src/components/Navbar/index.js

// importing modules
import React from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

// material UI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// custom modules
import Routes from 'services/helpers/routes';

// stylesheets
import './styles.css';

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => ({
  // mapping available actions (dispacthes)
  navigate: route => dispatch(replace(route)),
});

// creating the connected component
class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  /**
   * Navigates to another route
   *
   * @param {*} event
   * @memberof Navbar
   */
  navigate(event, route) {
    event.preventDefault();

    // navigating to the new route
    this.props.navigate(route);
  }

  render() {
    return (
      <div className="navbar flex-grow">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className="flex-grow">
              React + Redux Tutorial
            </Typography>
            <Button
              color="inherit"
              onClick={event => {
                this.navigate(event, Routes.HOME.path);
              }}
            >
              {Routes.HOME.title}
            </Button>
            <Button
              color="inherit"
              onClick={event => {
                this.navigate(event, Routes.TODOS.path);
              }}
            >
              {Routes.TODOS.title}
            </Button>
            <Button
              color="inherit"
              onClick={event => {
                this.navigate(event, Routes.USERS.path);
              }}
            >
              {Routes.USERS.title}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// connecting the React component to Redux
export default connect(
  null,
  mapDispatchToProps
)(Navbar);
