import React from "react";
import { Link } from "react-router";

var createReactClass = require("create-react-class");

const Main = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
