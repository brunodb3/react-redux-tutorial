// src/scenes/Users/components/UserList/components/SingleUser

// importing modules
import React from 'react';

// material ui
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// creating the connected user
const ConnectedUser = ({ user }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <ImageIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={user.name}
      secondary={
        <React.Fragment>
          <Typography component="span" className="username" color="textPrimary">
            {user.username}
          </Typography>
          {user.email}
        </React.Fragment>
      }
    />
  </ListItem>
);

// connecting the React component to Redux
const User = ConnectedUser;

// exporting the component
export default User;
