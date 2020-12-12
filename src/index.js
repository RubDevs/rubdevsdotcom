import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./components/nav"
import Masthead from "./components/masthead"
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById("mainNav")
);

ReactDOM.render(
  <React.StrictMode>
    <Masthead />
  </React.StrictMode>,
  document.getElementById("masthead")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
