var React = require("react");
var createReactClass = require("create-react-class");

import Photo from "./Photo";
import Comments from "./Comments";

const Single = createReactClass({
  render() {
    const { postId } = this.props.params;

    //index of the post
    const i = this.props.posts.findIndex(post => post.code === postId);
    //console.log(i);

    //get us the post
    const post = this.props.posts[i];
    //console.log(post);

    //get the post's comments
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;
