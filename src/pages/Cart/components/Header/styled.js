// Utils
import styled from "styled-components";

// Styles
export const StyledHeader = styled("header")`
    position: relative;
    width: 100%;

    padding-block: calc(${({ theme }) => theme.Heights.navbarHeight} + 2rem)
        2rem;
    padding-inline: 1rem;
`;

export const Head = styled("section")`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;
`;

export const ImageWrapper = styled("div")`
    min-width: 4rem;
    max-width: 4rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
`;

export const Username = styled("h1")`
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    color: ${({ theme }) => theme.Colors.primary};
`;
