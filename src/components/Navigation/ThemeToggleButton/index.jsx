// Utils
import { useContext } from "react";
import { ToggleThemeContext } from "../../../contexts/";
import { Sun, Moon } from "react-feather";

// Components
import { ThemeToggleWrapper, StyledThemeToggleButton } from "./styled";

export default function ThemeToggleButton() {
    const { isLight, toggleTheme } = useContext(ToggleThemeContext);

    return (
        <ThemeToggleWrapper>
            <StyledThemeToggleButton
                $lightMode={isLight}
                onClick={() => toggleTheme(!isLight)}>
                {isLight ? <Moon /> : <Sun />}
            </StyledThemeToggleButton>
        </ThemeToggleWrapper>
    );
}
