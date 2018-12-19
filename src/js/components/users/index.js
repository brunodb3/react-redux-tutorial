// src/js/components/users/index.js

// importing modules
import React from 'react';

// material ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// custom modules
import UserList from './List';

// component's style
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

// creating the component
const Users = props => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Users
        </Typography>
        <UserList />
        <Typography component="p">Listing users with redux-thunk</Typography>
      </Paper>
    </div>
  );
};

// exporting the component
export default withStyles(styles)(Users);
