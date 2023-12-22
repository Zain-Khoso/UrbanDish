// Utils
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./contexts/store";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./contexts/themes.styled";
import DefaultStyles from "./contexts/default.styled";
import router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_AUTH_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENTID}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}>
            <ThemeProvider theme={darkTheme}>
                <DefaultStyles />
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </ThemeProvider>
        </Auth0Provider>
    </React.StrictMode>
);
