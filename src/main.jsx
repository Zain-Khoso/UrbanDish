// Utils
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import router from "./Router";
import { ThemeProvider } from "styled-components";
import StyledGlobal, { theme } from "./Global.styled";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_AUTH_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENTID}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}>
            <ThemeProvider theme={theme}>
                <StyledGlobal />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Auth0Provider>
    </React.StrictMode>
);
