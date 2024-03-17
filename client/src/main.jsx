"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error.jsx";
import App from "./App.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { UserProvider } from "./contexts/loggedUser.context.jsx";

const domain =
  import.meta.env.VITE_DEVELOPMENT_MODE === "dev"
    ? import.meta.env.VITE_AUTH0_DOMAIN
    : import.meta.env.VITE_AUTH0_DOMAIN_LOCAL;
const clientId =
  import.meta.env.VITE_DEVELOPMENT_MODE === "dev"
    ? import.meta.env.VITE_AUTH0_CLIENT_ID
    : import.meta.env.VITE_AUTH0_CLIENT_ID_LOCAL;

const baseClientUrl =
  import.meta.env.VITE_DEVELOPMENT_MODE === "dev"
    ? window.location.origin
    : `${import.meta.env.VITE_CLIENT_URL}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: baseClientUrl,
    }}
  >
    <GlobalStyles />
    <ErrorBoundary fallback={<Error text={"Error in one of the components"} />}>
      <Provider store={store}>
        <UserProvider>
          <App />
        </UserProvider>
      </Provider>
    </ErrorBoundary>
  </Auth0Provider>
);
