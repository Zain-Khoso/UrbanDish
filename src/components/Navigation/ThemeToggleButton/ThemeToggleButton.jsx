// Utils
import { useContext } from "react";
import { ToggleThemeContext } from "../../../contexts/themes.styled";
import { Sun, Moon } from "react-feather";

// Components
import {
    ThemeToggleWrapper,
    StyledThemeToggleButton,
} from "./themeToggleButton.styled";

export default function ThemeToggleButton() {
    const { isDark, setIsDark } = useContext(ToggleThemeContext);

    return (
        <ThemeToggleWrapper>
            <StyledThemeToggleButton
                $darkMode={isDark}
                onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun /> : <Moon />}
            </StyledThemeToggleButton>
        </ThemeToggleWrapper>
    );
}
