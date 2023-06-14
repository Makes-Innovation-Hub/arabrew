"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles.jsx";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GlobalStyles />
      <ErrorBoundary
        fallback={<Error text={"Error in one of the components"} />}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </Auth0Provider>
  </React.StrictMode>
);
