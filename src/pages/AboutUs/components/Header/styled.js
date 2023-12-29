// Utils
import styled from "styled-components";

// Styles
export const StyledHeader = styled("header")`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    padding: 1rem;
    padding-top: calc(${({ theme }) => theme.Heights.navbarHeight} + 2rem);
    height: fit-content;
`;

export const PageIntro = styled("section")`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    height: fit-content;
`;

export const IntroTitle = styled("h1")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    text-align: left;
    color: ${({ theme }) => theme.Colors.primary};
`;

export const CardWrapper = styled("div")`
    width: 100%;
`;
