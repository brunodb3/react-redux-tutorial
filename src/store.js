// src/store.js

// importing modules
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';

// browser history
export const history = createHistory();

// store middlewares
export const middlewares = [thunk, routerMiddleware(history)];

// Redux Devtools extension
// (more at https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup)
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// store enchancers
export const enhancers = composeEnhancers(applyMiddleware(...middlewares));

// store method
export default rootReducer => {
  // creating the redux store
  return createStore(rootReducer, enhancers);
};
