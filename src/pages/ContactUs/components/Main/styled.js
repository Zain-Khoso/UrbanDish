// Utils
import styled from "styled-components";

// Styles
export const StyledMain = styled("main")`
    position: relative;

    width: 100%;
    height: 100dvh;
`;

export const Container = styled("section")`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: min(80%, 320px);
    aspect-ratio: 9/16;
    translate: -50% -50%;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            padding-top: ${({ theme }) => theme.Heights.navbarHeight};
        }
    }
`;

export const Title = styled("h1")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    color: ${({ theme }) => theme.Colors.primary};
`;
