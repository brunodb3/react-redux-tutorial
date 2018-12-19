// src/js/components/articles/List.js

// importing modules
import React from 'react';
import { connect } from 'react-redux';

// material ui
import List from '@material-ui/core/List';

// custom modules
import User from './Single';
import Users from '../../actions/users';

// component styles
const styles = {
  root: {
    width: '100%',
    maxWidth: 360,
  },
};

// mapping the state to the component's props
const mapStateToProps = state => ({
  // mapping available props (from state)
  users: state.users,
});

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => ({
  // mapping available actions (dispacthes)
  get_all: () => dispatch(Users.get_all()),
});

class ConnectedList extends React.Component {
  constructor(props) {
    super(props);

    // binding methods
    this.handleGetAll = this.handleGetAll.bind(this);

    // getting all users from API
    this.handleGetAll();
  }

  /**
   * Handles article deletion
   *
   * @memberof ConnectedList
   */
  handleGetAll() {
    // dispatching the get_all action
    this.props.get_all();
  }

  /**
   * Renders the component
   *
   * @returns
   * @memberof ConnectedList
   */
  render() {
    // declaring props
    const { users } = this.props;

    return (
      <List style={styles.root}>
        {users.map(element => (
          <User key={element.id} user={element} />
        ))}
      </List>
    );
  }
}

// connecting the React component to Redux
const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

// exporting the component
export default UserList;
