import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import styles from "./scss/app.scss";

const container = document.querySelector("#app");
const root = createRoot(container);
root.render(
  //wrapping browser router for app to start using react router
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
