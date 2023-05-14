import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {store} from './store.jsx'
import { Provider } from "react-redux";
import ErrorBoundary from "./ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Error">
    <Provider store={store}>
    <App />
    </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
