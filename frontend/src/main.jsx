import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create the root for the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
