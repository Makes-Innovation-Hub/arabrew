"use client";
import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import Error from "./components/Error.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>{/* <App /> */}</Provider>
  </React.StrictMode>
);
