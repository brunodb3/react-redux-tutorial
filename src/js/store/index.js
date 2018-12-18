// src/js/store/index.js

// importing modules
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// custom modules
import configureStore from './createStore';
import ArticleReducer, { articleSelectors } from '../reducers/ArticleReducer';

// combining the reducers into one
export const reducers = combineReducers({
  [articleSelectors.key]: ArticleReducer,
  router: routerReducer,
});

// exporting the store configuration
export default () => {
  // creating the redux store, with Redux DevTools extension enabled
  // (more at https://github.com/zalmoxisus/redux-devtools-extension)
  let { store } = configureStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
