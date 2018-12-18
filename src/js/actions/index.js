// src/js/actions/index.js

// custom modules
import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/action-types';

// declaring the actions from the available action types
// adds an article to the store tree
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

// removes an article from the store tree
export const deleteArticle = article => ({ type: DELETE_ARTICLE, payload: article });
