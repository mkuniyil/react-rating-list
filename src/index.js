import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducers/appReducer";

/*********** Redux implementation ****************/
let middlewares = [];

middlewares.push(
  createLogger({
    timestamp: true
  })
);

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
