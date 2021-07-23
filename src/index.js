import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles.js";
import "antd/dist/antd.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
