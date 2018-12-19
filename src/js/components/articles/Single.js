// src/js/components/articles/Article.js

// importing modules
import React from 'react';
import { connect } from 'react-redux';

// material ui
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

// custom modules
import Articles from '../../actions/articles';

// mapping the dispatch to the component's props
const mapDispatchToProps = dispatch => ({
  // mapping available actions (dispacthes)
  delete: articleId => dispatch(Articles.delete(articleId)),
});

// creating the connected article
class ConnectedArticle extends React.PureComponent {
  constructor(props) {
    super(props);

    // binding methods
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

    // dispatching the delete action
    this.props.delete(this.props.id);
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
      <ListItem role={undefined} dense>
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Comments" onClick={this.handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
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
