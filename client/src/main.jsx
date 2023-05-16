"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { userDataApi } from "./features/userDataApi.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={userDataApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
