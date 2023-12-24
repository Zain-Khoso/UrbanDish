// Utils
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
    darkTheme,
    lightTheme,
    ToggleThemeContext,
} from "./contexts/themes.styled";
import DefaultStyles from "./contexts/default.styled";
import { Provider } from "react-redux";
import store from "./config/store";
import router from "./Router";

export default function App() {
    const [isDark, setIsDark] = useState(true);

    return (
        <ToggleThemeContext.Provider value={{ isDark, setIsDark }}>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <DefaultStyles />
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </ThemeProvider>
        </ToggleThemeContext.Provider>
    );
}
