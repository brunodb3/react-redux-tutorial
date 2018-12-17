// src/js/components/Form.js

// importing modules
import uuidv1 from 'uuid'
import { connect } from 'react-redux'
import React, { Component } from 'react'

// custom modules
import { addArticle } from '../actions/index'

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => {
  return {
    // mapping available actions (dispacthes)
    addArticle: article => dispatch(addArticle(article))
  }
}

// creating the connected form
class ConnectedForm extends Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * Handles a change on the state
   *
   * @param {*} event
   * @memberof ConnectedForm
   */
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  /**
   * Handles the submit method
   *
   * @param {*} event
   * @memberof ConnectedForm
   */
  handleSubmit(event) {
    event.preventDefault()

    // getting the article's attributes/props
    const id = uuidv1()
    const { title } = this.state

    // dispatching the addArticle action
    this.props.addArticle({ title, id })

    // returning the state to initialState
    this.setState({ title: '' })
  }

  /**
   * Renders the component
   *
   * @returns
   * @memberof ConnectedForm
   */
  render() {
    // declaring props
    const { title } = this.state

    return (
      <form onSubmit={ this.handleSubmit }>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">
          Save
        </button>
      </form>
    )
  }
}

// connecting the React component to Redux
const Form = connect(null, mapDispatchToProps)(ConnectedForm)

// exporting the component
export default Form