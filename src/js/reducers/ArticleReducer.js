// src/js/reducers/ArticleReducer.js

// custom modules
import { ADD_ARTICLE, DELETE_ARTICLE } from '../actions/articles';

// declaring the initial state
const initialState = [];

// declaring the reducer key and state
const _key = 'articles';
const _articleState = state => state[_key];

// exporting the reducer selectors
export const articleSelectors = {
  key: _key,
  articles: _articleState,
};

// exporting the reducer
export default (state = initialState, action) => {
  // checking the action type
  switch (action.type) {
    case ADD_ARTICLE:
      // adds an article to the state tree
      return [...state, action.payload];

    case DELETE_ARTICLE:
      // deletes an article from the state tree, by it's ID
      // getting the article index on the array
      const articleIndex = state.findIndex(element => {
        return element.id === action.payload;
      });

      // checking if the article was found
      if (articleIndex < 0) {
        return state;
      }

      // removing the article from the array
      return [...state.slice(0, articleIndex), ...state.slice(articleIndex + 1)];

    default:
      // default. we should return the state if the action doesn't match
      return state;
  }
};
