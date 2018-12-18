// src/js/actions/articles.js

// exporting action types
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

// declaring the actions from the available action types
export default class Articles {
  // adds an article to the store tree
  static add = payload => ({ type: ADD_ARTICLE, payload });

  // removes an article from the store tree
  static delete = payload => ({ type: DELETE_ARTICLE, payload });
}
