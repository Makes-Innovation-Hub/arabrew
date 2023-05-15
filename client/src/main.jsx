"use client"

import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {store} from './app/store.jsx'
import { Provider } from "react-redux";
import Error from "./components/Error.jsx";
import GlobalStyles from "./components/styles/GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles/>
    <ErrorBoundary fallback={<Error/>}>
    <Provider store={store}>
    <App />
    </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
