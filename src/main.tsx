import React from "react";
import ReactDOM from "react-dom";

import "./styles/tailwind-pre.css";
import "./styles/index.css";

import App from "./App";

import "./styles/tailwind-post.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
