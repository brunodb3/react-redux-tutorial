// src/js/components/articles/List.js

// importing modules
import React from 'react';
import { connect } from 'react-redux';

// material ui
import List from '@material-ui/core/List';

// custom modules
import Article from './Single';

// component styles
const styles = {
  root: {
    width: '10%',
    maxWidth: 360,
  },
};

// mapping the state to the component's props
const mapStateToProps = state => ({
  // mapping available props (from state)
  articles: state.articles,
});

// creating the connected list
const ConnectedList = ({ articles }) => (
  <List style={styles.root}>
    {articles.map(element => (
      <Article id={element.id} key={element.id} title={element.title} />
    ))}
  </List>
);

// connecting the React component to Redux
const ArticleList = connect(mapStateToProps)(ConnectedList);

// exporting the component
export default ArticleList;
