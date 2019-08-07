var React = require("react");
import PropTypes from "prop-types";
var createReactClass = require("create-react-class");
import { Link } from "react-router";

const Main = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxtagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
