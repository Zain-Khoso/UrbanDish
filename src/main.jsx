// Utils
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// Components
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile/Profile";
import NotFound from "./components/Global/Errors/NotFound/NotFound";

// Router Setup.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_AUTH_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENTID}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}>
            <RouterProvider router={router} />
        </Auth0Provider>
    </React.StrictMode>
);
