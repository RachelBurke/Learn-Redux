var React = require("react");
import PropTypes from "prop-types";
import { render } from "react-dom";

// Import css
import css from "./styles/style.styl";

// Import Components
import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Router path="/view/:postId" component={Single} />
    </Route>
  </Router>
);

render(router, document.getElementById("root"));
