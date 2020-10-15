import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { StoreProvider } from "./utils/GlobalState";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <StoreProvider>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById("root")
);
