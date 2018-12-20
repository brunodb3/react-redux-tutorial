// src/services/users/reducer.js

// custom modules
import { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR } from './actions';

// declaring the initial state
const initialState = [];

// declaring the reducer key and state
const _key = 'users';
const _userState = state => state[_key];

// exporting the reducer selectors
export const userSelectors = {
  key: _key,
  users: _userState,
};

// exporting the reducer
export default (state = initialState, action) => {
  // checking the action type
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      // creating a copy of the state
      let users = state.slice();

      // looping the payload to check if should add user or update it's reference
      action.payload.forEach(user => {
        // deletes an article from the state tree, by it's ID
        // getting the article index on the array
        const userIndex = state.findIndex(element => {
          return element.id === user.id;
        });

        // checking if the user was found in the state
        if (userIndex >= 0) {
          // updating the state by creating a new state
          // > state until user + user + state from user to the end
          users = [...state.slice(0, userIndex), user, ...state.slice(userIndex + 1)];
        } else {
          // adding the user to the state (creating a new array)
          users = [...users, user];
        }
      });

      return users;

    case GET_ALL_USERS_ERROR:
      // there was an error getting all users
      alert('Error loading users');
      return state;

    default:
      // default. we should return the state if the action doesn't match
      return state;
  }
};
