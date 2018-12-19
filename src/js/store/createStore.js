// src/js/store/createStore.js

// importing modules
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// creating the browser history
export const history = createHistory();

// creating the store middlewares
export const middlewares = [thunk, routerMiddleware(history)];

// creating the rootReducer
export default rootReducer => {
  // creating the store with middlewares
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return {
    store,
  };
};
