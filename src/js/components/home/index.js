// src/js/components/home/index.js

// importing modules
import React from 'react';

// material ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// component's style
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

// creating the component
const Home = props => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is the Home!
        </Typography>
        <Typography component="p">Welcome to the React + Redux tutorial app</Typography>
      </Paper>
    </div>
  );
};

// exporting the component with the styles variable
export default withStyles(styles)(Home);
