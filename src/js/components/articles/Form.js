// src/js/components/articles/Form.js

// importing modules
import React from 'react';
import uuidv1 from 'uuid';
import { connect } from 'react-redux';

// custom modules
import Articles from '../../actions/articles';

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => ({
  // mapping available actions (dispacthes)
  add: article => dispatch(Articles.add(article)),
});

// creating the connected form
class ConnectedForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handles a change on the state
   *
   * @param {*} event
   * @memberof ConnectedForm
   */
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * Handles the submit method
   *
   * @param {*} event
   * @memberof ConnectedForm
   */
  handleSubmit(event) {
    event.preventDefault();

    // getting the article's attributes/props
    const id = uuidv1();
    const { title } = this.state;

    // dispatching the add action
    this.props.add({ title, id });

    // returning the state to initialState
    this.setState({ title: '' });
  }

  /**
   * Renders the component
   *
   * @returns
   * @memberof ConnectedForm
   */
  render() {
    // declaring props
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={this.handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    );
  }
}

// connecting the React component to Redux
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

// exporting the component
export default Form;
