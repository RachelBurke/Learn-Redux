import React from "react";
import Photo from "./Photo";

var createReactClass = require("create-react-class");

const PhotoGrid = createReactClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
});

export default PhotoGrid;
