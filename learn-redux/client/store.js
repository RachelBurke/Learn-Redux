import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// Import the root reducer
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

// Create an object for the default data
const defaultState = {
  posts: posts,
  comments: comments
};
// const defaultState = {posts, comments}; ES6

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
