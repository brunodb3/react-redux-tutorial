// src/js/components/Article.js

// importing modules
import React from 'react';
import { connect } from 'react-redux';

// custom modules
import { deleteArticle } from '../actions/index';

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => ({
  // mapping available actions (dispacthes)
  deleteArticle: articleId => dispatch(deleteArticle(articleId)),
});

// creating the connected article
class ConnectedArticle extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   * Handles article deletion
   *
   * @param {*} event
   * @memberof ConnectedArticle
   */
  handleDelete(event) {
    event.preventDefault();

    // dispatching the deleteArticle action
    this.props.deleteArticle(this.props.id);
  }

  /**
   * Renders the component
   *
   * @returns
   * @memberof ConnectedArticle
   */
  render() {
    // declaring props
    const { title } = this.props;

    return (
      <li>
        {title}
        <button onClick={this.handleDelete}>Deletar</button>
      </li>
    );
  }
}

// connecting the React component to Redux
const Article = connect(
  null,
  mapDispatchToProps
)(ConnectedArticle);

// exporting the component
export default Article;
