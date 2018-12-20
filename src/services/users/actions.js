// src/sercices/users/reducer.js

// exporting action types
export const GET_ALL_USERS_ERROR = 'GET_ALL_USERS_ERROR';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';

// declaring the actions from the available action types
export default class Users {
  // retrieves the users from a placeholder API
  static get_all = payload => {
    return dispatch =>
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(
          data => dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data }),
          err => dispatch({ type: GET_ALL_USERS_ERROR, payload: err })
        );
  };
}
