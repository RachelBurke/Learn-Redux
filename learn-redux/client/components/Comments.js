var React = require("react");

var createReactClass = require("create-react-class");

const Comments = createReactClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postId,
              i
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault(); //no refresh
    //console.log("Submitting the form");

    const postId = this.props.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    //console.log(postId, author, comment);

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
