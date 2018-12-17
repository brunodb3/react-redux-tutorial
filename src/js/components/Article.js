// src/js/components/Article.js

// importing modules
import { connect } from 'react-redux'
import React, { Component } from 'react'

// custom modules
import { deleteArticle } from '../actions/index';

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => {
  return {
    // mapping the available actions (dispatches)
    deleteArticle: articleId => dispatch(deleteArticle(articleId))
  }
}

// creating the connected article
class ConnectedArticle extends Component {
  constructor() {
    super()

    this.handleDelete = this.handleDelete.bind(this)
  }

  /**
   * Handles article deletion
   *
   * @param {*} event
   * @memberof ConnectedArticle
   */
  handleDelete(event) {
    event.preventDefault()

    // dispatching the deleteArticle action
    this.props.deleteArticle(this.props.id)
  }

  /**
   * Renders the component
   *
   * @returns
   * @memberof ConnectedArticle
   */
  render() {
    // declaring props
    const { title } = this.props

    return (
      <li>
        {title}
        <button onClick={this.handleDelete}>Deletar</button>
      </li>
    )
  }

}

// connecting the React component to Redux
const Article = connect(null, mapDispatchToProps)(ConnectedArticle)

// exporting the component
export default Article