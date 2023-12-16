// Utils
import { useState } from "react";
import { Sun, Moon } from "react-feather";

// Components
import {
    ThemeToggleWrapper,
    StyledThemeToggleButton,
} from "./themeToggleButton.styled";

export default function ThemeToggleButton() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeToggleWrapper>
            <StyledThemeToggleButton
                $darkMode={darkMode}
                onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun /> : <Moon />}
            </StyledThemeToggleButton>
        </ThemeToggleWrapper>
    );
}
