import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./component/App";
import reducer from "./reducers";

ReactDOM.render(<App />, document.querySelector("#root"));
