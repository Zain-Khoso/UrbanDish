// Utils
import styled from "styled-components";

// Styles
export const StyledHeader = styled("header")`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
    padding-top: calc(${({ theme }) => theme.Heights.navbarHeight} + 2rem);
    padding-bottom: 2rem;
    padding-inline: 1rem;
    margin-inline: auto;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            max-width: ${({ theme }) => theme.Breakpoints.tablet};
        }
    }
`;

export const Title = styled("h1")`
    width: 100%;
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-family: ${({ theme }) => theme.Fonts.primary};
    text-align: left;
    color: ${({ theme }) => theme.Colors.primary};
`;
