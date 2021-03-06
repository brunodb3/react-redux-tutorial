// src/scenes/Todos/components/AddTodoForm/index.js

// importing modules
import React from 'react';
import uuidv1 from 'uuid';
import { connect } from 'react-redux';

// material ui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// custom modules
import Todos from 'services/todos/actions';

// stylesheets
import './styles.css';

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => ({
  // mapping available actions (dispacthes)
  add: todo => dispatch(Todos.add(todo)),
});

// creating the connected form
class ConnectedAddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    // binding methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // initial state
    this.state = {
      title: '',
    };
  }

  /**
   * Handles a change on the state
   *
   * @param {*} event
   * @memberof ConnectedAddTodoForm
   */
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * Handles the submit method
   *
   * @param {*} event
   * @memberof ConnectedAddTodoForm
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
   * @memberof ConnectedAddTodoForm
   */
  render() {
    // declaring props
    const { title } = this.state;

    return (
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit} className="container">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <TextField
              id="title"
              label="Title"
              value={title}
              margin="normal"
              variant="outlined"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" className="button">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

// connecting the React component to Redux
const AddTodoForm = connect(
  null,
  mapDispatchToProps
)(ConnectedAddTodoForm);

// exporting the component
export default AddTodoForm;
