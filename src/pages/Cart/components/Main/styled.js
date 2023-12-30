// Utils
import styled from "styled-components";

// Styles
export const StyledMain = styled("main")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 100%;
    max-width: ${({ theme }) => theme.Breakpoints.mobileLarge};
    padding: 1rem;
    padding-bottom: 11rem;
    margin-inline: auto;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.tablet}) {
        && {
            max-width: ${({ theme }) => theme.Breakpoints.tablet};
        }
    }
`;

export const Title = styled("h2")`
    width: 100%;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
    color: ${({ theme }) => theme.Colors.primary};
`;
