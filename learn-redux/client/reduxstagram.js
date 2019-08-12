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

import Raven from "raven-js";
import { sentry_url, logException } from "./data/config";

Raven.config(sentry_url, {
  tags: {
    git_commit: "commit123",
    userLevel: "editior"
  }
}).install();

//Using Log Exception
/*logException(new Error("failure!"), {
  email: "rburke@butler.edu"
});
*/

//test sentry
//console.log(window.doesNotExist.user);

//Raven.captureMessage("Something bad happened!");
//Raven.showReportDialog();

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
