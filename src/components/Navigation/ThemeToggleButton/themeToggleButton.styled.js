// Utils
import styled from "styled-components";

// Styles
export const ThemeToggleWrapper = styled("div")`
    position: relative;
    display: flex;
    align-items: center;

    width: 6rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 0.5rem;
    border-radius: 1rem;
`;

export const StyledThemeToggleButton = styled("button")`
    position: absolute;
    left: ${({ $darkMode }) => ($darkMode ? "0.5rem" : "3.7rem")};

    width: 1.8rem;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => theme.Colors.contrastOpacity};
    border-radius: 50%;
    transition: all 300ms ease-out;

    & svg {
        scale: 70%;
        stroke: ${({ theme }) => theme.Colors.theme};
    }
`;
