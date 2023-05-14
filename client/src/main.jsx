"use client"

import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {store} from './app/store.jsx'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Provider store={store}>
    <App />
    </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
