// src/js/reducers/index.js

// custom modules
import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/action-types';

// the initial state for the store
const initialState = {
  articles: []
};

// creating the rootReducer
// TODO: create multiple reducers
const rootReducer = (state = initialState, action) => {
  // checking the action type
  switch (action.type) {
    case ADD_ARTICLE:
      // adds an article to the state tree
      return { ...state, articles: [...state.articles, action.payload] }

    case DELETE_ARTICLE:
      // deletes an article from the state tree, by it's ID
      // getting the article index on the array
      const articleIndex = state.articles.findIndex((element) => {
        return element.id === action.payload
      })

      // checking if the article was found
      if(articleIndex < 0) {
        return state
      }

      // removing the article from the array
      return {
        ...state,
        articles: [
          ...state.articles.slice(0, articleIndex), ...state.articles.slice(articleIndex + 1)
        ]
      }

    default:
      // default. we should return the state if the action doesn't match
      return state
  }
};

// exporting the reducer
export default rootReducer;