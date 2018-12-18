// src/components/navbar/index.js

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
import HomeRoutes from '../../routes/HomeRoutes';
import ArticleRoutes from '../../routes/ArticleRoutes';

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => ({
  // mapping available actions (dispacthes)
  navigate: route => dispatch(replace(route)),
});

// creating the connected component
class ConnectedHome extends React.PureComponent {
  constructor(props) {
    super(props);

    this.goToHome = this.goToHome.bind(this);
    this.goToArticles = this.goToArticles.bind(this);

    // declaring the styles for each component
    this.styles = {
      root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
    };
  }

  /**
   * Navigates to the Home route
   *
   * @param {*} event
   * @memberof ConnectedHome
   */
  goToHome(event) {
    event.preventDefault();

    // navigating to the home default route
    this.props.navigate(HomeRoutes.DEFAULT);
  }

  /**
   * Navigates to the Articles route
   *
   * @param {*} event
   * @memberof ConnectedHome
   */
  goToArticles(event) {
    event.preventDefault();

    // navigating to the home default route
    this.props.navigate(ArticleRoutes.DEFAULT);
  }

  render() {
    return (
      <div style={this.styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={this.styles.grow}>
              React + Redux Tutorial
            </Typography>
            <Button color="inherit" onClick={this.goToHome}>
              Home
            </Button>
            <Button color="inherit" onClick={this.goToArticles}>
              Articles
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// connecting the React component to Redux
const Home = connect(
  null,
  mapDispatchToProps
)(ConnectedHome);

// exporting the component
export default Home;
