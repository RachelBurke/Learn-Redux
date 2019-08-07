var React = require("react");
import { render } from "react-dom";

// Import css
import css from "./styles/style.styl";

// Import Components
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// Import react router dependencies
import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";

import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Router path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
