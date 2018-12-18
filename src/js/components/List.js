// src/js/components/List.js

// importing modules
import React from 'react';
import { connect } from 'react-redux';

// custom modules
import Article from './Article';

// mapping the state to the component's props
const mapStateToProps = state => ({
  // mapping available props (from state)
  articles: state.articles,
});

// creating the connected list
const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(eachArticle => (
      <Article id={eachArticle.id} key={eachArticle.id} title={eachArticle.title} />
    ))}
  </ul>
);

// connecting the React component to Redux
const List = connect(mapStateToProps)(ConnectedList);

// exporting the component
export default List;
