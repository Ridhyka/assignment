import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure App.jsx exists in src/
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(Router, null, React.createElement(App, null))
  )
);
