// src/services/todos/actions.js

// exporting action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// declaring the actions from the available action types
export default class Todos {
  // adds a todo to the store tree
  static add = payload => ({ type: ADD_TODO, payload });

  // removes a todo from the store tree
  static delete = payload => ({ type: DELETE_TODO, payload });
}
