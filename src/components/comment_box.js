import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state= {
      commentRequired: false,
      comment: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      commentRequired: false
    })
    if (this.state.comment.trim()) {
      this.props.saveComment(this.state.comment);
    } else {
      this.setState({
        commentRequired: true
      })
    }
    this.setState({
      comment: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
        />
        {
          this.state.commentRequired && <div className="comment-required">comment cannot be empty</div>
        }
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveComment: (comment) => {
      return dispatch(actions.saveComment(comment))
    }
  }
}

export default connect(null, mapDispatchToProps)(CommentBox);
