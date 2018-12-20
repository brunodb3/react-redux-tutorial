// src/services/todos/reducer.js

// custom modules
import { ADD_TODO, DELETE_TODO } from './actions';

// declaring the initial state
const initialState = [];

// declaring the reducer key and state
const _key = 'todos';
const _todosState = state => state[_key];

// exporting the reducer selectors
export const todosSelectors = {
  key: _key,
  todos: _todosState,
};

// exporting the reducer
export default (state = initialState, action) => {
  // checking the action type
  switch (action.type) {
    case ADD_TODO:
      // adds a todo to the state tree
      return [...state, action.payload];

    case DELETE_TODO:
      // deletes a todo from the state tree, by it's ID
      // getting the todo index on the array
      const todoIndex = state.findIndex(element => {
        return element.id === action.payload;
      });

      // checking if the todo was found
      if (todoIndex < 0) {
        return state;
      }

      // removing the todo from the array
      return [...state.slice(0, todoIndex), ...state.slice(todoIndex + 1)];

    default:
      // default. we should return the state if the action doesn't match
      return state;
  }
};
