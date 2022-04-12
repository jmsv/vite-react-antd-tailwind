import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/tailwind-pre.css";
import "./styles/index.css";

import App from "./App";

import "./styles/tailwind-post.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("root element not found");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
