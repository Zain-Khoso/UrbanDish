// Utils
import { useState, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useNotifReducer from "./hooks/useNotifReducer";

// App Routes
import router from "./Router";

// Contexts
import { ToggleThemeContext, NotificationContext } from "./contexts";

// Dark/Light themes.
import { darkTheme, lightTheme } from "./contexts/themes.styled";

// Assets
import DefaultStyles from "./contexts/default.styled";

export default function App() {
    // Dark / Light mode states.
    const [isLight, setIsLight] = useState(
        JSON.parse(localStorage.getItem("isLight"))
    );

    // Notification States
    const defaultNotificationState = {
        type: "success",
        message: "Success !",
        visiblity: false,
    };
    const [notifState, notifDispatch] = useReducer(
        useNotifReducer,
        defaultNotificationState
    );

    const toggleTheme = function () {
        localStorage.setItem("isLight", !isLight);
        setIsLight(!isLight);
    };

    return (
        //  Providing utils to switch Light/Dark theme
        <ToggleThemeContext.Provider value={{ isLight, toggleTheme }}>
            {/* Providing the active theme template, respectively */}
            <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                {/* Providing utils to generate dynamic notifications */}
                <NotificationContext.Provider
                    value={{ notifState, notifDispatch }}>
                    {/* Default Styles */}
                    <DefaultStyles />
                    {/* Router */}
                    <RouterProvider router={router} />
                </NotificationContext.Provider>
            </ThemeProvider>
        </ToggleThemeContext.Provider>
    );
}
